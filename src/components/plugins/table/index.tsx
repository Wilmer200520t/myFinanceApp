import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { AllTypesRow } from "../../../data/dataTypes";
import fetchData, { responseType } from "../../../data/fetchData";
import mappingCol from "../../../data/mappigColumns";
import dataDefault from "../../../data/defaultsColumnData";
import ModalTemplate from "./modal";
import DialogConfirmation from "./dialogConfirmation";
import { configTable } from "../../../data/tableInfoMapping";

interface DataTableCompProps {
  path: string;
}

const DataTableComp: React.FC<DataTableCompProps> = ({ path }) => {
  const emptyData: AllTypesRow = {} as AllTypesRow;

  // Configuración dinámica del título y subtítulo del modal según la ruta
  const { ModalHeader } = configTable(path);

  // Estados del componente
  const [arrayData, setArrayData] = useState<AllTypesRow[]>([]);
  const [data, setData] = useState<AllTypesRow>(emptyData);
  const [selectedData, setSelectedData] = useState<AllTypesRow[]>([]);
  const [dataDialog, setDataDialog] = useState<boolean>(false);
  const [deleteDataDialog, setDeleteDataDialog] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // Referencias a componentes
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<AllTypesRow[]>>(null);

  // Efecto para cargar datos iniciales y actualizar según la ruta
  useEffect(() => {
    let isMounted = true; // Bandera para controlar si el componente está montado

    fetchData
      .getData(path)
      .then((data) => {
        if (data instanceof Error) {
          throw new Error(data.message);
        }

        if (isMounted) {
          setArrayData(data as AllTypesRow[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (isMounted) {
          setArrayData([]);
        }
      });

    return () => {
      isMounted = false; // Desmontar componente
    };
  }, [path]); // Ejecutar efecto cuando cambia la ruta

  // Función para guardar datos modificados o nuevos
  const saveData = async () => {
    setSubmitted(true); // Indicar que se ha enviado el formulario

    setDataDialog(false); // Ocultar modal de edición
    setData(emptyData); // Resetear datos de la fila

    try {
      const response: AllTypesRow[] | responseType = await fetchData.createData(
        path,
        data
      );

      if (response as responseType) {
        throw new Error((response as responseType).message);
      }

      setArrayData(response as AllTypesRow[]); // Actualizar datos en la tabla
      toast.current?.show({
        severity: "success",
        summary: "Successful",
        detail: "Actualizado correctamente",
        life: 3000,
      });
    } catch (error: string | unknown) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error instanceof Error ? error.message : "Unknown error",
        life: 3000,
      });
    }
  };

  // Función para abrir el modal de creación de nuevo registro
  const openNew = () => {
    setData(emptyData); // Resetear datos de la fila
    setSubmitted(false); // Indicar que no se ha enviado el formulario
    setDataDialog(true); // Mostrar modal de edición
  };

  // Función para ocultar el modal de eliminación de datos
  const hideDeleteDataDialog = () => {
    setDeleteDataDialog(false); // Ocultar modal de eliminación
  };

  // Función para ocultar el modal de edición de datos
  const hideDialog = () => {
    setSubmitted(false); // Resetear estado de envío de formulario
    setDataDialog(false); // Ocultar modal de edición
  };

  // Función para eliminar datos de la tabla
  const deleteData = () => {
    setArrayData(arrayData.filter((item) => item !== data)); // Filtrar datos eliminando el seleccionado
    setDeleteDataDialog(false); // Ocultar modal de confirmación de eliminación
    setData(emptyData); // Resetear datos de la fila
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Eliminado correctamente",
      life: 3000,
    });
  };

  // Función para exportar datos en formato CSV
  const exportCSV = () => {
    dt.current?.exportCSV(); // Llamar método de exportación de DataTable
  };

  // Función para mostrar el modal de confirmación de eliminación de registros seleccionados
  const confirmDeleteSelected = () => {
    setDeleteDataDialog(true); // Mostrar modal de confirmación de eliminación
  };

  // Plantilla para la barra de herramientas izquierda (Nuevo y Eliminar)
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedData || !selectedData.length}
        />
      </div>
    );
  };

  // Plantilla para la barra de herramientas derecha (Exportar)
  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  // Pie de página del modal de edición de datos
  const dataDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveData} />
    </React.Fragment>
  );

  // Pie de página del modal de confirmación de eliminación de datos
  const deleteDataDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteDataDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteData}
      />
    </React.Fragment>
  );

  // Plantilla de cuerpo para las acciones de cada fila (Editar y Eliminar)
  const actionBodyTemplate = (data: AllTypesRow) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editData(data)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteData(data)}
        />
      </React.Fragment>
    );
  };

  // Función para editar datos (abrir modal de edición con los datos de la fila)
  const editData = (data: AllTypesRow) => {
    setData({ ...data });
    setDataDialog(true);
  };

  // Función para confirmar eliminación de datos (abrir modal de confirmación de eliminación)
  const confirmDeleteData = (data: AllTypesRow) => {
    setData(data);
    setDeleteDataDialog(true);
  };

  // Renderizado del componente DataTableComp
  return (
    <div>
      <Toast ref={toast} /> {/* Componente Toast para mostrar mensajes */}
      <div className="card">
        {/* Barra de herramientas superior con botones de acción */}
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate} // Barra de herramientas izquierda (Nuevo y Eliminar)
          right={rightToolbarTemplate} // Barra de herramientas derecha (Exportar)
        />

        {/* DataTable para mostrar los datos en forma de tabla */}
        <DataTable
          ref={dt} // Referencia al componente DataTable para acciones como exportar
          value={arrayData} // Datos de la tabla
          selection={selectedData} // Filas seleccionadas
          onSelectionChange={(e) => {
            if (Array.isArray(e.value)) {
              setSelectedData(e.value); // Actualizar filas seleccionadas
            }
          }}
          dataKey="id" // Clave única de los datos
          paginator // Activar paginación
          rows={25} // Número de filas por página
          rowsPerPageOptions={[25, 50, 75]} // Opciones de número de filas por página
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" // Plantilla de paginador
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}" // Plantilla de información de página actual
          globalFilter={globalFilter} // Filtro global de la tabla
          selectionMode="multiple" // Modo de selección múltiple
        >
          <Column selectionMode="multiple" exportable={false} />{" "}
          {/* Columna para selección múltiple */}
          {/* Mapeo de columnas según la ruta */}
          {mappingCol.getMappingColumn(path).map((item) => (
            <Column
              key={item.key}
              field={item.key}
              header={item.columnName}
              sortable // Activar ordenamiento
              style={{ minWidth: "12rem" }} // Estilo mínimo de la columna
            />
          ))}
          {/* Columna de acciones (editar y eliminar) */}
          <Column
            body={actionBodyTemplate} // Cuerpo personalizado de la columna (botones de acción)
            exportable={false} // No exportable a CSV
            style={{ minWidth: "12rem" }} // Estilo mínimo de la columna
          />
        </DataTable>

        {/* Modal de edición de datos */}
        <ModalTemplate
          visible={dataDialog} // Visibilidad del modal
          header={ModalHeader} // Título del modal
          actions={dataDialogFooter} // Acciones del modal
          ocultarDialog={hideDialog} // Función para ocultar el modal
          esquema={mappingCol.getMappingColumn(path)} // Mapeo de columnas para el modal
          data={
            Object.keys(data).length === 0
              ? (dataDefault.getArrayDefaults(path) as AllTypesRow) // Datos por defecto según la ruta
              : data || emptyData // Datos actuales o vacíos
          }
          setData={setData} // Función para actualizar datos del modal
        />

        {/* Modal de confirmación de eliminación de datos */}
        <DialogConfirmation
          deleteDialog={deleteDataDialog} // Visibilidad del modal de confirmación de eliminación
          hideDialog={hideDeleteDataDialog} // Función para ocultar el modal
          deleteDialogFooter={deleteDataDialogFooter} // Pie de página del modal de confirmación de eliminación
          data={data["id"]} // ID de los datos a eliminar
        />
      </div>
    </div>
  );
};

export default DataTableComp; // Exportar componente DataTableComp

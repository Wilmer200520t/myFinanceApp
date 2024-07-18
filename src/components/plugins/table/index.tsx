import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { AllTypesRow } from "../../../data/dataTypes";
import {
  createData,
  getData,
  responseType,
  updateData,
  deleteData as deleteRow,
} from "../../../data/fetchData";
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

  const { ModalHeader } = configTable(path);

  const [arrayData, setArrayData] = useState<AllTypesRow[]>([]);
  const [data, setData] = useState<AllTypesRow>(emptyData);
  const [selectedData, setSelectedData] = useState<AllTypesRow[]>([]);
  const [dataDialog, setDataDialog] = useState<boolean>(false);
  const [deleteDataDialog, setDeleteDataDialog] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<AllTypesRow[]>>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDataAsync = async () => {
      try {
        const data = await getData(path);
        if (isMounted) {
          setArrayData(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
    };
  }, [path]);

  const saveData = async () => {
    setSubmitted(true);
    setDataDialog(false);
    setData(emptyData);

    if (data.id !== 0) {
      try {
        const response: AllTypesRow[] | responseType = await updateData(
          path,
          data.id || 0,
          data
        );

        if ((response as responseType).message) {
          throw new Error((response as responseType).message);
        }

        setArrayData(response as AllTypesRow[]);
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
    } else {
      try {
        const response: AllTypesRow[] | responseType = await createData(
          path,
          data
        );

        if ((response as responseType).message) {
          throw new Error((response as responseType).message);
        }

        setArrayData(response as AllTypesRow[]);
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Creado correctamente",
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
    }
  };

  const openNew = () => {
    setData(emptyData);
    setSubmitted(false);
    setDataDialog(true);
  };

  const hideDeleteDataDialog = () => {
    setDeleteDataDialog(false);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setDataDialog(false);
  };

  const deleteData = () => {
    const response = deleteRow(path, data.id || 0);

    response.then((res) => {
      if (res.error) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: res.message,
          life: 3000,
        });
        return;
      } else {
        setArrayData(arrayData.filter((item) => item !== data));
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Eliminado correctamente",
          life: 3000,
        });
      }
      setDeleteDataDialog(false);
      setData(emptyData);
    });
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteDataDialog(true);
  };

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

  const dataDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveData} />
    </React.Fragment>
  );

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

  const editData = (data: AllTypesRow) => {
    setData({ ...data });
    setDataDialog(true);
  };

  const confirmDeleteData = (data: AllTypesRow) => {
    setData(data);
    setDeleteDataDialog(true);
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        />

        <DataTable
          ref={dt}
          value={arrayData}
          selection={selectedData}
          onSelectionChange={(e) => {
            if (Array.isArray(e.value)) {
              setSelectedData(e.value);
            }
          }}
          dataKey="id"
          paginator
          rows={25}
          rowsPerPageOptions={[25, 50, 75]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
          globalFilter={globalFilter}
          selectionMode="multiple"
          emptyMessage="No se encontraron registros" // Mensaje cuando no hay datos
        >
          <Column selectionMode="multiple" exportable={false} />
          {mappingCol.getMappingColumn(path).map((item) => {
            if (item.key === "cofiguracion" || item.key === "user_id")
              return null;
            return (
              <Column
                key={item.key}
                field={item.key}
                header={item.columnName}
                sortable
                style={{ minWidth: "12rem" }}
              />
            );
          })}
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          />
        </DataTable>

        <ModalTemplate
          visible={dataDialog}
          header={ModalHeader}
          actions={dataDialogFooter}
          ocultarDialog={hideDialog}
          esquema={mappingCol.getMappingColumn(path)}
          data={
            Object.keys(data).length === 0
              ? (dataDefault.getArrayDefaults(path) as AllTypesRow)
              : data || emptyData
          }
          setData={setData}
        />

        <DialogConfirmation
          deleteDialog={deleteDataDialog}
          hideDialog={hideDeleteDataDialog}
          deleteDialogFooter={deleteDataDialogFooter}
          data={data["id"]}
        />
      </div>
    </div>
  );
};

export default DataTableComp;

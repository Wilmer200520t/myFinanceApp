import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { AllTypesRow } from "../../../data/dataTypes";
import DialogConfirmation from "./dialogConfirmation";
import fetchData, { responseType } from "../../../data/fetchData";
import arrayDefault from "../../../data/arrayDefault";

interface DataTableCompProps {
  path: string;
}

const DataTableComp: React.FC<DataTableCompProps> = ({ path }) => {
  const emptyData: AllTypesRow = {} as AllTypesRow;

  const configTable = (path: string) => {
    switch (path) {
      case "Character":
        return {
          colName: "Name",
          errorName: "Name is required.",
          ModalHeader: "Character Information",
          subtittle: "Character",
        };
      // Puedes agregar más configuraciones para otros paths aquí
      default:
        return {
          colName: "Unknown",
          errorName: "Unknown field",
          ModalHeader: "Unknown Information",
          subtittle: "Unknown",
        };
    }
  };

  const { colName, subtittle } = configTable(path);

  //states
  const [arrayData, setArrayData] = useState<AllTypesRow[]>([]);
  const [data, setData] = useState<AllTypesRow>(emptyData);
  const [selectedData, setSelectedData] = useState<AllTypesRow[]>([]);
  const [dataDialog, setDataDialog] = useState<boolean>(false);
  const [deleteDataDialog, setDeleteDataDialog] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  //refs
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<AllTypesRow[]>>(null);

  //functions
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
      isMounted = false;
    };
  }, [path]);

  //controllers
  const saveData = async () => {
    setSubmitted(true);

    setDataDialog(false);
    setData(emptyData);
    try {
      const response: AllTypesRow[] | responseType = await fetchData.createData(
        path,
        data
      );

      if (response as responseType)
        throw new Error((response as responseType).message);

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
  };

  const openNew = () => {
    setData(emptyData);
    setSubmitted(false);
    setDataDialog(true);
  };

  const hideDeleteDataDialog = () => {
    setDeleteDataDialog(false);
  };

  //Not Used
  const hideDialog = () => {
    setSubmitted(false);
    setDataDialog(false);
  };

  const deleteData = () => {
    setArrayData(arrayData.filter((item) => item !== data));
    setDeleteDataDialog(false);
    setData(emptyData);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Data Deleted",
      life: 3000,
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

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between table-title-search">
      <h4 className="m-0">{subtittle}</h4>
      <IconField iconPosition="left" className="icon-field">
        <InputText
          type="search"
          className="p-inputtext-sm"
          placeholder="Search..."
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setGlobalFilter(target.value);
          }}
        />
      </IconField>
    </div>
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

  //templates Actions
  const editData = (data: AllTypesRow) => {
    setData({ ...data });
    setDataDialog(true);
  };

  const confirmDeleteData = (data: AllTypesRow) => {
    setData(data);
    setDeleteDataDialog(true);
  };

  //Actions
  function actionBodyTemplate(data: AllTypesRow) {
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
  }
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
          header={header}
          selectionMode="multiple">
          <Column selectionMode="multiple" exportable={false} />

          {arrayDefault.getArrayDefaults(path).map((item) => (
            <Column
              key={item.key}
              field={item.key}
              header={item.columnName}
              sortable
              style={{ minWidth: "12rem" }}
            />
          ))}
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableComp;

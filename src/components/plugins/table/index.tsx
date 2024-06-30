import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { AllTypes, AllTypesRow } from "../../../data/dataTypes";
import DialogConfirmation from "./dialogConfirmation";
import fetchData from "../../../data/fetchData";

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

  const { colName, errorName, ModalHeader, subtittle } = configTable(path);

  //states
  const [arrayData, setArrayData] = useState<AllTypesRow[]>([]);
  const [data, setData] = useState<AllTypesRow>(emptyData);
  const [selectedArrayData, setSelectedArrayData] = useState<AllTypes[]>([]);
  const [dataDialog, setDataDialog] = useState<boolean>(false);
  const [deleteDataDialog, setDeleteDataDialog] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  //refs
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<AllTypes[]>>(null);

  //functions
  useEffect(() => {
    fetchData.getData(path).then((data) => setArrayData(data));
  }, [path]);

  //controllers
  const saveData = () => {
    setDataDialog(false);
    setData(emptyData);
    let response = fetchData
      .updateData(path, id, data)
      .then((data) => setArrayData(data));
    if (response.error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: response.message,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "success",
        summary: "Successful",
        detail: "Actualizado correctamente",
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
    setDeleteArrayDataDialog(true);
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
          disabled={!selectedArrayData || !selectedArrayData.length}
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
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">{subtittle}</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
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
  const editData = (data: AllTypes) => {
    setData({ ...data });
    setDataDialog(true);
  };

  const confirmDeleteData = (data: AllTypes) => {
    setData(data);
    setDeleteDataDialog(true);
  };

  //Actions
  function actionBodyTemplate(data: AllTypes) {
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
          selection={selectedArrayData}
          onSelectionChange={(e) => {
            if (Array.isArray(e.value)) {
              setSelectedArrayData(e.value);
            }
          }}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
          globalFilter={globalFilter}
          header={header}
          selectionMode="multiple">
          <Column selectionMode="multiple" exportable={false} />
          <Column
            field="code"
            header={colName}
            sortable
            style={{ minWidth: "12rem" }}
          />
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          />
        </DataTable>
      </div>

      <DialogConfirmation
        deleteDialog={deleteDataDialog}
        hideDialog={hideDeleteDataDialog}
        deleteDialogFooter={deleteDataDialogFooter}
        data={"data"}
        message="¿Estás seguro de eliminar este elemento?"
      />
    </div>
  );
};

export default DataTableComp;

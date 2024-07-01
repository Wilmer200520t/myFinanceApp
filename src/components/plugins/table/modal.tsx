/* eslint-disable react-refresh/only-export-components */
import { Dialog } from "primereact/dialog";
import { AllTypesRow } from "../../../data/dataTypes";
import { InputText } from "primereact/inputtext";
import { defaultTypes } from "../../../data/mappigColumns";
import React, { useState, useCallback } from "react";

interface modalProps {
  visible: boolean;
  header: string;
  actions: JSX.Element;
  ocultarDialog: () => void;
  esquema: defaultTypes[];
  data: AllTypesRow;
  setData: (data: AllTypesRow) => void;
}

function ModalTemplate({
  visible,
  header,
  actions,
  ocultarDialog,
  esquema,
  data,
  setData,
}: modalProps) {
  //Function to change the data object
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
      const val = (e.target && e.target.value) || "";
      const _data = { ...data };
      // @ts-expect-error Description of why this error is expected.
      _data[name] = val;
      setData(_data);
    },
    [data, setData]
  );

  return (
    <Dialog
      visible={visible}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header={header}
      modal
      className="p-fluid"
      footer={actions}
      onHide={ocultarDialog}>
      {esquema.map((esquema) => {
        return (
          <div className="field" key={esquema.key}>
            <label htmlFor={esquema.key} className="font-bold">
              {esquema.columnName}
            </label>
            <InputText
              id={esquema.key}
              disabled={esquema.key === "id"}
              value={String(data[esquema.key as keyof AllTypesRow])} // Explicitly define the type of the data object property
              onChange={(e) => handleChange(e, esquema.key)}
              required
            />
          </div>
        );
      })}
      <div className="field"></div>
    </Dialog>
  );
}

export default React.memo(ModalTemplate);

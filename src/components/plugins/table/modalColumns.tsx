import React from "react";
import { InputText } from "primereact/inputtext";
import { AllTypesRow } from "../../../data/dataTypes";
import { classNames } from "primereact/utils";

interface modalColumnProps {
  name: string;
  data: AllTypesRow;
  setData: (data: AllTypesRow) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  submitted: boolean;
  errorName: string;
}

function modalColumns({
  name,
  onInputChange,
  submitted,
  errorName,
}: modalColumnProps) {
  return (
    <div className="field">
      <label htmlFor="name" className="font-bold">
        {name}
      </label>
      <InputText
        id="name"
        value="product.name"
        onChange={(e) => onInputChange(e, "name")}
        required
        autoFocus
        className={classNames({
          "p-invalid": submitted && !"product.name",
        })}
      />
      {submitted && !"product.name" && (
        <small className="p-error">{errorName}</small>
      )}
    </div>
  );
}

export default modalColumns;

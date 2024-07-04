import { AutoComplete } from "primereact/autocomplete";

interface FloatLabelProps {
  id: string;
  Label: string;
  value: string;
  setValue: (value: string) => void;
  classChild?: string;
  type?: string;
}
export default function FloatLabel({
  id,
  Label,
  value,
  setValue,
  classChild,
  type,
}: FloatLabelProps): JSX.Element {
  return (
    <div className={`card flex justify-content-center ${classChild}`}>
      <span className="p-float-label">
        <AutoComplete
          id={id}
          inputId="ac"
          value={value}
          onChange={(e) => setValue(e.value)}
          type={type}
        />
        <label htmlFor="ac">{Label}</label>
      </span>
    </div>
  );
}

import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

interface FloatLabelProps {
  id: string;
  Label: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
  obligatory?: boolean;
}
export default function FloatLabelComp({
  id,
  Label,
  value,
  setValue,
  type,
  obligatory,
}: FloatLabelProps): JSX.Element {
  return (
    <FloatLabel>
      <InputText
        id={id}
        value={value}
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        style={{ width: "100%" }}
        required={obligatory}
      />
      <label htmlFor={id}>{Label}</label>
    </FloatLabel>
  );
}

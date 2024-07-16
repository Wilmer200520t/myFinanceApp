import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import { Nullable } from "primereact/ts-helpers";

interface FloatLabelProps {
  id: string;
  Label: string;
  value: string;
  setValue: (value: string) => void;
  format?: string;
  obligatory?: boolean;
}

export default function FloatCalendar({
  id,
  Label,
  value,
  setValue,
  format,
  obligatory,
}: FloatLabelProps): JSX.Element {
  const [date, setDate] = useState<Nullable<Date>>(null);

  useEffect(() => {
    setDate(value ? new Date(value) : null);
  }, [value]);

  return (
    <FloatLabel>
      <Calendar
        inputId={id}
        value={date}
        onChange={(e) => {
          setDate(e.value);
          setValue(e.value?.toISOString() || "");
        }}
        dateFormat={format}
        style={{ width: "100%" }}
        required={obligatory}
      />
      <label htmlFor={id}>{Label}</label>
    </FloatLabel>
  );
}

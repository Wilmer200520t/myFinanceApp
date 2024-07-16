import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import { Nullable } from "primereact/ts-helpers";
import { addLocale } from "primereact/api";

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

  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });

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
        locale="es"
        className="float__calendar"
        required={obligatory}
      />
      <label htmlFor={id}>{Label}</label>
    </FloatLabel>
  );
}

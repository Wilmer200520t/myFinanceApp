export const cierreMensual: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  {
    key: "ejercicio_id",
    columnName: "Ejercicio ID",
    type: "text",
    disabled: true,
  },
  {
    key: "inversiones",
    columnName: "Inversiones",
    type: "text",
    disabled: false,
  },
  {
    key: "amount_ingresos",
    columnName: "Amount Ingresos",
    type: "number",
    disabled: false,
  },
  {
    key: "tax_amount",
    columnName: "Tax Amount",
    type: "number",
    disabled: false,
  },
  {
    key: "monto_estimado_gasto",
    columnName: "Monto Estimado Gasto",
    type: "number",
    disabled: false,
  },
  {
    key: "monto_gasto_real",
    columnName: "Monto Gasto Real",
    type: "number",
    disabled: false,
  },
  {
    key: "trend_type",
    columnName: "Trend Type",
    type: "text",
    disabled: false,
  },
];

export const cuentas: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  { key: "banco", columnName: "Banco", type: "text", disabled: false },
  { key: "comision", columnName: "Comisión", type: "number", disabled: false },
  {
    key: "trans_libres",
    columnName: "Trans Libres",
    type: "number",
    disabled: false,
  },
  {
    key: "tpcuenta",
    columnName: "Tipo de Cuenta",
    type: "text",
    disabled: false,
  },
  {
    key: "balance",
    columnName: "Balance Actual",
    type: "number",
    disabled: false,
  },
  { key: "moneda", columnName: "Moneda", type: "text", disabled: false },
  { key: "created_at", columnName: "Creado el", type: "date", disabled: true },
];

export const deudas: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  { key: "estado", columnName: "Estado", type: "text", disabled: false },
  {
    key: "ctadestino",
    columnName: "Cuenta Destino",
    type: "text",
    disabled: false,
  },
  {
    key: "ctaorigen",
    columnName: "Cuenta Origen",
    type: "text",
    disabled: false,
  },
  { key: "acreditor", columnName: "Acreditor", type: "text", disabled: false },
  { key: "monto", columnName: "Monto", type: "number", disabled: false },
  { key: "interes", columnName: "Interés", type: "number", disabled: false },
  { key: "plazo", columnName: "Plazo", type: "number", disabled: false },
  {
    key: "dfecha",
    columnName: "Fecha de Deuda",
    type: "date",
    disabled: false,
  },
  {
    key: "fecha_incio",
    columnName: "Fecha de Inicio",
    type: "date",
    disabled: false,
  },
  {
    key: "fecha_fin",
    columnName: "Fecha de Fin",
    type: "date",
    disabled: false,
  },
];

export const ejercicio: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "ejercicio", columnName: "Ejercicio", type: "text", disabled: false },
  { key: "periodo", columnName: "Periodo", type: "text", disabled: false },
];

export const ingresos: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  {
    key: "ejericio_id",
    columnName: "Ejercicio ID",
    type: "text",
    disabled: false,
  },
  {
    key: "ctadestino",
    columnName: "Cuenta Destino",
    type: "text",
    disabled: false,
  },
  { key: "monto", columnName: "Monto", type: "number", disabled: false },
  { key: "created_at", columnName: "Creado el", type: "date", disabled: true },
];

export const inversion: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  {
    key: "tpinvers",
    columnName: "Tipo de Inversión",
    type: "text",
    disabled: false,
  },
  { key: "monto", columnName: "Monto", type: "number", disabled: false },
  { key: "estado", columnName: "Estado", type: "text", disabled: false },
  {
    key: "monto_regreo",
    columnName: "Monto de Regreso",
    type: "number",
    disabled: false,
  },
  { key: "fecha", columnName: "Fecha", type: "date", disabled: false },
  {
    key: "back_purchase",
    columnName: "Fecha de Compra",
    type: "date",
    disabled: false,
  },
];

export const presupuestos: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  { key: "user_id", columnName: "User ID", type: "text", disabled: true },
  {
    key: "ejericio_id",
    columnName: "Ejercicio ID",
    type: "text",
    disabled: false,
  },
  { key: "title", columnName: "Título", type: "text", disabled: false },
  {
    key: "tppresup",
    columnName: "Tipo de Presupuesto",
    type: "text",
    disabled: false,
  },
  { key: "estado", columnName: "Estado", type: "text", disabled: false },
  {
    key: "preamount",
    columnName: "Monto del Presupuesto",
    type: "number",
    disabled: false,
  },
  {
    key: "description",
    columnName: "Descripción",
    type: "text",
    disabled: false,
  },
  { key: "created_at", columnName: "Creado el", type: "date", disabled: true },
];

export const transacciones: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  {
    key: "account_id",
    columnName: "Account ID",
    type: "text",
    disabled: false,
  },
  {
    key: "ejericio_id",
    columnName: "Ejercicio ID",
    type: "text",
    disabled: false,
  },
  { key: "monto", columnName: "Monto", type: "number", disabled: false },
  {
    key: "descripcion",
    columnName: "Descripción",
    type: "text",
    disabled: false,
  },
  {
    key: "tptransac",
    columnName: "Tipo de Transacción",
    type: "text",
    disabled: false,
  },
  {
    key: "opfecha",
    columnName: "Fecha de Operación",
    type: "date",
    disabled: false,
  },
  { key: "created_at", columnName: "Creado el", type: "date", disabled: true },
];

export const usuarios: defaultTypes[] = [
  { key: "id", columnName: "ID", type: "text", disabled: true },
  {
    key: "nomusuario",
    columnName: "Nombre de Usuario",
    type: "text",
    disabled: false,
  },
  { key: "foto", columnName: "Foto", type: "text", disabled: false },
  { key: "nombres", columnName: "Nombres", type: "text", disabled: false },
  { key: "apellidos", columnName: "Apellidos", type: "text", disabled: false },
  {
    key: "nacimiento",
    columnName: "Fecha de Nacimiento",
    type: "date",
    disabled: false,
  },
  { key: "pais", columnName: "País", type: "text", disabled: false },
  { key: "correo", columnName: "Correo", type: "email", disabled: false },
  {
    key: "password",
    columnName: "Contraseña",
    type: "password",
    disabled: false,
  },
  {
    key: "cofiguracion",
    columnName: "Configuración",
    type: "text",
    disabled: false,
  },
  { key: "created_at", columnName: "Creado el", type: "date", disabled: true },
];

export type defaultTypes = {
  key: string;
  columnName: string;
  type?: string;
  disabled?: boolean;
};

export function getMappingColumn(path: string) {
  switch (path) {
    case "cierreMensual":
      return cierreMensual;
    case "cuentas":
      return cuentas;
    case "deudas":
      return deudas;
    case "ejercicio":
      return ejercicio;
    case "ingresos":
      return ingresos;
    case "inversion":
      return inversion;
    case "presupuestos":
      return presupuestos;
    case "transacciones":
      return transacciones;
    case "usuarios":
      return usuarios;
    default:
      return [];
  }
}

export function getTableName(path: string) {
  switch (path) {
    case "usuarios":
      return "fusuarios";
    case "cierreMensual":
      return "cierre_mensual";
    case "cuentas":
      return "fcuentas";
    case "deudas":
      return "fdeudas";
    case "ejercicio":
      return "fejercicio";
    case "ingresos":
      return "fingresos";
    case "inversion":
      return "finversion";
    case "presupuestos":
      return "fpresupuestos";
    case "transacciones":
      return "ftransacciones";
  }
}

export default {
  cierreMensual,
  cuentas,
  deudas,
  ejercicio,
  ingresos,
  inversion,
  presupuestos,
  transacciones,
  usuarios,
  getMappingColumn,
};

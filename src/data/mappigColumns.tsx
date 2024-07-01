export const cierreMensual = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "ejercicio_id", columnName: "Ejercicio ID" },
  { key: "inversiones", columnName: "Inversiones" },
  { key: "amount_ingresos", columnName: "Amount Ingresos" },
  { key: "tax_amount", columnName: "Tax Amount" },
  {
    key: "monto_estimado_gasto",
    columnName: "Monto Estimado Gasto",
  },
  { key: "monto_gasto_real", columnName: "Monto Gasto Real" },
  { key: "trend_type", columnName: "Trend Type" },
];

export const cuentas = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "banco", columnName: "Banco" },
  { key: "comision", columnName: "Comisión" },
  { key: "trans_libres", columnName: "Trans Libres" },
  { key: "tpcuenta", columnName: "Tipo de Cuenta" },
  { key: "balance", columnName: "Balance" },
  { key: "moneda", columnName: "Moneda" },
  { key: "created_at", columnName: "Creado el" },
];

export const deudas = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "estado", columnName: "Estado" },
  { key: "ctadestino", columnName: "Cuenta Destino" },
  { key: "ctaorigen", columnName: "Cuenta Origen" },
  { key: "acreditor", columnName: "Acreditor" },
  { key: "monto", columnName: "Monto" },
  { key: "interes", columnName: "Interés" },
  { key: "plazo", columnName: "Plazo" },
  { key: "dfecha", columnName: "Fecha de Deuda" },
  { key: "fecha_incio", columnName: "Fecha de Inicio" },
  { key: "fecha_fin", columnName: "Fecha de Fin" },
];

export const ejercicio = [
  { key: "id", columnName: "ID" },
  { key: "ejercicio", columnName: "Ejercicio" },
  { key: "periodo", columnName: "Periodo" },
];

export const ingresos = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "ejericio_id", columnName: "Ejercicio ID" },
  { key: "ctadestino", columnName: "Cuenta Destino" },
  { key: "monto", columnName: "Monto" },
  { key: "created_at", columnName: "Creado el" },
];

export const inversion = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "tpinvers", columnName: "Tipo de Inversión" },
  { key: "monto", columnName: "Monto" },
  { key: "estado", columnName: "Estado" },
  { key: "monto_regreo", columnName: "Monto de Regreso" },
  { key: "fecha", columnName: "Fecha" },
  { key: "back_purchase", columnName: "Fecha de Compra" },
];

export const presupuestos = [
  { key: "id", columnName: "ID" },
  { key: "user_id", columnName: "User ID" },
  { key: "ejericio_id", columnName: "Ejercicio ID" },
  { key: "title", columnName: "Título" },
  { key: "tppresup", columnName: "Tipo de Presupuesto" },
  { key: "estado", columnName: "Estado" },
  { key: "preamount", columnName: "Monto del Presupuesto" },
  { key: "description", columnName: "Descripción" },
  { key: "created_at", columnName: "Creado el" },
];

export const transacciones = [
  { key: "id", columnName: "ID" },
  { key: "account_id", columnName: "Account ID" },
  { key: "ejericio_id", columnName: "Ejercicio ID" },
  { key: "monto", columnName: "Monto" },
  { key: "descripcion", columnName: "Descripción" },
  { key: "tptransac", columnName: "Tipo de Transacción" },
  { key: "opfecha", columnName: "Fecha de Operación" },
  { key: "created_at", columnName: "Creado el" },
];

export const usuarios = [
  { key: "id", columnName: "ID" },
  { key: "nomusuario", columnName: "Nombre de Usuario" },
  { key: "foto", columnName: "Foto" },
  { key: "nombres", columnName: "Nombres" },
  { key: "apellidos", columnName: "Apellidos" },
  { key: "nacimiento", columnName: "Fecha de Nacimiento" },
  { key: "pais", columnName: "País" },
  { key: "correo", columnName: "Correo" },
  { key: "password", columnName: "Contraseña" },
  { key: "cofiguracion", columnName: "Configuración" },
  { key: "created_at", columnName: "Creado el" },
];

export const character = [
  { key: "id", columnName: "ID" },
  { key: "name", columnName: "Nombre" },
  { key: "status", default: "Alive", columnName: "Estado" },
  { key: "species", columnName: "Especie" },
  { key: "type", columnName: "Tipo" },
  { key: "gender", default: "Male", columnName: "Género" },
  { key: "origin", columnName: "Origen" },
  { key: "location", columnName: "Ubicación" },
  { key: "image", columnName: "Imagen" },
  { key: "episode", columnName: "Episodios" },
  { key: "url", columnName: "URL" },
  { key: "created", columnName: "Creado el" },
];

export type defaultTypes = {
  key: string;
  columnName: string;
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
    case "character":
      return character;
    default:
      return [];
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
  character,
  getMappingColumn,
};

export const cierreMensualDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "ejercicio_id", default: 0, columnName: "Ejercicio ID" },
  { key: "inversiones", default: 0, columnName: "Inversiones" },
  { key: "amount_ingresos", default: 0, columnName: "Amount Ingresos" },
  { key: "tax_amount", default: 0, columnName: "Tax Amount" },
  {
    key: "monto_estimado_gasto",
    default: 0,
    columnName: "Monto Estimado Gasto",
  },
  { key: "monto_gasto_real", default: 0, columnName: "Monto Gasto Real" },
  { key: "trend_type", default: "", columnName: "Trend Type" },
];

export const cuentasDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "banco", default: "", columnName: "Banco" },
  { key: "comision", default: 0, columnName: "Comisión" },
  { key: "trans_libres", default: 0, columnName: "Trans Libres" },
  { key: "tpcuenta", default: "", columnName: "Tipo de Cuenta" },
  { key: "balance", default: 0, columnName: "Balance" },
  { key: "moneda", default: "", columnName: "Moneda" },
  { key: "created_at", default: new Date(), columnName: "Creado el" },
];

export const deudasDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "estado", default: "", columnName: "Estado" },
  { key: "ctadestino", default: 0, columnName: "Cuenta Destino" },
  { key: "ctaorigen", default: 0, columnName: "Cuenta Origen" },
  { key: "acreditor", default: "", columnName: "Acreditor" },
  { key: "monto", default: 0, columnName: "Monto" },
  { key: "interes", default: 0, columnName: "Interés" },
  { key: "plazo", default: 0, columnName: "Plazo" },
  { key: "dfecha", default: new Date(), columnName: "Fecha de Deuda" },
  { key: "fecha_incio", default: new Date(), columnName: "Fecha de Inicio" },
  { key: "fecha_fin", default: new Date(), columnName: "Fecha de Fin" },
];

export const ejercicioDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "ejercicio", default: 0, columnName: "Ejercicio" },
  { key: "periodo", default: 0, columnName: "Periodo" },
];

export const ingresosDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "ejericio_id", default: 0, columnName: "Ejercicio ID" },
  { key: "ctadestino", default: 0, columnName: "Cuenta Destino" },
  { key: "monto", default: 0, columnName: "Monto" },
  { key: "created_at", default: new Date(), columnName: "Creado el" },
];

export const inversionDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "tpinvers", default: "", columnName: "Tipo de Inversión" },
  { key: "monto", default: 0, columnName: "Monto" },
  { key: "estado", default: "", columnName: "Estado" },
  { key: "monto_regreo", default: 0, columnName: "Monto de Regreso" },
  { key: "fecha", default: new Date(), columnName: "Fecha" },
  { key: "back_purchase", default: new Date(), columnName: "Fecha de Compra" },
];

export const presupuestosDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "user_id", default: 0, columnName: "User ID" },
  { key: "ejericio_id", default: 0, columnName: "Ejercicio ID" },
  { key: "title", default: "", columnName: "Título" },
  { key: "tppresup", default: "", columnName: "Tipo de Presupuesto" },
  { key: "estado", default: "", columnName: "Estado" },
  { key: "preamount", default: 0, columnName: "Monto del Presupuesto" },
  { key: "description", default: "", columnName: "Descripción" },
  { key: "created_at", default: new Date(), columnName: "Creado el" },
];

export const transaccionesDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "account_id", default: 0, columnName: "Account ID" },
  { key: "ejericio_id", default: 0, columnName: "Ejercicio ID" },
  { key: "monto", default: 0, columnName: "Monto" },
  { key: "descripcion", default: "", columnName: "Descripción" },
  { key: "tptransac", default: "", columnName: "Tipo de Transacción" },
  { key: "opfecha", default: new Date(), columnName: "Fecha de Operación" },
  { key: "created_at", default: new Date(), columnName: "Creado el" },
];

export const usuariosDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "nomusuario", default: "", columnName: "Nombre de Usuario" },
  { key: "foto", default: "", columnName: "Foto" },
  { key: "nombres", default: "", columnName: "Nombres" },
  { key: "apellidos", default: "", columnName: "Apellidos" },
  { key: "nacimiento", default: new Date(), columnName: "Fecha de Nacimiento" },
  { key: "pais", default: "", columnName: "País" },
  { key: "correo", default: "", columnName: "Correo" },
  { key: "password", default: "", columnName: "Contraseña" },
  { key: "cofiguracion", default: "", columnName: "Configuración" },
  { key: "created_at", default: new Date(), columnName: "Creado el" },
];

export const characterDefaults = [
  { key: "id", default: 0, columnName: "ID" },
  { key: "name", default: "", columnName: "Nombre" },
  { key: "status", default: "unknown", columnName: "Estado" },
  { key: "species", default: "", columnName: "Especie" },
  { key: "type", default: "", columnName: "Tipo" },
  { key: "gender", default: "unknown", columnName: "Género" },
  { key: "origin", default: { name: "", url: "" }, columnName: "Origen" },
  { key: "location", default: { name: "", url: "" }, columnName: "Ubicación" },
  { key: "image", default: "", columnName: "Imagen" },
  { key: "episode", default: [], columnName: "Episodios" },
  { key: "url", default: "", columnName: "URL" },
  { key: "created", default: "", columnName: "Creado el" },
];

export default {
  cierreMensualDefaults,
  cuentasDefaults,
  deudasDefaults,
  ejercicioDefaults,
  ingresosDefaults,
  inversionDefaults,
  presupuestosDefaults,
  transaccionesDefaults,
  usuariosDefaults,
  characterDefaults,
};

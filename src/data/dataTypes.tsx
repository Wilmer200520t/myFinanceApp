export type CierreMensual = {
  id: number;
  user_id?: number;
  ejercicio_id?: number;
  inversiones?: number;
  amount_ingresos?: number;
  tax_amount?: number;
  monto_estimado_gasto?: number;
  monto_gasto_real?: number;
  trend_type?: string;
};

export type Cuentas = {
  id: number;
  user_id?: number;
  banco?: string;
  comision?: number;
  trans_libres?: number;
  tpcuenta?: string;
  balance?: number;
  moneda?: string;
  created_at?: Date;
};

export type Deudas = {
  id: number;
  user_id?: number;
  estado?: string;
  ctadestino?: number;
  ctaorigen?: number;
  acreditor?: string;
  monto?: number;
  interes?: number;
  plazo?: number;
  dfecha?: Date;
  fecha_incio?: Date;
  fecha_fin?: Date;
};

export type Ejercicio = {
  id: number;
  ejercicio: number;
  periodo: number;
};

export type Ingresos = {
  id: number;
  user_id?: number;
  ejericio_id?: number;
  ctadestino?: number;
  monto?: number;
  created_at?: Date;
};

export type Inversion = {
  id: number;
  user_id?: number;
  tpinvers?: string;
  monto?: number;
  estado?: string;
  monto_regreo?: number;
  fecha?: Date;
  back_purchase?: Date;
};

export type Presupuestos = {
  id: number;
  user_id?: number;
  ejericio_id?: number;
  title?: string;
  tppresup?: string;
  estado?: string;
  preamount?: number;
  description?: string;
  created_at?: Date;
};

export type Transacciones = {
  id: number;
  account_id?: number;
  ejericio_id?: number;
  monto?: number;
  descripcion?: string;
  tptransac?: string;
  opfecha?: Date;
  created_at?: Date;
};

export type Usuarios = {
  id: number;
  nomusuario: string;
  foto?: string;
  nombres?: string;
  apellidos?: string;
  nacimiento?: Date;
  pais?: string;
  correo?: string;
  password?: string;
  cofiguracion?: string;
  created_at?: Date;
};

export type AllTypes =
  | CierreMensual[]
  | Cuentas[]
  | Deudas[]
  | Ejercicio[]
  | Ingresos[]
  | Inversion[]
  | Presupuestos[]
  | Transacciones[]
  | Usuarios[];

export type AllTypesRow =
  | CierreMensual
  | Cuentas
  | Deudas
  | Ejercicio
  | Ingresos
  | Inversion
  | Presupuestos
  | Transacciones
  | Usuarios;

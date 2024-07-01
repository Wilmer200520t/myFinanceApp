export const ejercicioDefaults = { id: 0, ejercicio: 0, periodo: 0 };

export const ingresosDefaults = {
  id: 0,
  user_id: 0,
  ejericio_id: 0,
  ctadestino: 0,
  monto: 0,
  created_at: new Date(),
};

export const inversionDefaults = {
  id: 0,
  user_id: 0,
  tpinvers: "",
  monto: 0,
  estado: "",
  monto_regreo: 0,
  fecha: new Date(),
  back_purchase: new Date(),
};

export const presupuestosDefaults = {
  id: 0,
  user_id: 0,
  ejericio_id: 0,
  title: "",
  tppresup: "",
  estado: "",
  preamount: 0,
  description: "",
  created_at: new Date(),
};

export const transaccionesDefaults = {
  id: 0,
  account_id: 0,
  ejericio_id: 0,
  monto: 0,
  descripcion: "",
  tptransac: "",
  opfecha: new Date(),
  created_at: new Date(),
};

export const usuariosDefaults = {
  id: 0,
  nomusuario: "",
  foto: "",
  nombres: "",
  apellidos: "",
  nacimiento: new Date(),
  pais: "",
  correo: "",
  password: "",
  cofiguracion: "",
  created_at: new Date(),
};

export const characterDefaults = {
  id: 0,
  name: "",
  status: "Alive",
  species: "",
  type: "",
  gender: "Male",
  origin: "",
  location: "",
  image: "",
  episode: "",
  url: "",
  created: new Date(),
};

// Función para obtener el array por defecto basado en el path
export function getArrayDefaults(path: string) {
  switch (path) {
    case "ejercicio":
      return ejercicioDefaults;
    case "ingresos":
      return ingresosDefaults;
    case "inversion":
      return inversionDefaults;
    case "presupuestos":
      return presupuestosDefaults;
    case "transacciones":
      return transaccionesDefaults;
    case "usuarios":
      return usuariosDefaults;
    case "character":
      return characterDefaults;
  }
}

// Exportando todas las listas y la función
export default {
  ejercicioDefaults,
  ingresosDefaults,
  inversionDefaults,
  presupuestosDefaults,
  transaccionesDefaults,
  usuariosDefaults,
  characterDefaults,
  getArrayDefaults,
};

export function configTable(path: string) {
  switch (path) {
    case "dashboard":
      return {
        ModalHeader: "Formulario de Dashboard",
        subtittle: "Dashboard",
      };
    case "cuentas":
      return {
        ModalHeader: "Formulario de Cuentas",
        subtittle: "Cuentas",
      };
    case "ingresos":
      return {
        ModalHeader: "Formulario de Ingresos",
        subtittle: "Ingresos",
      };
    case "inversion":
      return {
        ModalHeader: "Formulario de Inversiones",
        subtittle: "Inversiones",
      };
    case "presupuestos":
      return {
        ModalHeader: "Formulario de Presupuestos",
        subtittle: "Presupuestos",
      };
    case "transacciones":
      return {
        ModalHeader: "Formulario de Transacciones",
        subtittle: "Transacciones",
      };
    default:
      return {
        ModalHeader: "Formulario de desconocida",
        subtittle: "Tipo de tabla desconocida",
      };
  }
}

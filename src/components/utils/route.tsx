import React from "react";
import DataTableComp from "../plugins/table";
import { configTable } from "../../data/tableInfoMapping";
import FormLogin from "../plugins/form/login";
import FormRegister from "../plugins/form/register";

// Define una interfaz para las props del componente
interface MainContentProps {
  path: string;
}

// Define una interfaz para el contenido según la ruta
interface PathContent {
  [key: string]: JSX.Element;
}

const MainContent: React.FC<MainContentProps> = ({ path }) => {
  // Define un objeto que mapee cada ruta a su contenido correspondiente
  const pathContent: PathContent = {
    login: <FormLogin />,
    register: <FormRegister />,
    logout: (
      <div>
        <h1>Logout Page</h1>
        {/* Aquí puedes colocar el contenido específico para la página de logout */}
      </div>
    ),
    dashboard: (
      <div className="main-content">
        <h1>Dashboard</h1>
        {/* Aquí puedes colocar el contenido específico para el dashboard */}
      </div>
    ),
    default: (
      <>
        <div className="table-header">
          <h1>{configTable(path).subtittle}</h1>
        </div>
        <div className="table-container">
          <DataTableComp path={path} />
        </div>
      </>
    ),
  };

  // Obtén el contenido según la ruta, o utiliza el contenido predeterminado si no se encuentra la ruta específica
  const content = pathContent[path] || pathContent.default;

  return <>{content}</>;
};

export default MainContent;

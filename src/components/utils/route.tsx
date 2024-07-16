import React, { useState } from "react";
import DataTableComp from "../plugins/table";
import { configTable } from "../../data/tableInfoMapping";
import FormLogin from "../plugins/form/login";
import FormRegister from "../plugins/form/register";
import Dashboard from "../plugins/dashboard";
import Loader from "../plugins/Loader";

// Define una interfaz para las props del componente
interface MainContentProps {
  path: string;
  logedIn: boolean;
}

// Define una interfaz para el contenido según la ruta
interface PathContent {
  [key: string]: JSX.Element;
}

const MainContent: React.FC<MainContentProps> = ({ path, logedIn }) => {
  const [isReady, setIsReady] = useState(false);
  const [loged, setLoged] = useState(false);

  useState(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 300);
    setLoged(logedIn);
  });

  if (!loged && path !== "login" && path !== "register") {
    window.location.href = "login";
    path = "login";
  }

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
      <>
        <div className="table-header">
          <h1>{configTable(path).subtittle}</h1>
        </div>
        <div className="table-container">
          <Dashboard />
        </div>
      </>
    ),
    default: <FormLogin />,
  };

  // Obtén el contenido según la ruta, o utiliza el contenido predeterminado si no se encuentra la ruta específica
  const content = pathContent[path] || pathContent.default;

  if (!isReady) {
    return <Loader visible={isReady} />;
  } else {
    return <>{content}</>;
  }
};

export default MainContent;

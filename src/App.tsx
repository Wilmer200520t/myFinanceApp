import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import DataTableComp from "./components/plugins/table";
import { configTable } from "./data/tableInfoMapping";
import { useState } from "react";
import FormLogin from "./components/plugins/form";
//import { store, VerifyAuth } from "./auth/storeProvaider";
//import AuthProvider from "react-auth-kit/lib/authProvider";

function App() {
  const [disableLogin, setDisableLogin] = useState(false);
  const currentUrl = window.location.href;
  const path = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  if (path === "") {
    window.location.href = "/dashboard";
  }

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar hideLog={disableLogin} sethideLog={setDisableLogin} />
      </div>
      <div className="main-content">
        <Card>
          {path === "login" ? (
            <FormLogin />
          ) : path === "logout" ? (
            <div>
              <h1>Logout Page</h1>
              {/* Aquí puedes colocar el contenido específico para la página de logout */}
            </div>
          ) : path === "dashboard" ? (
            <div className="main-content">
              <h1>Dashboard</h1>
              {/* Aquí puedes colocar el contenido específico para el dashboard */}
            </div>
          ) : (
            <>
              <div className="table-header">
                <h1>{configTable(path).subtittle}</h1>
              </div>
              <div className="table-container">
                <DataTableComp path={path} />
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;

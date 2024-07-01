import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import DataTableComp from "./components/plugins/table";
import { configTable } from "./data/tableInfoMapping";
import { useState, useEffect } from "react";
//import { store, VerifyAuth } from "./auth/storeProvaider";
//import AuthProvider from "react-auth-kit/lib/authProvider";

function App() {
  const [disableLogin, setDisableLogin] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    const currentPath = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

    if (currentPath === "") {
      window.location.href = "/dashboard";
    } else {
      //const auth = VerifyAuth();
      //if (auth !== true) {
      //  window.location.href = auth;
      //}
      //setPath(currentPath);
    }
  }, []);

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar hideLog={disableLogin} sethideLog={setDisableLogin} />
      </div>
      <div className="main-content">
        <Card>
          <div className="table-header">
            <h1>{configTable(path).subtittle}</h1>
          </div>
          <div className="table-container">
            <DataTableComp path={path} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;

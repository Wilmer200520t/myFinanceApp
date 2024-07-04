import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import { useState } from "react";
import MainContent from "./components/utils/route";

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
        <Card>{<MainContent path={path} />}</Card>
      </div>
    </div>
  );
}

export default App;

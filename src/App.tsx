import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import { useMemo, useState } from "react";
import MainContent from "./components/utils/route";
import credentials from "./auth/credentials";

function App() {
  const userCredentials = useMemo(() => new credentials(), []);
  const [Loged, setLoged] = useState(userCredentials.isLoged());
  const currentUrl = window.location.href;
  const path = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  if (path === "") {
    window.location.href = "/dashboard";
  }

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar hideLog={Loged} sethideLog={setLoged} />
      </div>
      <div className="main-content">
        <Card>{<MainContent path={path} logedIn={Loged} />}</Card>
      </div>
    </div>
  );
}

export default App;

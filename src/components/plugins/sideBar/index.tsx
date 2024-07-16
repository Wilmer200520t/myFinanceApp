"use client";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineCalculator,
  HiOutlineSwitchHorizontal,
  HiOutlineLogin,
  HiOutlineLogout,
} from "react-icons/hi";
import Item from "../sideBarItem";
import { Avatar } from "primereact/avatar";
import { useEffect, useMemo, useState } from "react";
import credentials from "../../../auth/credentials";

interface Props {
  hideLog: boolean;
  sethideLog: React.Dispatch<React.SetStateAction<boolean>>;
}

function Component({ hideLog, sethideLog }: Props) {
  const userCredentials = useMemo(() => new credentials(), []);
  const [username, setUsername] = useState("");
  const [nomusuario, setNomusuario] = useState("");

  useEffect(() => {
    if (userCredentials.isLoged()) {
      const { nombre, nomusuario } = userCredentials.getUser();

      setUsername(nomusuario);
      setNomusuario(nombre);
    }
  }, [userCredentials]);

  const logout = () => {
    userCredentials.logOut();
    sethideLog(false);
  };

  const heighSideBar = hideLog ? ["73%", "20%"] : ["90%", "5%"];
  return (
    <Sidebar aria-label="Roboto" className="sideBarLeft">
      <Sidebar.Logo
        href="/dashboard"
        img="..//..//..//..//public/icon_blue.png"
        imgAlt="Flowbite logo">
        myFinance
      </Sidebar.Logo>
      <Sidebar.Items style={{ height: heighSideBar[0] }}>
        <Sidebar.ItemGroup>
          <Item text="Dashboard" url="/dashboard" icon={HiChartPie} />
          <Item text="Cuentas" url="/cuentas" icon={HiOutlineBriefcase} />
          <Item
            text="Ingresos"
            url="/ingresos"
            icon={HiOutlineCurrencyDollar}
          />
          <Item text="Inversion" url="/inversion" icon={HiOutlineChartBar} />
          <Item
            text="Presupuestos"
            url="/presupuestos"
            icon={HiOutlineCalculator}
          />
          <Item
            text="Transaciones"
            url="/transacciones"
            icon={HiOutlineSwitchHorizontal}
          />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items style={{ height: heighSideBar[1] }}>
        <Sidebar.ItemGroup>
          {hideLog ? (
            <>
              <>
                <div className="profile">
                  <Avatar
                    image="..//..//..//..//public/avatar.svg"
                    size="xlarge"
                    shape="circle"
                    className="profile__avatar"
                  />
                  <h2 className="profile__name">{username}</h2>
                  <h2 className="profile__username">{nomusuario}</h2>
                  <Item
                    text="Cerrar Sesion"
                    url="/login"
                    icon={HiOutlineLogout}
                    onclickAction={logout}
                  />
                </div>
              </>
            </>
          ) : (
            window.location.pathname !== "/login" && (
              <Item text="Iniciar Sesion" url="/login" icon={HiOutlineLogin} />
            )
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Component;

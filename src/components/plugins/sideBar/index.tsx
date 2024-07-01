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

function Component() {
  return (
    <Sidebar aria-label="Roboto" className="sideBarLeft">
      <Sidebar.Logo
        href="#"
        img="..//..//..//..//public/icon_blue.png"
        imgAlt="Flowbite logo">
        myFinance
      </Sidebar.Logo>
      <Sidebar.Items style={{ height: "85%" }}>
        <Sidebar.ItemGroup>
          <Item text="Dashboard" url={"/dashboard"} icon={HiChartPie} />
          <Item text="Cuentas" url={"/cuentas"} icon={HiOutlineBriefcase} />
          <Item
            text="Ingresos"
            url={"/ingresos"}
            icon={HiOutlineCurrencyDollar}
          />
          <Item text="Inversion" url={"/inversion"} icon={HiOutlineChartBar} />
          <Item
            text="Presupuestos"
            url={"/presupuestos"}
            icon={HiOutlineCalculator}
          />
          <Item
            text="Transaciones"
            url={"/transacciones"}
            icon={HiOutlineSwitchHorizontal}
          />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items style={{ height: "5%" }}>
        <Sidebar.ItemGroup>
          <Item text="Sign In" url={"/login"} icon={HiOutlineLogin} />
          <Item text="Sign Up" url={"/logout"} icon={HiOutlineLogout} />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Component;

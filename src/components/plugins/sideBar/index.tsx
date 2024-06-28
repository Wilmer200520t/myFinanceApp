"use client";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import Item from "../sideBarItem";

export function Component() {
  return (
    <Sidebar aria-label="Roboto" className="sideBarLeft">
      <Sidebar.Logo
        href="#"
        img="..//..//..//..//public/icon_blue.png"
        imgAlt="Flowbite logo">
        myFinance
      </Sidebar.Logo>
      <Sidebar.Items style={{ height: "90%" }}>
        <Sidebar.ItemGroup>
          <Item text="Dashboard" url="#" icon={HiChartPie} />
          <Item text="Kanban" url="#" icon={HiViewBoards} />
          <Item text="Inbox" url="#" icon={HiInbox} label="3" />
          <Item text="Users" url="#" icon={HiUser} />
          <Item text="Products" url="#" icon={HiShoppingBag} />
          <Item text="Sign In" url="#" icon={HiArrowSmRight} />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items style={{ height: "5%" }}>
        <Sidebar.ItemGroup>
          <Item text="Sign Up" url="#" icon={HiTable} />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Component;

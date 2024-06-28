import React from "react";
import { Sidebar } from "flowbite-react";
import { IconType } from "react-icons";

type ItemProps = {
  url?: string;
  text: string;
  icon?: IconType;
  label?: string;
  style?: React.CSSProperties;
};

const Item: React.FC<ItemProps> = ({ url, text, icon, label, style }) => {
  return (
    <Sidebar.Item href={url} icon={icon} label={label} style={style}>
      {text}
    </Sidebar.Item>
  );
};

export default Item;

import React from "react";
import { Sidebar } from "flowbite-react";
import { IconType } from "react-icons";

type ItemProps = {
  url?: string;
  text: string;
  icon?: IconType;
  label?: string;
  style?: React.CSSProperties;
  onclickAction?: () => void;
};

const Item: React.FC<ItemProps> = ({
  url,
  text,
  icon,
  label,
  style,
  onclickAction,
}) => {
  return (
    <Sidebar.Item
      href={url}
      icon={icon}
      label={label}
      style={style}
      onClick={() => {
        if (onclickAction) onclickAction();
      }}>
      {text}
    </Sidebar.Item>
  );
};

export default Item;

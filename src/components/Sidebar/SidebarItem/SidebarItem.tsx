import React from "react";
import { useContext } from "react";
import { MainContentContext } from "../../MainLayout/MainLayout";
import "./SidebarItem.css";

type SidebarItemProps = {
  title: string;
  component: React.ComponentType<any>;
  componentProps?: Record<string, any>;
};

export default function SidebarItem({
  title,
  component,
  componentProps,
}: SidebarItemProps) {
  const ctx = useContext(MainContentContext);
  const setContent = ctx?.setContent;

  return (
    <li className="sidebar-item">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          const Comp = component;
          setContent?.(
              <Comp {...(componentProps ?? {})} />
          );
          return;
        }}
      >
        {title}
      </a>
    </li>
  );
}

export type { SidebarItemProps };

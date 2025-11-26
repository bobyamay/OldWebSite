import React from "react";

type SidebarItemProps = {
  title: string;
  component: React.ComponentType<any>;
  componentProps?: Record<string, any>;
};
import { useContext } from "react";
import { MainContentContext } from "../../MainLayout/MainLayout";

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
            <main className="main-content">
              <button onClick={() => setContent?.(null)} style={{ marginBottom: 12 }}>
                Back
              </button>
              <Comp {...(componentProps ?? {})} />
            </main>
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

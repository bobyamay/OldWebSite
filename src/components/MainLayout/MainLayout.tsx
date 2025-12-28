import Sidebar from "../Sidebar/Sidebar";
import { createContext } from "react";
import "./MainLayout.css";
import { useMainContent } from "../../hooks/useMainContent";

// Context provides a setter function to replace the main content
export const MainContentContext = createContext<{
  setContent?: (c: JSX.Element | null) => void
}>({});

export default function MainLayout() {
  const { content, setContent } = useMainContent()

  return (
    <MainContentContext.Provider value={{ setContent }}>
      <div className="main-container">
        <Sidebar title="メニュー" />
        <div className="main-content">
          {content}
        </div>
      </div>
    </MainContentContext.Provider>
  )
}

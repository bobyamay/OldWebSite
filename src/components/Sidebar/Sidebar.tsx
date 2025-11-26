import "./Sidebar.css";
import SidebarItem from './SidebarItem/SidebarItem'
import ContentMain from '../Content/ContentMain'
import ContentProfile from "../Content/ContentProfile";

type SidebarProps = {
  title: string
}

export default function Sidebar({ title }: SidebarProps) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">{title}</h2>
      <ul className="sidebar-list">
        <SidebarItem title="ホーム" component={ContentMain} />
        <SidebarItem title="プロフィール" component={ContentProfile} />
      </ul>
    </div>
  )
}

export type { SidebarProps }
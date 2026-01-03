import "./Sidebar.css";
import SidebarItem from './SidebarItem/SidebarItem'
import ContentMain from '../Content/ContentHome/ContentHome'
import ContentProfile from "../Content/ContentProfile/ContentProfile";
import ContentBrog from "../Content/ContentBrog/ContentBrog";

type SidebarProps = {
  title: string
}

export default function Sidebar({ title }: SidebarProps) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">{title}</h2>
      <h3 className=""></h3>
      <ul className="sidebar-list">
        <SidebarItem title="ホーム" component={ContentMain} />
        <SidebarItem title="プロフィール" component={ContentProfile} />
        <SidebarItem title="ブログ" component={ContentBrog} />
      </ul>
    </div>
  )
}

export type { SidebarProps }
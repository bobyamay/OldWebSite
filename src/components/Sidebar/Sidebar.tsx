import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">メニュー</h2>
      <ul className="sidebar-list">
        <li>
          <a href="#">ホーム</a>
        </li>
        <li>
          <a href="#">設定</a>
        </li>
        <li>
          <a href="#">プロフィール</a>
        </li>
        <li>
          <a href="#">ログアウト</a>
        </li>
      </ul>
    </div>
  );
}

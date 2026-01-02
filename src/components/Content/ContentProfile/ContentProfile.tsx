import PageTitle from '../../Common/PageTitle';
import './ContentProfile.css';

export default function ContentProfile() {
  return (
    <div className="main-content-profile">
      <PageTitle title="プロフィール" />
      <div className="content-profile-body">
        <div className="content-left">
          <img className="profile-image" src="/src/image/profile.jpeg" alt="プロフィール画像" />
        </div>
        <div className="content-right">
          <h3 className="profile-name">名前 : </h3>
          <p >山田太郎</p>
          <h3 className="profile-name">年齢 :</h3>
          <p >25</p>
        </div>
      </div>
    </div>
  );
}

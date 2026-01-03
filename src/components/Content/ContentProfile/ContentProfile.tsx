import PageTitle from '../../Common/PageTitle';
import './ContentProfile.css';

export default function ContentProfile() {

  const birthDate: string = '2000/01/02';
  const birthYear: number = parseInt(birthDate.split('/')[0]);
  const currentYear: number = new Date().getFullYear();
  const age: number = currentYear - birthYear;

  return (
    <div className="main-content-profile">
      <PageTitle title="プロフィール" />
      <div className="content-profile-body">
        <div className="content-left">
          <img className="profile-image" src="/src/image/profile.jpeg" alt="プロフィール画像" />
        </div>
        <div className="content-right">
          <h3 className="profile-title">名前  </h3>
          <p >山田太郎</p>
          <h3 className="profile-title">誕生日 </h3>
          <p >{birthDate}</p>
          <h3 className="profile-title">年齢 </h3>
          <p >{age}</p>
        </div>
      </div>
    </div>
  );
}

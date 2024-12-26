import imageUser from './assets/images/avatardefault_92824.webp';
import {gUserInfo} from './info';

function App() {
  return (
    <div >
      <h5>Họ và tên:{gUserInfo.lastname + gUserInfo.firstname}</h5>
     <img src={imageUser} width={300} alt="imgUser"/>
     <p>Tuổi:{gUserInfo.age}</p>
     <div>{gUserInfo.age<=35 ? "Anh ấy còn trẻ" : "Anh ấy đã già"}</div>
     <ul>
      {gUserInfo.language.map(function (pElement,pIndex) {
          return <li value={pIndex}>{pElement}</li>
      })}
     </ul>
    </div>
  );
}

export default App;

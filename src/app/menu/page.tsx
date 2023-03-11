import Image from 'next/image';
import logo from '../../../public/heart_icon.png';
import avatar from '../../../public/user_avatar.png';

import './page.css';

export default function Menu() {
  return (
    <main className="MenuContainer">
      <div className="MenuContent">
        <header className="MenuHeader">
          <div className="IconsContainer">
            <Image className="MenuLogo" src={logo} alt="logo" />
            <Image className="MenuLogo" src={avatar} alt="user avatar" />
            <Image className="MenuLogo" src={logo} alt="logo" />
          </div>
          <div className="UserInfosContainer">
            <p>
              Olá, <span className="MenuUserName">Usuário!</span>
            </p>
            <p>
              Selecione o serviço desejado:
            </p>
          </div>
        </header>
        <div className="MenuMainContentContainer">
          <button className="MenuButtonContainer">
            <p className="MenuMainButtonText">
              Doar Itens
            </p>
          </button>
          <button className="MenuButtonContainer">
            <p className="MenuMainButtonText">
              Buscar Doações
            </p>
          </button>
          <button className="MenuButtonContainer">
            <p className="MenuMainButtonText">
              Outras <br/>Informações
            </p>
          </button>
        </div>
      </div>
    </main>
  )
}
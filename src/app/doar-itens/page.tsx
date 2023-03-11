import Image from 'next/image';
import logo from '../../../public/heart_icon.png';

import './page.css';

export default function DoarItens() {
  return (
    <main className="DoarItensContainer">
      <div className="DoarItensContent">
        <header className="DoarItensHeader">
          <div className="IconsContainer">
            <Image className="DoarItensLogo" src={logo} alt="logo" />
            <Image className="DoarItensLogo" src={logo} alt="logo" />
          </div>
          <div className="UserInfosContainer">
            <p>
              Que tipos de itens deseja doar?
            </p>
          </div> 
        </header>
        <div className="DoarItensMainContentContainer">
          <select className="DoarItensSelect">
          <option value="" selected disabled hidden>Itens</option>
            <option value="roupas">Roupas</option>
            <option value="moveis">Móvies</option>
            <option value="ut_domesticos">Utensílios Domésticos</option>
            <option value="eletronicos">eletronicos</option>
            <option value="cama_mesa_banho">Cama, Mesa e Banho</option>
          </select>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            placeholder="Quantidade"
            min="0"
            className="DoarItensInputNumber"
          />  

          <textarea className="DoarItensInputTextArea" placeholder='Descrição dos itens...'>
            teste
          </textarea>
        </div>
          <input type="file" id="file" className="DoarItensUploadInput" />
        <div className="DoarItensUploadContainer">
          <div className="DoarItensUploadGallery" id="foto">
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo1" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo2" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo3" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo4" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo5" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo6" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo7" />
            <Image className="DoarItensFotoExemplo" src={logo} alt="Exemplo8" />
          </div>
        </div>
      </div>
    </main>
  )
}
import { Inter } from 'next/font/google';
import Image from 'next/image';
import logo from '../../../public/heart_icon.png';
import './page.css';

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <div className={inter.className}>
      <main className='HomeContainer'>
        <div className='ContentContainer'>
          <Image className="LoginLogo" src={logo} alt="logo" />
          <label className='LoginInputPurpleLabel'>
            CPF:
            <input type="text" className='LoginPurpleCpfContainer'/>
          </label>
          <label className='LoginInputPurpleLabel'>
            Senha:
            <input type="text" className='LoginPurplePwdContainer'/>
          </label>
          <div>
            <button className='LoginPurpleButton'>Entrar</button>
          </div>
        </div>
      </main>
    </div>
  )
}

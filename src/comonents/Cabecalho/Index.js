import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo-cinetag.svg';
import CabecalhoLink from 'comonents/CabecalhoLink/Index';

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt='logo do cineteg' />
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
import Cabecalho from 'comonents/Cabecalho/Index';
import './Index.module.css';
import Rodape from 'comonents/Rodape';
import Banner from 'comonents/Banner';

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home"/>
      <Rodape />
    </>
  )
}
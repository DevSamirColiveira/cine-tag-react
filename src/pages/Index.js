import Cabecalho from 'comonents/Cabecalho/Index';
import './Index.module.css';
import Rodape from 'comonents/Rodape';
import Banner from 'comonents/Banner';
import Titulo from 'comonents/Titulo';
import Card from 'comonents/Card';

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home"/>
      <Titulo>
        <h1>
          Um lugar para gradar seus vídeos e filmes!
        </h1>
        <Card id='1' titulo='Gato bonifácio' capa='https://www.psicologo.com.br/wp-content/uploads/encontrar-equilibrio-entre-a-vida-pessoal-e-profissional-1024x681.jpg' />
      </Titulo>
      <Rodape />
    </>
  )
}
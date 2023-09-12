import styles from './Index.module.css';
import Banner from 'comonents/Banner';
import Titulo from 'comonents/Titulo';
import Card from 'comonents/Card';
import videos from 'json/db.json';

export default function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>
          Um lugar para gradar seus vídeos e filmes!
        </h1>
        <section className={styles.container}>
          {videos.map((videos) => {
            return <Card {...videos} key={videos.id} />
          })}
        </section>
      </Titulo>
    </>
  )
}
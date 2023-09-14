import styles from './Index.module.css';
import Banner from 'comonents/Banner';
import Titulo from 'comonents/Titulo';
import Card from 'comonents/Card';
import { useEffect, useState } from 'react';

export default function Inicio() {

  // API
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/DevSamirColiveira/cine-tag-react-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

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
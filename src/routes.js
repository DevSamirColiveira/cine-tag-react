import FavoritosContext from "Contextos/Favoritos";
import Cabecalho from "comonents/Cabecalho/Index";
import Container from "comonents/Container";
import Rodape from "comonents/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosContext>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritosContext>
        <Rodape />
      </Container>
    </BrowserRouter>
  )
}
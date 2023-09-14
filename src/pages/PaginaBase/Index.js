import FavoritosProvider from "Contextos/Favoritos";
import Cabecalho from "comonents/Cabecalho/Index";
import Container from "comonents/Container";
import Rodape from "comonents/Rodape";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
        <Cabecalho />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Rodape />
    </main>
)
}
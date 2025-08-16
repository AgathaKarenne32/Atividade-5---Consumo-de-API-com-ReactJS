import { useState, useEffect } from 'react';
import { getMovieDetails, searchMovies } from './services/api';
import PaginaBuscar from './components/PaginaBuscar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import Favoritos from './components/Favoritos';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // Estados principais
  const [movies, setMovies] = useState([]); // lista de filmes buscados
  const [query, setQuery] = useState('') // termo de busca
  const [page, setPage] = useState(1) // página atual
  const [totalPages, setTotalPages] = useState(1) // total de páginas da busca
  const [selectedMovie, setSelectedMovie] = useState(null) // filme selecionado para detalhes
  const [favoritos, setFavoritos] = useState([]) // lista de filmes favoritos
  const [loading, setLoading] = useState(false) // indicador de carregamento
  const [error, setError] = useState(null) // mensagem de erro

  // Função de busca de filmes
  const handleSearch = async (searchTerm, pageNumber = 1) => {
    setQuery(searchTerm) // atualiza o termo de busca
    setLoading(true) // inicia indicador de loading
    setError(null) // reseta mensagens de erro

    try {
      // chamada à API de busca de filmes
      const { results, page: currentPage, totalPages } = await searchMovies(searchTerm, pageNumber);

      // caso não haja resultados
      if (results.length === 0) {
        setError("Nenhum filme encontrado.");
      }

      setMovies(results) // atualiza lista de filmes
      setPage(currentPage) // atualiza página atual
      setTotalPages(totalPages) // atualiza total de páginas
    } catch (err) {
      console.error(err)
      setError("Ocorreu um erro ao buscar os filmes.") // mensagem de erro genérica
    } finally {
      setLoading(false) // finaliza loading
    }
  }

  // Função para exibir detalhes de um filme
  const handleDetails = async (movie) => {
    const details = await getMovieDetails(movie.id); // busca detalhes do filme
    setSelectedMovie(details); // atualiza estado para abrir modal
  }

  // Função para fechar modal de detalhes
  const handleCloseDetails = () => setSelectedMovie(null)

  // Funções de paginação
  const handleNextPage = () => {
    if (page < totalPages) handleSearch(query, page + 1); // vai para próxima página
  }

  const handlePrevPage = () => {
    if (page > 1) handleSearch(query, page - 1); // vai para página anterior
  }

  // Carregar favoritos do localStorage ao iniciar
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favs)
  }, [])

  // Salvar favoritos sempre que mudar
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos])

  // Adicionar ou remover filme dos favoritos
  const toggleFavorito = (filme) => {
    const jaFavorito = favoritos.some((fav) => fav.id === filme.id);
    if (jaFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== filme.id)); // remove se já está nos favoritos
    } else {
      setFavoritos([...favoritos, filme]); // adiciona aos favoritos
    }
  }

  return (
    <Router>
      {/* Navegação */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>

      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h1>Busca de Filmes</h1>
              <PaginaBuscar onSearch={handleSearch} />

              {/* Lista de filmes buscados */}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {loading && <p>Carregando filmes...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
  
                {!loading && !error && movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={handleDetails}
                    onToggleFavorito={toggleFavorito}
                    isFavorito={favoritos.some((fav) => fav.id === movie.id)}
                  />
                ))}
              </div>


              {/* Paginação */}
              {movies.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                  <button onClick={handlePrevPage} disabled={page === 1}>Página anterior</button>
                  <span style={{ margin: "0 10px" }}>Página {page} de {totalPages}</span>
                  <button onClick={handleNextPage} disabled={page === totalPages}>Próxima Página</button>
                </div>
              )}

              {/* Modal de detalhes */}
              {selectedMovie && (
                <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />
              )}
            </div>
          }
        />

        {/* Página de favoritos */}
        <Route
          path="/favoritos"
          element={
            <Favoritos
              favoritos={favoritos} // lista de favoritos
              onRemove={toggleFavorito} // função para remover favorito
            />
          }
        />
      </Routes>
    </Router>
  )

}
export default App;

import { useState, useEffect } from 'react';
import { getMovieDetails, searchMovies, getMoviesCategory } from './services/api';
import PaginaBuscar from './components/PaginaBuscar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import Favoritos from './components/Favoritos';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import MovieList from './components/MovieList';

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
  const [popular, setPopular] = useState([])
  const [top_rated, setTopRated] = useState([])
  const [nowplaying, setNowPlaying] = useState([])

  // Função de busca de filmes
  const handleSearch = async (searchTerm, pageNumber = 1) => {
    setQuery(searchTerm)
    setLoading(true)
    setError(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textoBusca.trim() !== '') {
      onSearch(textoBusca);
    }
  };
  
    try {
      const { results, page: currentPage, totalPages } = await searchMovies(searchTerm, pageNumber);
      if (results.length === 0) setError("Nenhum filme encontrado.");
      setMovies(results)
      setPage(currentPage)
      setTotalPages(totalPages)
    } catch (err) {
      console.error(err)
      setError("Ocorreu um erro ao buscar os filmes.")
    } finally {
      setLoading(false)
    }
  }

  const handleDetails = async (movie) => {
    const details = await getMovieDetails(movie.id);
    setSelectedMovie(details);
  }

  const handleCloseDetails = () => setSelectedMovie(null)

  const handleNextPage = () => { if(page < totalPages) handleSearch(query, page + 1) }
  const handlePrevPage = () => { if(page > 1) handleSearch(query, page - 1) }

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favs)
  }, [])

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos])

  //useeffect para listar por categoria
  // useEffect para carregar as categorias na primeira vez
  useEffect(() => {
  const loadInitialMovies = async () => {
    try {
      // Promise.all executa todas as chamadas em paralelo
      const [popular, top_rated, nowPlaying] = await Promise.all([
        getMoviesCategory('popular'),     
        getMoviesCategory('top_rated'),   
        getMoviesCategory('now_playing')   
      ])

      setPopular(popular)
      setTopRated(top_rated)
      setNowPlaying(nowPlaying)
    } catch (err){
      console.error("Erro ao carregar categorias de filmes:", err)
    }
  }
  loadInitialMovies();
}, []);

  function toggleFavorito(filme) {
    const jaFavorito = favoritos.some((fav) => fav.id === filme.id);
    if (jaFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== filme.id));
    } else {
      setFavoritos([...favoritos, filme]);
    }
  }
    console.log("Renderizando com os estados:", { popular, top_rated, nowplaying});

return (
  <Router>
    {/* Navegação */}
    <header className="app-header">
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favoritos" className="nav-link">Favoritos</Link>
      </nav>
    </header>

    <main className="app-main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="page-busca">
                <h1 className="page-title">Busca de Filmes</h1>
                <PaginaBuscar onSearch={handleSearch} />
              </section>

              {/*categorias na lista*/}
              {movies.length === 0 ? (
                <>
                  <MovieList 
                    title="Populares" 
                    movies={popular} 
                    onDetails={handleDetails}
                    onToggleFavorito={toggleFavorito}
                    favoritos={favoritos}
                  />
                  <MovieList 
                    title="Mais Bem Avaliados" 
                    movies={top_rated} 
                    onDetails={handleDetails}
                    onToggleFavorito={toggleFavorito}
                    favoritos={favoritos}
                  />
                  <MovieList 
                    title="Em Cartaz" 
                    movies={nowplaying} 
                    onDetails={handleDetails}
                    onToggleFavorito={toggleFavorito}
                    favoritos={favoritos}
                  />
                </>
              ) : (
                // Se HOUVER uma busca, mostra os resultados e a paginação
                <>
                  <div className="search-results-container">
                    <h2 className='category-title'>Resultados da Busca</h2>
                    <div className="movies-container">
                      {loading && <p className="loading">Carregando filmes...</p>}
                      {error && <p className="error">{error}</p>}
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
                  </div>
                  
                  <div className="pagination">
                    <button onClick={handlePrevPage} disabled={page === 1}>Página anterior</button>
                    <span>Página {page} de {totalPages}</span>
                    <button onClick={handleNextPage} disabled={page === totalPages}>Próxima Página</button>
                  </div>
                </>
              )}

              {/* O modal de detalhes*/}
              {selectedMovie && <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />}
            </>
          }
        />

        <Route
          path="/favoritos"
          element={
            <section className="page-favoritos">
              <h1 className="page-title">Meus Favoritos</h1>
              <div className="favoritos-container">
                {favoritos.length === 0 && <p>Nenhum favorito ainda.</p>}
                {favoritos.map((movie) => (
                  <div className="favorito-card" key={movie.id}>
                    <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
                      alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                    <button onClick={() => toggleFavorito(movie)}>Remover dos Favoritos</button>
                  </div>
                ))}
              </div>
            </section>
          }
        />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

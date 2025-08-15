import { useState } from 'react';
import { getMovieDetails, searchMovies } from './services/api';
import PaginaBuscar from './components/PaginaBuscar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  //mudança para função obrigatoria de paginação
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedMovie, setSelectedMovie] = useState(null)

                              //adicionado como parametro e retirado o query
  const handleSearch = async (searchTerm, pageNumber = 1) => {
    setQuery(searchTerm);
    //chamadas antigas
    //const data = await searchMovies(searchTerm, pageNumber)
    //const results = await searchMovies(query);
    // adicioando...
    const { results, page: currentPage, totalPages } = await searchMovies(searchTerm, pageNumber);

    setMovies(results);
    setPage(currentPage);
    setTotalPages(totalPages);
  };

  const handleDetails = async (movie) => {
    //detalhes da pagina
    const details = await getMovieDetails(movie.id);
    setSelectedMovie(details);
  };

  // const de fechar detalhes
  const handleCloseDetails = () => {
    setSelectedMovie(null)
  }
  //const de handle proxima pagina
  const handleNextPage = () => {
    if(page < totalPages) handleSearch(query, page + 1)
  }

  //const de pagina anterior
  const handlePrevPage = () => {
  if(page > 1) handleSearch(query, page - 1);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Busca de Filmes</h1>
      <PaginaBuscar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onDetails={handleDetails} />
        ))}
      </div>
      {/*adicionando... para paginação*/}
      {movies.length > 0 && (
        <div style={{marginTop: '20px'}}>
          <button onClick={handlePrevPage} disabled={page === 1} style={{marginRight: '10px'}}>
            Página anterior
            </button>
            <span>Página {page} de {totalPages}</span>
          <button onClick={handleNextPage} disabled={page === totalPages} style={{marginLeft: '10px'}}>
            Próxima Página
          </button>
        </div>
      )}

      {/*modal de detlhaes*/}
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />}
    </div>
  );
}

export default App;

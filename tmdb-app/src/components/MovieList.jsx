//  src/components/MovieList.jsx

import React from "react";
import MovieCard from './MovieCard';

function MovieList({title, movies, onDetails, onToggleFavorito, favoritos}){
    // Se não houver filmes, não renderiza nada (ou poderia mostrar uma mensagem)
    if(!movies || movies.length === 0){
        return null
    }



return (
    <section className="movie-list-section">
      <h2 className="category-title">{title}</h2>
      <div className="movies-container-horizontal">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={onDetails}
            onToggleFavorito={onToggleFavorito}
            isFavorito={favoritos.some((fav) => fav.id === movie.id)}
          />
        ))}
      </div>
    </section>
  )
}
  export default MovieList

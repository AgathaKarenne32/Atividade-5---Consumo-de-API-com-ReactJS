import React from "react";

function MovieCard({ movie, onDetails, onToggleFavorito, isFavorito }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=Sem+Imagem';

  return (
    <div className="favorito-card">
      <div>
        <img src={posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>

      {/* Container dos botões */}
      <div className="card-buttons">
        <button className="detalhes-button" onClick={() => onDetails(movie)}>
          Ver Detalhes
        </button>

        <button className="favorito-button" onClick={() => onToggleFavorito(movie)}>
          {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

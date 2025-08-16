// src/components/MovieCard.jsx

import React from "react";

function MovieCard({ movie, onDetails, onToggleFavorito, isFavorito }) {
  // URL do poster (fallback para placeholder se não tiver)
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=Sem+Imagem';

  return (
    <div className="favorito-card">
      <img src={posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>

      {/* Botão para abrir detalhes */}
      <button onClick={() => onDetails(movie)}>
        Ver Detalhes
      </button>

      {/* Botão de favoritar / remover dos favoritos */}
      <button onClick={() => onToggleFavorito(movie)}>
        {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  )
}

export default MovieCard;
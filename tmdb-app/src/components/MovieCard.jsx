// src/components/MovieCard.jsx

import React from "react";

function MovieCard({ movie, onDetails }) {
  // URL do poster (fallback para placeholder se não tiver)
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=Sem+Imagem';

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        width: '200px',
        margin: '10px',
        textAlign: 'center',
      }}
    >
      <img
        src={posterUrl}
        alt={movie.title || 'Sem título'}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h3 style={{ fontSize: '16px', margin: '10px 0 5px' }}>
        {movie.title || 'Sem título'}
      </h3>
      <p style={{ margin: '0 0 10px', color: '#555' }}>
        {movie.release_date ? movie.release_date.split('-')[0] : 'Ano N/A'}
      </p>
      <button
        onClick={() => onDetails(movie)}
        style={{
          padding: '6px 10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Ver detalhes
      </button>
    </div>
  );
}

export default MovieCard;

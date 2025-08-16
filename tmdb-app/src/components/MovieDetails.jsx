// src/components/MovieDetails.jsx
import React from 'react';

function MovieDetails({ movie, onClose }) {
  if (!movie) return null;

  const director = movie.credits?.crew?.find((c) => c.job === 'Director');
  const cast = movie.credits?.cast?.slice(0, 5) || [];

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sem+Imagem';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>Fechar</button>
        <div className="modal-body">
          <img src={posterUrl} alt={movie.title} className="modal-poster"/>
          <div className="modal-info">
            <h2>{movie.title} ({movie.release_date?.split('-')[0]})</h2>
            <p><strong>Diretor:</strong> {director?.name || 'N/A'}</p>
            <p><strong>Elenco:</strong> {cast.map(a => a.name).join(', ') || 'N/A'}</p>
            <p><strong>Avaliação:</strong> {movie.vote_average}</p>
            <p><strong>Sinopse:</strong> {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

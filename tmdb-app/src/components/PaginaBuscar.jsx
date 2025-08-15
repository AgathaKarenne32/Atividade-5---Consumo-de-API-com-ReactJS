// src/components/PaginaBuscar.jsx
//1. Página de Busca função obrigatoria 
import { useState } from 'react';

function PaginaBuscar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Digite o nome do filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Buscar
      </button>
    </form>
  );
}

export default PaginaBuscar;

Cine-Busca: Explorador de Filmes com React
🎬 Visão Geral
O Cine-Busca é uma aplicação web desenvolvida em React que permite aos usuários explorar um vasto catálogo de filmes. Utilizando a API do The Movie Database (TMDB), a plataforma oferece uma interface intuitiva para buscar filmes, visualizar informações detalhadas e gerenciar uma lista pessoal de favoritos. O projeto foi criado para demonstrar habilidades em desenvolvimento front-end com React, incluindo gerenciamento de estado, consumo de APIs e persistência de dados no navegador.

✨ Funcionalidades Principais
O projeto foi construído com as seguintes funcionalidades em mente:

Catálogo Inicial Dinâmico: Ao abrir a aplicação, o usuário é recebido com listas de filmes organizadas por categorias populares, como "Populares", "Mais Bem Avaliados" e "Em Cartaz", oferecendo uma descoberta imediata de conteúdo relevante.

Página de Busca Inteligente:

Um campo de busca permite que os usuários encontrem filmes específicos por título.

Os resultados são exibidos em um layout de grade claro, mostrando o pôster, título e ano de lançamento de cada filme.

Paginação Completa: Para buscas com muitos resultados, um sistema de paginação foi implementado, permitindo uma navegação fluida e organizada entre as diferentes páginas.

Página de Detalhes Imersiva:

Ao clicar em um filme, o usuário é levado a uma página de detalhes completa.

Esta página exibe informações ricas como sinopse, avaliação, gêneros, duração, diretor e o elenco principal.

Lista de Favoritos Persistente:

Em cada filme (tanto na listagem quanto nos detalhes), há um botão para "favoritar".

Os filmes marcados como favoritos são salvos localmente no navegador (localStorage), garantindo que a lista do usuário persista mesmo após fechar a página.

É possível visualizar a lista de favoritos e remover itens a qualquer momento.

Tratamento de Erros e Feedback de Carregamento:

A aplicação exibe indicadores de carregamento (loading spinners) enquanto os dados da API estão sendo buscados, melhorando a experiência do usuário.

Mensagens de erro claras são exibidas caso ocorra algum problema na comunicação com a API (ex: chave de API inválida, filme não encontrado).

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para a construção da interface de usuário.

Hooks do React: (useState, useEffect, useCallback) para gerenciamento de estado e ciclo de vida dos componentes.

API do The Movie Database (TMDB): Fonte de todos os dados sobre os filmes.

Fetch API / Axios: Para realizar as requisições HTTP à API do TMDB.

Tailwind CSS: Para estilização rápida e responsiva da interface.

LocalStorage: Para persistência da lista de filmes favoritos no navegador do usuário.

🚀 Como Executar o Projeto Localmente
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

Pré-requisitos
Node.js (versão 14 ou superior)

npm ou Yarn

Uma chave de API do TMDB (é gratuito e rápido de obter)

Passos
Clone o repositório:

git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO>

Instale as dependências:

npm install
# ou
yarn install

Configure sua chave de API:

No código-fonte, localize o arquivo principal (geralmente App.js ou similar).

Encontre a constante API_KEY e substitua o valor 'SUA_CHAVE_API_AQUI' pela sua chave de API real do TMDB.

// Exemplo no código
const API_KEY = 'SUA_CHAVE_API_AQUI'; 

Inicie a aplicação:

npm start
# ou
yarn start

Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.

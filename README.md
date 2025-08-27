# 🎬 Cine-Busca

> Explorador de Filmes com React

O **Cine-Busca** é uma aplicação web desenvolvida em **React.js** que permite aos usuários explorar um vasto catálogo de filmes. Integrando a poderosa **API do The Movie Database (TMDB)**, a plataforma oferece uma experiência fluida de busca, visualização e gerenciamento de filmes favoritos.

## 📝 Visão Geral

Este projeto foi criado com o objetivo de demonstrar habilidades em:

- Desenvolvimento front-end com React
- Consumo de APIs REST
- Gerenciamento de estado com Hooks
- Estilização responsiva com Tailwind CSS
- Persistência de dados com `localStorage`

---

## ✨ Funcionalidades Principais

- **🎞️ Catálogo Inicial Dinâmico:** Exibe filmes populares, mais bem avaliados e em cartaz logo ao abrir.
- **🔎 Busca Inteligente:** Encontre filmes por título com resultados exibidos em um layout de grade.
- **📄 Página de Detalhes:** Veja informações completas de cada filme, incluindo sinopse, avaliação, gêneros, duração, diretor e elenco principal.
- **❤️ Lista de Favoritos Persistente:** Marque filmes como favoritos e eles serão salvos localmente no navegador.
- **📑 Paginação Completa:** Navegue facilmente por grandes listas de resultados.
- **⏳ Feedback de Carregamento e Erros:** Indicadores visuais informam carregamento de dados ou falhas na comunicação com a API.

---

## 🛠️ Tecnologias Utilizadas

- **React.js**
- **React Hooks** (`useState`, `useEffect`, `useCallback`)
- **TMDB API**
- **Fetch API** ou **Axios**
- **Tailwind CSS**
- **LocalStorage**

---

## 🚀 Como Executar o Projeto Localmente

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm ou Yarn
- Uma chave de API do [TMDB](https://www.themoviedb.org/)

### 📥 Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/AgathaKarenne32/Atividade-5---Consumo-de-API-com-ReactJS
cd tmdb-app
````

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Configure sua chave de API:**

No arquivo principal (geralmente `src/App.js`), substitua `'SUA_CHAVE_API_AQUI'` pela sua chave real do TMDB:

```js
const API_KEY = 'sua_chave_tmdb_aqui';
```

4. **Inicie a aplicação:**

```bash
npm start
# ou
yarn start
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 🙌 Contribuições

Contribuições são muito bem-vindas! Se tiver sugestões ou melhorias, sinta-se livre para abrir uma *issue* ou um *pull request*.

---

*Desenvolvido com 💙 usando React e TMDB API.*

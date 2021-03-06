import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <body>
      <Header />
      <MovieList className="movie-list" movies={ movies } />
    </body>
  );
}

export default App;

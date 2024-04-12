import { useState } from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import SinglePlanetPage from './pages/singlePlanetPage/SinglePlanetPage';

function App() {

  return (
    <div className="app">
      Solaris
      <HomePage />
      <SinglePlanetPage />
    </div>
  )
}

export default App;

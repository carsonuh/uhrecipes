import React from 'react';
import './App.css';
import {recipeMock} from "./data"
import Recipe from './components/recipePage/RecipePage';

function App() {

  return (
    <div className="App">
      <Recipe name={recipeMock.name} ingredients={recipeMock.ingredients} directions={recipeMock.directions} />
    </div>
  );
}

export default App;

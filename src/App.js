import React from 'react';
import Hexagonal2048 from './Hexagonal2048';

function App() {
  return (
    <div className='App'>
      <Hexagonal2048 onGameOver={() => alert('Game over!')} />
    </div>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
    );
}

export default App;

import React, { useState, useEffect } from 'react';

function Pokedex() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonDetails(data));
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <div>
        <button className="nav-button" onClick={() => handleLanguageChange('english')}>English</button>
        <button className="nav-button" onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button className="nav-button" onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button className="nav-button" onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      {pokemonDetails.map((pokemon, index) => (
        <div className="card" key={index}>
          <img className="card-image" alt="Pokemon Picture" src={pokemon.image} />
          <h2 className="card-title">{pokemon.id} {pokemon.name[language]}</h2>
          {pokemon.type.length === 1 ? (
            <h2 className="button">{pokemon.type[0]}</h2>
          ) : (
            <>
              <h2 className="button">{pokemon.type[0]}</h2>
              <h2 className="button2"> {pokemon.type[1]}</h2>
            </>
          )}

        <div class="character-stats">
            <div class="stat">HP: {pokemon.base.HP}</div>
            <div class="stat">Speed: {pokemon.base.Speed}</div>
            <div class="stat">Attk: {pokemon.base.Attack}</div>
            <div class="stat">Sp. Attk: {pokemon.base.Sp_Attack}</div>
            <div class="stat">Def: {pokemon.base.Defense}</div>
            <div class="stat">Sp. Def: {pokemon.base.Sp_Defense}</div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
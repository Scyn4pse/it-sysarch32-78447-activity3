// Pokemon.jsx
import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  return (
    <div className='pokemon-container'> 
    <div className="card">
      <img className="card-image" src={pokemon.image} alt={pokemon.name.english} />
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
</div>
  );
};

export default Pokemon;

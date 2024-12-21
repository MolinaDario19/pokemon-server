exports.fetchPokemon = async(pokemon_id,pokemonStatus)=>{
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)  
      let pokemon = await response.json()
      let pokemonTypes= []
        for(let i=0; i<pokemon.types.length; i++){
            //console.log(pokemon.types[i])
            pokemonTypes = pokemonTypes + pokemon.types[i].type.name + " "
        }
        
    //   let pokemonMoves="";
    //   for(let i=0; i<pokemon.moves.length; i++){
    //       pokemonMoves=pokemonMoves + `${[i]}:${pokemon.moves[i].move.name}`
    //   }

    // let pokemonStats="";
    // for(let i=0; i<pokemon.stats.length; i++){
    //     pokemonStats=pokemonStats + `<div>${pokemon.stats[i].stat.name}:${pokemon.stats[i].base_stat} </div>`
    // }
      
      pokemon = {
        pokemon_id: pokemonStatus.pokemon_id,
        view : pokemonStatus.view,
        catch : pokemonStatus.catch,
        in_team : pokemonStatus.in_team,
        name : pokemon.name,
        image : pokemon.sprites.front_default,
        types : pokemon.types.map(p=> p.type.name).join(", "),
        // type: pokemonTypes,
        // moves: pokemonMoves,
        pokemonMoves: pokemon.moves.map(movimiento=> movimiento.move.name).join(", "),
        PokemonStats: pokemon.stats.map(pS=>pS.stat.name).join(", ")

      }
      return pokemon

    } catch (error) {
        console.error(error)
        return error
        
    }
}
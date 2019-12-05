const displayPokemon = pokemon => {
  const pokemonHTMLString = pokemon
    .map(
      poke =>
        `
    <div class="pokemon col-md-4 col-lg-2 bounce">
        <div class="card mx-auto m-3 col-md-auto bg-info ">
        <img class="card-img mt-2 bg-white  border-dark" src="${poke.img}">
        <div class="card-block pt-2 text-white bg-primary my-2 pl-2">
        <h3 class="card-title pokeName">${poke.id} : ${poke.name}</h3>
        <p class="">Type: ${poke.type}</p></div></div></div>`
    )
    .join('');
  pokedex.innerHTML = pokemonHTMLString;
  // console.log(pokemon);
};

getPokemon();

//get pokemon from input text
const element = document.getElementById('searchPokemon');

element.addEventListener('input', pokeFilter);

function pokeFilter(e) {
  // console.log(e)

  const value = e.target.value.toUpperCase();
  // console.log(value)

  pokemon = document.querySelectorAll('.pokemon');
  // console.log(pokemon)

  for (i = 0; i < pokemon.length; i++) {
    // console.log(pokemon[i]);
    pokeName = document.getElementsByClassName('pokeName');
    if (pokeName[i].innerHTML.toUpperCase().indexOf(value) > -1) {
      pokemon[i].style.display = 'grid';
    } else {
      pokemon[i].style.display = 'none';
    }
  }
}

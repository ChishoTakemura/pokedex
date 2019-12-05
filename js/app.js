const pokedex = document.getElementById('pokedex');

const getPokemon = () => {
  const promises = [];
  for (let i = 1; i < 803; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }
  Promise.all(promises).then(results => {
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      img: data.sprites["front_default"],
      type: data.types.map(data => data.type.name).join(`, `)
    }));
    displayPokemon(pokemon)
  });
};

// Creating a [array] of {objects} using 'strings' and floats --> e.g. 0.7
//              complex data               primitive data
let pokemonRepository = (function () {
  // Wrapped pokemonList array in an IIFE
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      weight: 6.9,
      type: ['grass', 'poison'],
    },
    {
      name: 'Charmander',
      height: 0.6,
      weight: 8.5,
      type: ['fire', 'fire'],
    },
    {
      name: 'Squirtle',
      height: 0.5,
      weight: 9.0,
      type: ['water', 'water'],
    },
    {
      name: 'Caterpie',
      height: 0.3,
      weight: 2.9,
      type: ['bug', 'bug'],
    },
    {
      name: 'Pidgey',
      height: 0.3,
      weight: 1.8,
      type: ['flying', 'normal'],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'weight' in pokemon &&
      'type' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log(
        'New Pokemon must be an object with the four keys name, height, weight and type!'
      );
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({
  name: 'Tom',
  height: 1.78,
  weight: 74.2,
  type: ['human', 'student'],
});

// Create a 'forEach' - Loop that iterates over each Item of the array and print the values of their keys

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
  if (pokemon.height > 0.6) {
    document.write(
      '<p>' +
        pokemon.name +
        ' (height: ' +
        pokemon.height +
        ') ' +
        ' Wow, that\'s big!' +
        '</p>'
    );
  } else {
    document.write(
      '<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ' + '</p>'
    );
  }
});

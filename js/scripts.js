// Creating a [array] of {objects} using 'strings' and floats --> e.g. 0.7
//              complex data               primitive data
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

// Create a 'for' - Loop that iterates over each Item of the array and prints its name and height
// Use a conditional/ternary operator (if) within the loop to print a comment for the largest Pokemon

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 0.6) {
//     document.write(
//       '<p>' +
//         pokemonList[i].name +
//         ' (height: ' +
//         pokemonList[i].height +
//         ') ' +
//         ' Wow, that\'s big!' +
//         '</p>'
//     );
//   } else {
//     document.write(
//       '<p>' +
//         pokemonList[i].name +
//         ' (height: ' +
//         pokemonList[i].height +
//         ') ' +
//         '</p>'
//     );
//   }
// }

// Commented out the whole for-Loop (39-60) to recreate it as forEach-loop

// Create a 'forEach' - Loop that iterates over each Item of the array and print the values of their keys


pokemonList.forEach(function(pokemon) {
  document.write(
    '<p>' +
    pokemon.name +
    ' height: ' +
    pokemon.height +
    ' weight: ' +
    pokemon.weight +
    ' type: ' +
    pokemon.type +
    '</p>');

});

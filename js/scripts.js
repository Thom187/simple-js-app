// Creating a [array] of {objects} using 'strings' and floats --> e.g. 0.7
//              complex data               primitive data
let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    type: [ 'grass', 'poison'],
  },
  {
    name: 'Charmander',
    height: 0.6,
    weight: 8.5,
    type: [ 'fire', 'fire'],
  },
  {
    name: 'Squirtle',
    height: 0.5,
    weight: 9.0,
    type: [ 'water', 'water']
  },
  {
    name: 'Caterpie',
    height: 0.3,
    weight: 2.9,
    type: [ 'bug', 'bug']
  },
  {
    name: 'Pidgey',
    height: 0.3,
    weight: 1.8,
    type: [ 'flying', 'normal']
  }
];

// Create a Loop that iterates over each Item of the array and prints its name and height

for (let i = 0; i < pokemonList.length; i++) {
  document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + '</p>')
}

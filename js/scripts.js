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

  // Create a function to add new Pokemon to the pokemonList-Array
  function add(pokemon) {
    //Defined valid input to PUSH to pokemonList and what happens if invalid
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

  function addListItem(pokemon) {
    let fullList = document.querySelector('.pokemon-list');//    Select class from HTML
    let listItem = document.createElement('li');//     Add <li> to <ul>
    let button = document.createElement('button');//   Add <button> to <li>
    button.innerText = pokemon.name;              //   Label the button with the value of the key
    button.classList.add('button-class');         //   Add a class to button to style it via CSS
    listItem.appendChild(button);                 //   This finally displays in HTML
    fullList.appendChild(listItem);
    button.addEventListener('click', function(event) {// Eventlistener waiting for a click
      showDetails(pokemon);//                            to log the details clicked on --- Eventhandler
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
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

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

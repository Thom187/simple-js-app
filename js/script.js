// Let ESLint now that I work with jQuery
/* eslint-env jquery */
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Create a function to add new Pokemon to the pokemonList-Array
  function add(pokemon) {
    //Defines valid input to PUSH to pokemonList and what happens if invalid
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log(
        'New Pokemon must be an object with the two keys name and detailsUrl!'
      );
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let fullList = $('.pokemon-list'); //    Select class from HTML
    let listItem = $('<li class ="list-group-item"></li>'); //    Add <li> to <ul>
    //  Add <button> to <li> and label the button with pokemon.name and add a class
    let button = $(
      `<button type="button" class="btn list-group-item list-group-item-action button-class" data-toggle="modal" data-target="#modalContainer">${pokemon.name}</button>`
    );
    listItem.append(button); //  This finally adds and displays the elements in HTML
    fullList.append(listItem);
    // Eventlistener waiting for a click to log the details clicked on --- Eventhandler
    button.on('click', function () {
      showDetails(pokemon);
    });
  }

  // The LoadList() method will fetch data from the API,
  // then add each Pokémon in the fetched data to pokemonList with the add function implemented above.
  // each item gets a name and a detailsUrl property.
  // detailsUrl property is used to load the detailed data for a given Pokémon.
  // For this, you add a loadDetails() function, which takes a Pokémon item as an argument

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        //  add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  // Add the modal, define elements
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalFooter = $('.modal-footer');

  // Empty existing content
    modalTitle.empty();
    modalFooter.empty();
    modalBody.empty();

  // Add content to the elements
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" />');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>' );
    let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>' );
    let typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>' );

    // Append created elements to parent element
    modalFooter.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(typesElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
  }


  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  // That loads the data!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

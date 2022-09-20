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
    let fullList = document.querySelector('.pokemon-list'); //    Select class from HTML
    let listItem = document.createElement('li'); //    Add <li> to <ul>
    let button = document.createElement('button'); //  Add <button> to <li>
    button.innerText = pokemon.name; //  Label the button with the value of the key
    button.classList.add('button-class'); //  Add a class to button to style it via CSS
    listItem.appendChild(button); //  This finally adds and displays the elements in HTML
    fullList.appendChild(listItem);
    // Eventlistener waiting for a click to log the details clicked on --- Eventhandler
    button.addEventListener('click', function (event) {
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
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //  console.log(pokemon);
      showModal(pokemon);
    });
  }

  // Define a modal container
  let modalContainer = document.querySelector('#modal-container');
  // Clear all existing content from modalContainer
  modalContainer.innerHTML = '';

  // Add the modal
  function showModal(pokemon) {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Create new content to the empty modalContainer
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText =
      'Height: ' +
      pokemon.height +
      ', Weight: ' +
      pokemon.weight +
      ', Types: ' +
      pokemon.types;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;

    // Append created Content to parent element
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    // Add a new class for visible modalContainer
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
    modalContainer.innerText = '';
  }

  // Allow to close modal by pressing esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Allow to close the modal by clicking outside the modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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

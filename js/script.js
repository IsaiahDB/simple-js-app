//Pokemon Deck Build


document.write("<br>")

//IFFE Function Style
let pokemonRepository = (function () {

    let pokemonList = []
    let pokedeckApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

    function getAll(){
        return pokemonList
    }  
    
    function add(newItem) {
        if(typeof(newItem) !== typeof(pokemonList)){
            console.log("Wrong Type")
        }else{
            pokemonList.push(newItem)
        }
    }

    function addListItem(pokemon) {
        let displayBlock = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('box_layout')
        listItem.appendChild(button)
        displayBlock.appendChild(listItem)
        button.addEventListener("click", function(event) {
            event.preventDefault()
            showDetails(pokemon);
        });
    }

    function showLoadingMessage() {
        let displayBlock = document.querySelector('.pokemon-list')
        let messageStart = document.createElement('h2')
        messageStart.innerText = "PokeDeck API Running"
        messageStart.classList.add('under_H1')
        displayBlock.appendChild(messageStart)
    }

    function hideLoadingMessage() {
        let hideMessage = document.querySelector('h2')
        hideMessage.remove('under_h1')
    }
    

    function loadList() {
        showLoadingMessage()
        return fetch(pokedeckApi).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
            hideLoadingMessage()
          console.error(e);
        })
    }

    function loadDetails(item) {
        showLoadingMessage()
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
            hideLoadingMessage()
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
            hideLoadingMessage()
          console.error(e);
        });
    }


    function showDetails(item) {

        pokemonRepository.loadDetails(item).then(function () {
          
          // console.log(item);
          modalContainer.innerHTML = ''
          let modal = document.createElement('div');
          modal.classList.add('modal');
          
          // Add the new modal content
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('click', hideModal);
          
          let titleElement = document.createElement('h1');
          titleElement.innerText = item.name;
          
          let contentElement = document.createElement('p');
          contentElement.innerText = `Height: ${item.height} `;

          let imgElement = document.createElement('img')
          imgElement.src = item.imageUrl
          
          modal.appendChild(closeButtonElement);
          modal.appendChild(titleElement);
          modal.appendChild(contentElement);
          modal.appendChild(imgElement)
          modalContainer.appendChild(modal);
          
          modalContainer.classList.add('is-visible');

        });
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        });
        modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
      // modalContainer.classList.remove('is-visible')

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        hideModal: hideModal
    };
})();

pokemonRepository.add({name: 'pikachu', height: 0.9} );
// console.log(pokemonRepository.getAll());
console.log("Seperated")
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});

  




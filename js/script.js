//Pokemon Deck Build

// let pokemonList = [
//     { name: 'Growlithe', height: 0.7, abilities: ['flash-fire', 'Intimidate', 'Justified'], weight: 19, type: 'Fire'},
//     { name: 'Butterfree', height: 0.5, abilities: [ 'compoundeyes', 'tinted-lens'], weight: 32, type: 'Flight'},
//     { name: 'Blastoise', height: 1.6, abilities: ['rain-dish', 'torrent'], weight: 85.5, type: 'Water'}];

document.write("<br>")

//IFFE Function Style
let pokemonRepository = (function () {

    let pokemonList = []
    let pokedeckApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

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
          console.log(item);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
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
  



// pokemonRepository.getAll();
// pokemonList.forEach((item, i) => {
//     pokemonRepository.addListItem(pokemonList[i].name)
// })





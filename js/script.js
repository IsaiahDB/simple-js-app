//Pokemon Deck Build

let pokemonList = [
    { name: 'Growlithe', height: 0.7, abilities: ['flash-fire', 'Intimidate', 'Justified'], weight: 19, type: 'Fire'},
    { name: 'Butterfree', height: 0.5, abilities: [ 'compoundeyes', 'tinted-lens'], weight: 32, type: 'Flight'},
    { name: 'Blastoise', height: 1.6, abilities: ['rain-dish', 'torrent'], weight: 85.5, type: 'Water'}];

document.write("<br>")

//IFFE Function Style
let pokemonRepository = (function () {

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

    function showDetail(pokemon){
        console.log(pokemon)
    }

    function addListItem(pokemon) {
        let displayBlock = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = `${pokemon}`
        button.addEventListener('click', function(){
            showDetail(pokemon)
        })
        button.classList.add('box_layout')
        listItem.appendChild(button)
        displayBlock.appendChild(listItem)

    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({name: 'Pikachu', height: 0.9} );
console.log(pokemonRepository.getAll());
console.log("Seperated")
pokemonRepository.getAll();
pokemonList.forEach((item, i) => {
    pokemonRepository.addListItem(pokemonList[i].name)
})



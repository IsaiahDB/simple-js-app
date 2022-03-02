//Pokemon Deck Build

let pokemonList = [
    { name: 'Growlithe', height: 0.7, abilities: ['flash-fire', 'Intimidate', 'Justified'], weight: 19, type: 'Fire'},
    { name: 'Butterfree', height: 0.5, abilities: [ 'compoundeyes', 'tinted-lens'], weight: 32, type: 'Flight'},
    { name: 'Blastoise', height: 1.6, abilities: ['rain-dish', 'torrent'], weight: 85.5, type: 'Water'}];

//This is just a simple out of the first pokemonList
// for(let i = 0; i < pokemonList.length; i++){
//     document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`)
// }

document.write("<br>")

//ForEach pokemonList
// function ListPokemonShow(item){
//     document.write(`${item.name} (height: ${item.height}) FOREACH STYLE <br>`)
// }

// pokemonList.forEach(ListPokemonShow)


//IFFE Function Style
let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Growlithe', height: 0.7, abilities: ['flash-fire', 'Intimidate', 'Justified'], weight: 19, type: 'Fire'},
        { name: 'Butterfree', height: 0.5, abilities: [ 'compoundeyes', 'tinted-lens'], weight: 32, type: 'Flight'},
        { name: 'Blastoise', height: 1.6, abilities: ['rain-dish', 'torrent'], weight: 85.5, type: 'Water'}];

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

    function ListPokemonShowIiiffe(item){
        document.write(`${item.name} (height: ${item.height}) FOREACH STYLE iiffee <br>`)
    } 

    function ListAll(){
        document.write("<br>")
        return pokemonList.forEach(ListPokemonShowIiiffe)
    }

    return {
        add: add,
        getAll: getAll,
        ListAll: ListAll
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu'} );
console.log(pokemonRepository.getAll());
console.log("Seperated")
console.log(pokemonRepository.ListAll())


//Line breaks or spaces to break up the output
document.write("<br>")
document.write("<br>")

//This is a for loop to show which pokemon is bigger
for(let i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height > 1.0){
        document.write(`${pokemonList[i].name} height:${pokemonList[i].height} - Wow, that’s big! <br>`)
    }else{
        document.write(`${pokemonList[i].name} height: ${pokemonList[i].height} <br>`)
    }
}
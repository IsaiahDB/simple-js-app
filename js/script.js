//Pokemon Deck Build

let pokemonList = [
    { name: 'Growlithe', height: 0.7, abilities: ['flash-fire', 'Intimidate', 'Justified'], weight: 19, type: 'Fire'},
    { name: 'Butterfree', height: 0.5, abilities: [ 'compoundeyes', 'tinted-lens'], weight: 32, type: 'Flight'},
    { name: 'Blastoise', height: 1.6, abilities: ['rain-dish', 'torrent'], weight: 85.5, type: 'Water'}];

document.write("<br>")

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

    return {
        add: add,
        getAll: getAll,
    };
})();

pokemonRepository.add({name: 'Pikachu', height: 0.9} );
console.log(pokemonRepository.getAll());
console.log("Seperated")
pokemonList = pokemonRepository.getAll();
pokemonList.forEach((item, i) => {
    if(pokemonList[i].height >= 1.5){
        document.write((pokemonList[i].name) + " (height:" + (pokemonList[i].height) +") - Wow, that's big!"+"</br></br>");
    }else{
        document.write((pokemonList[i].name) + " (height:" + (pokemonList[i].height) +")"+"</br></br>")
    }
})


//Line breaks or spaces to break up the output
document.write("<br>")
document.write("<br>")


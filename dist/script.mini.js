let pokemonRepository=function(){let e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(t){if(typeof t!=typeof e){throw new Error("Wrong")}e.push(t)}function o(e){let t=document.querySelector(".new-list"),n=document.createElement("li"),o=document.createElement("button");o.innerText=e.name,n.classList.add("btn"),o.classList.add("w-100"),o.classList.add("bg-info"),o.classList.add("p-2"),o.classList.add("display-4"),o.classList.add("text-capitalize"),n.classList.add("group-list-item"),n.appendChild(o),t.appendChild(n),o.addEventListener("click",function(t){t.preventDefault(),l(e)})}function i(){let e=document.querySelector(".list-group"),t=document.createElement("h1");t.innerText="PokeDeck API Running",t.classList.add("under_H1"),e.appendChild(t)}function a(){document.querySelector("h1").remove("under_h1")}function s(e){i();let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){a(),e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(e){a(),error(e)})}function l(e){s(e).then(function(){c(e)})}function c(e){let t=$(".modal-title"),n=$(".modal-body"),o=$("<h2>"+e.name+"</h2>"),i=$("<p>Height: "+e.height+"</p>"),a=$("<img class='pokemon-modal-image'>");a.attr("src",e.imageUrl),t.empty(),n.empty(),t.append(o),n.append(a),n.append(i)}return{add:n,getAll:function(){return e},addListItem:o,loadList:function(){return i(),fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){let t={name:e.name,detailsUrl:e.url};n(t),console.log(t)})}).catch(function(e){a(),error(e)})},loadDetails:s,showDetails:c,DisplayModal:l,showResults:function(t){$(".new-list").empty(),e.forEach(e=>{e.name.toLowerCase().includes(t.toLowerCase())&&o(e)})}}}();pokemonRepository.add({name:"pikachu",height:.9}),console.log("Seperated"),pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});
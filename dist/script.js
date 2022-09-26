let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("New Pokemon must be an object with the two keys name and detailsUrl!")}function n(){return t}function o(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=[];for(var n=0;n<e.types.length;n++)t.types.push(e.types[n].type.name)}).catch(function(t){console.error(t)})}return{add:e,getAll:n,addListItem:function t(e){let n=$(".pokemon-list"),i=$('<li class ="list-group-item"></li>'),a=$(`<button type="button" class="btn list-group-item list-group-item-action button-class" data-toggle="modal" data-target="#modalContainer">${e.name}</button>`);i.append(a),n.append(i),a.on("click",function(){(function t(e){o(e).then(function(){var t;let n,o,i,a,p,r,l,s;console.log(e),t=e,n=$(".modal-body"),o=$(".modal-title"),i=$(".modal-footer"),o.empty(),i.empty(),n.empty(),a=$("<h1>"+t.name+"</h1>"),(p=$('<img class="modal-img" />')).attr("src",t.imageUrl),r=$("<p>Height: "+t.height+"</p>"),l=$("<p>Weight: "+t.weight+"</p>"),s=$("<p>Types: "+t.types+"</p>"),i.append(a),n.append(p),n.append(s),n.append(r),n.append(l)})})(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});

const poke_container = document.getElementById('poke_container');
let pokemon_number = 700;

const arr = [];


const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    
}

const fetchPokemons = async (pokemon_number) => {
    
    for(let i=1; i<= pokemon_number; i++) {
        await getPokemon(i); 
    }
}


const pokemonSearch = async () => {
    let a = document.getElementById('input_id').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${a}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    
    
    
    document.getElementById('search-pokemon').innerHTML =  `
    <div class='search-card'>
        <img src= ${pokemon.sprites.front_default} alt='pokemon_img' class='search_img' id= '${pokemon.name}'>
        <div class='card_data'>
          <p>ID: ${pokemon.id}</p>
          <p class='poke_name'>NAME: ${pokemon.name.toUpperCase()}</p>
          <p>WEIGHT: ${pokemon.weight}</p>
          <p>HEIGHT: ${pokemon.height}</p>
          <p>HP: ${pokemon.stats[0].base_stat}</p>
          <p>TYPE: ${pokemon.types[0].type.name.toUpperCase()}</p>
        </div>
    </div>`
     
    pokeColors(pokemon);
    
    
    
    
}
fetchPokemons(pokemon_number);



function pokeColors(pokemon) {
    let colores = document.getElementById(`${pokemon.id}`); 
   
     if (pokemon.types[0].type.name ==='electric'){
        colores.style.backgroundColor = 'rgb(247, 236, 174)';
     }
     else if (pokemon.types[0].type.name ==='fire'){
        colores.style.backgroundColor = 'rgb(231, 167, 114)';
     }
     else if (pokemon.types[0].type.name ==='water'){
        colores.style.backgroundColor = 'rgb(166, 224, 235)';
     }
     else if (pokemon.types[0].type.name ==='grass'){
        colores.style.backgroundColor = 'rgb(122, 206, 150)';
     }
     else if (pokemon.types[0].type.name ==='bug'){
        colores.style.backgroundColor = 'rgb(122, 83, 83)';
     }
     else if (pokemon.types[0].type.name ==='poison'){
        colores.style.backgroundColor = 'rgb(192, 109, 167)';
     }
     else if (pokemon.types[0].type.name ==='ground'){
        colores.style.backgroundColor = 'rgba(161, 120, 120, 0.904)';
     }
     else if (pokemon.types[0].type.name ==='fairy'){
        colores.style.backgroundColor = 'pink';
     }
     else if (pokemon.types[0].type.name ==='fighting'){
        colores.style.backgroundColor = 'rgb(195,211, 236)';
     }
     else if (pokemon.types[0].type.name ==='psychic'){
        colores.style.backgroundColor = 'rgb(236, 238, 148)';
     }
     else if (pokemon.types[0].type.name ==='rock'){
        colores.style.backgroundColor = 'rgba(206, 203, 194, 0.973)';
     }
     else if (pokemon.types[0].type.name ==='ghost'){
        colores.style.backgroundColor = 'rgb(167, 130, 150)';
     }
     else if (pokemon.types[0].type.name ==='ice'){
        colores.style.backgroundColor = 'rgb(22, 162, 228)';
     }
     else if (pokemon.types[0].type.name ==='dragon'){
        colores.style.backgroundColor = 'lightskyblue';
     }

}



const  createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');

    pokemonEl.classList.add('add');
    
    const pokeInnerHTML =`
    <div class='card' id='${pokemon.name}'>
        <img src= ${pokemon.sprites.front_default} alt='pokemon_img' class='search_img' id='${pokemon.id}'>
        <div class='card_text'>
        <h6 class='text'>ID: ${pokemon.id}</h6>
        <h6 class='text'>Name: ${pokemon.name}</h6>
        <h6 class='text'>Type: ${pokemon.types[0].type.name}</h6>
        </div>
    </div>`;
    
    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
   
    
    pokeCard = document.getElementById(`${pokemon.name}`);
    
    
    
      
      
      
      
      

      
      let pokemonFilter = ()=>{
         let pokeType = pokemon.types[0].type.name;
         let pokemons = document.getElementById(`${pokemon.name}`)
         let selection = document.getElementById('types');
         if (pokeType != selection.value ) {
            pokemons.parentElement.className = 'poke-hidden';
              
            ;} else {
               pokemons.parentElement.className = 'add';
            }
         
      }
    
    pokeColors(pokemon);
    document.getElementById('btn-filter').addEventListener('click', pokemonFilter);  
      }

      
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
      
      


    
     


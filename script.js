    document.getElementById('year').textContent = new Date().getFullYear();

    async function pokemonDetailsClick(button) {
        var card = button.closest('.card');
        var pokemonName = card.querySelector('.card-title').textContent;
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        var pokemon = await response.json();

        Swal.fire({
            title: `${pokemon.id} - ${pokemon.name}`,
            html: `
            <div class="pokemon-picture">
                <img src="${pokemon.sprites.front_default}"  />
                <div class="pokemon-info">
                    <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</p>
                    <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</p>
                    <h3 class="height">Height: ${pokemon.height  / 10}m</p>
                </div>        
            </div>`
          });
    }
function getPokemonDetails() {

    (async function () {
        let name = sessionStorage.getItem('pokemon');
        const pokemon = await $.get('https://pokeapi.co/api/v2/pokemon/' + name + '/');

        let html = '';
        html += `<b> name: </b> ${pokemon.name}<br>`;
        html += `<img src='${pokemon.sprites.front_default}' class='rounded-circle' ></img> <br>`;
        html += `<b> weight: </b> ${pokemon.weight} <br>`;
        html += ` <b> abilities: </b>    <ul style='list-style-type:square'> `;

        for (const ability of pokemon.abilities) {
            html += `<li>  ${ability.ability.name}</li>`
        }

        html += `</ul>`;

        html += `<input type='button' onclick="window.open('pokemon_list.html')" value='Back' class='btn btn-dark'> `

        $('#details')[0].innerHTML = html;

    })();
}

getPokemonDetails();

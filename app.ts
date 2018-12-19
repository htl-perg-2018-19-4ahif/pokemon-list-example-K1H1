
function buildPokemonList() {

    (async function () {
        const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

        let html = '';

        html += `<table class='table table-striped' > <tr>  <th>name</th>  <th>details</th>  </tr> `;

        for (const pokemon of pokelist.results) {
            html += `<tr>`;
            html += `<td> ${pokemon.name} </td>`;
            html += `<td> <input type='button' onclick="getPokemonDetails('${pokemon.name}');window.open('pokemon_details.html')" value='details' class='btn btn-dark'>   </td>`;
            html += `</tr>`;

        }
        html += `</table>`;
        $('#pokemon')[0].innerHTML = html;
    })();

}

//Open the details page and show the pokemon- details
function getPokemonDetails(name: string) {

    let htmlD = ' ';

    (async function () {
        const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/' + name + '/' );
       
        for (const pokemon of pokelist.results) {
    

            htmlD += `<b> name: </b> ${pokemon.name}`;
            htmlD += `<img src='${pokemon.sprites.front_default}' class='rounded-circle' ></img>`;
            htmlD += `<b> weight: </b> ${pokemon.weight} `;
            htmlD += ` <b> abilities: </b>: <ul style='list-style-type:square'> ` ;

            for (const abilitie of pokemon.abilities) {

                htmlD += `${abilitie}`;
            }
            htmlD += `</ul>`;

        }
        htmlD += `<input type='button' onclick="window.open('pokemon_list.html')" value='Back to the list' class='btn btn-dark'>`
        $('#pokemonDetails')[0].innerHTML = htmlD;
        
    })();

}

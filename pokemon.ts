function buildPokemonList() {
    (async function () {
        const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

        let html = '';

        html += `<table class='table table-striped' > <tr>  <th>name</th>  <th>details</th>  </tr> `;

        for (const pokemon of pokelist.results) {
            html += `<tr>`;
            html += `<td> ${pokemon.name} </td>`;
            html += `<td> <input type='button' onclick="location.href='pokemon_details.html?id=${pokemon.name}'" value='details' class='btn btn-dark'>   </td>`;
            html += `</tr>`;
        }

        html += `</table>`;
        $('#pokemon')[0].innerHTML = html;
    })();

}

buildPokemonList();
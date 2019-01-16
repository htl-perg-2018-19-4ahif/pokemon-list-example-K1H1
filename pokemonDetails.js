"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
$(document).ready(function () {
    getPokemonDetails();
});
function getPokemonDetails() {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            let name = sessionStorage.getItem('pokemon');
            const pokemon = yield $.get('https://pokeapi.co/api/v2/pokemon/' + name + '/');
            let html = '';
            html += `<b> name: </b> ${pokemon.name}<br>`;
            html += `<img src='${pokemon.sprites.front_default}' class='rounded-circle' ></img> <br>`;
            html += `<b> weight: </b> ${pokemon.weight} <br>`;
            html += ` <b> abilities: </b>    <ul style='list-style-type:square'> `;
            for (const ability of pokemon.abilities) {
                html += `<li>  ${ability.ability.name}</li>`;
            }
            html += `</ul>`;
            html += `<input type='button' onclick="window.open('pokemon_list.html')" value='Back' class='btn btn-dark'> `;
            $('#details')[0].innerHTML = html;
        });
    })();
}

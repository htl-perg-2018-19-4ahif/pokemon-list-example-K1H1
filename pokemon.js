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
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const pokelist = yield $.get('https://pokeapi.co/api/v2/pokemon/');
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
        });
    })();
});

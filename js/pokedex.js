/* ------------------------ */
/* API CALL                 */
/* ------------------------ */
let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
$.get(url, function (data, status) {
    console.log(data);

    $.each(data.results, function (i, result) {
        $('#data').append(
            $('<div class="card" style="width: 18rem;">\n' +
                '  <div class="card-header">\n' +
                data.results[i].name +
                '  </div>\n' +
                '  <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ i +'.png">\n' +
                '  <div class="card-body">\n' +
                '    <p class="card-text"></p>\n' +
                '  </div>\n' +
                '</div>')
        );
    });
});

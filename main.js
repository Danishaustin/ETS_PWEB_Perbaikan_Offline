$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'GET',
        success: function (data) {
            console.log("Data received from API:", data);
            displayPokemon(data);
        },
        error: function (error) {
            console.error("Error fetching data: ", error);
        }
    });

    function displayPokemon(data) {
        if (data && data.results) {
            let output = '';
    
            $.each(data.results, function (index, item) {
                output += `
                <div class="col-sm-6 col-lg-3 d-flex">
                    <div class="card text-center shadow bg-white border border-primary rounded mb-3" style="width: 30rem;">
                        <div class="card-body">
                            <p class="card-text">${item.name}</p>
                            <a href="${item.url}" class="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                `;
            });
    
            $('#pokemonList').html(output);
        } else {
            console.error("Invalid data format: ", data);
        }
    }
});

function initializeTable() {
    $('#createLink').on('click', createCountry);
    addCountryToTable("Bulgaria" ,"Sofia")
    addCountryToTable("Germaby" ,"Berlin")
    addCountryToTable("Russia" ,"Moscow")


    function addCountryToTable(country, town) {
        let tableRow = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${town}</td>`)
            .append($(`<td></td>`)
                .append($(`<a href="#">[Up]</a>`)
                    .on('click', moveUp))
                .append($(`<a href="#">[Down]</a>`)
                    .on('click', moveDown))
                .append($(`<a href="#">[Delete]</a>`)
                .on('click', deleteRow)));

        $('#countriesTable').append(tableRow)
    }

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital);
        country.val("");
        capital.val("");
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
    }

    function deleteRow() {
        $(this).parent().parent().remove();
    }
}
function initializeTable() {
    $('#createLink').on('click', createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germaby", "Berlin");
    addCountryToTable("Russia", "Moscow");
    hideButtons();

    function addCountryToTable(country, town) {
        let tableRow = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${town}</td>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>')
                    .on("click", moveUp))
                .append($('<a href="#">[Down]</a>')
                    .on("click", moveDown))
                .append($('<a href="#">[Delete]</a>')
                    .on("click", deleteCountry)));

        $('#countriesTable').append(tableRow);
    }

    function createCountry() {
        let country = $('#newCountryText');
        let town = $('#newCapitalText');
        addCountryToTable(country.val(), town.val());
        country.val('');
        town.val('');
        hideButtons();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        hideButtons();
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        hideButtons();
    }

    function deleteCountry() {
        $(this).parent().parent().fadeOut();
        hideButtons();
    }

    function hideButtons() {
        $('#countriesTable tr a').css("display", "");
        $('#countriesTable tr:eq(2) a:contains("Up")').css("display", "none");
        $('#countriesTable tr:last a:contains("Down")').css("display", "none");
    }
}
function attachEvents() {
    $("#items > li").on('click', function () {
        if ($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background-color', "white");
        }
        else {
            $(this).attr('data-selected', true);
            $(this).css('background-color', "#DDD");
        }
    });

    $('#showTownsButton').onclick("click", function () {
        let towns = $('#items > li[data-selected=true]')
            .toArray()
            .map(x => $(x).text())
            .join(", ");
        $('#selectedTowns').text("Selected towns: " + towns);
    })
}
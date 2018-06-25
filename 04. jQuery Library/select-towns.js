function attachEvents() {
    $('#items > li').on("click", function () {
        if ($(this).attr("data-selected")) {
            $(this).removeAttr("data-selected");
            $(this).css("background", "");
        }
        else {
            $(this).attr("data-selected", true);
            $(this).css("background", "#DDD");
        }
    });
    $("#showTownsButton").on("click", function () {
        let selectedTowns = $('#items > li[data-selected=true]')
            .toArray()
            .map(x => x.textContent)
            .join(", ");
        $("#selectedTowns").text(`Selected towns: ${selectedTowns}`);
    })
}
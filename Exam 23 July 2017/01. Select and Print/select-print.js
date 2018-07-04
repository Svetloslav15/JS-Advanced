function move(parameter) {
    if (parameter === "right"){
        let selectedTown = $("#available-towns option:selected")[0];
        $(selectedTown).appendTo("#selected-towns");
    }
    else if (parameter === "left"){
        let selectedTown = $("#selected-towns option:selected")[0];
        $(selectedTown).appendTo("#available-towns");
    }
    else{
        let items = [];
        let selectedTowns = $('#selected-towns option');
        for (let item of selectedTowns) {
            items.push($(item).text())
        }
        $("#output").text(items.join("; "));
    }
}
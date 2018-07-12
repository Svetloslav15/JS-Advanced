class PublicTransportTable {
    constructor(town){
        this.createTable(town);
        this.addEventListeners();
    }

    createTable(town){
        $('caption').text(`${town}'s Public Transport`);
    }

    addVehicle(object){
        let tbody = $('tbody');
        let currentRow = $('<tr>');
        currentRow.append(`<td>${object.type}</td>`);
        currentRow.append(`<td>${object.name}</td>`);
        let tdBtn = $('<td>');
        let extraRow = $(`<tr class="more-info">
                            <td colspan="3">
                                <table>
                                    <tr><td>Route: ${object.route}</td></tr>
                                    <tr><td>Price: ${object.price}</td></tr>
                                    <tr><td>Driver: ${object.driver}</td></tr>
                                </table>
                            </td>
                          </tr>`);
        let button = $('<button>More Info</button>');
        button.on("click", function () {
            if ($(button).text() === "More Info"){
                $(button).text("Less Info");
                extraRow.insertAfter(currentRow);
            }
            else{
                $(button).text("More Info");
                extraRow.remove();
            }
        });
        tdBtn.append(button);
        currentRow.append(tdBtn);
        $('.vehicles-info').append(currentRow);
    }

    addEventListeners(){
        $('.search-btn').on("click", function () {
            let type = $('input[name="type"]').val();
            let name = $('input[name="name"]').val();
            if (type || name) {
                let rows = $('.vehicles-info > tr').not('.more-info');
                for (let row of rows) {
                    let typeBox = $(row).children()[0];
                    let nameBox = $(row).children()[1];
                    if (!$(typeBox).text().includes(type) || !$(nameBox).text().includes(name)) {
                        $(row).css("display", "none");
                        let btn = $(row).children()[2].firstChild;
                        if (btn.textContent === "Less Info") {
                            $(btn).click();
                        }
                    }
                    else {
                        $(row).css("display", "");
                    }
                }
            }
        });
        $('.clear-btn').on("click", function () {
            let rows = $('.vehicles-info > tr').not('.more-info');
            $('input[name="type"]').val("");
            $('input[name="name"]').val("");
            for (let row of rows) {
                $(row).css("display", "");
            }
        });
    }
}

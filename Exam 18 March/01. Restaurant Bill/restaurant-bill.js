function addProduct() {
    let inputs = $('input');
    let product = $(inputs[0]).val();
    let price = Number($(inputs[1]).val());
    if (product === "" || price == ""){
        return;
    }
    let row = $(`<tr><td>${product}</td><td>${price}</td></tr>`);
    $('#product-list').append(row);
    let tds = $('td');
    let sumEl = $("tfoot > tr > td:nth-child(2)");

    let currSum = Number(sumEl.text());
    let newSum = price + currSum;
    sumEl.text(newSum);

    $(inputs[0]).val("");
    $(inputs[1]).val("");
}
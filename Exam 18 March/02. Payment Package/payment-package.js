function addProduct() {
    let inputs = $('input');
    let product = $(inputs[0]).val();
    let price = $(inputs[1]).val();
    let row = $(`<tr><td>${product}</td><td>${Number(price).toFixed(2)}</td></tr>`);
    let body = $('#product-list');
    body.append(row);
    let sum = $("#sum");
    sum.text((Number(sum.text()) + Number(price)).toFixed(2));
}
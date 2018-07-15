function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let productName = $('input')[0];
    $(productName).on("input", function() {
        if ($(productName).val() !== "") {
            $('#submit').prop("disabled", false);
        }
        else{
            $('#submit').prop("disabled", true);
        }
    });

    let submitBtn = $('#submit');
    $(submitBtn).on("click", function() {
        let price = $('#price');
        let quantity = $('#quantity');
        let sum = $('#sum');
        let oldSum = +($(sum).val());
        console.log(typeof oldSum)
        let newSum = oldSum + +($(price).val());

        let capacity = $('#capacity');
        let oldCapacity = Number($(capacity).val());
        let newCapacity = oldCapacity + Number($(quantity).val());
        if (newCapacity >= 150){
            $('#submit').prop("disabled", true);
            $('#price').prop("disabled", true);
            $('#quantity').prop("disabled", true);
            $(productName).prop("disabled", true);
            $('#capacity').addClass("fullCapacity");
            $(capacity).val("full");
        }
        else{
            let outputToAppend = `Product: ${$(productName).val()} Price: ${price.val()} Quantity: ${$(quantity).val()}`;
            let li = $('<li>');
            $(li).text(outputToAppend);
            $('.display').append(li);
            $(capacity).val(newCapacity);
            $(sum).val(newSum);
        }

        $(productName).val("");
        $(price).val(1);
        $(quantity).val(1);
        $('#submit').prop("disabled", true);
    });
}

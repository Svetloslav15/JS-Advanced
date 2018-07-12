class PaymentManager {
    constructor(title) {
        this.element = this.createElement(title);
    }

    createElement(title) {
        let table = $('<table>');
        let caption = $(`<caption>${title} Payment Manager</caption>`);
        let thead = $(`<thead>
                            <tr>
                                <th class="name">Name</th>
                                <th class="category">Category</th>
                                <th class="price">Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>`);
        let tbody = $('<tbody class="payments">');

        let tfoot = $('<tfoot class="input-data">');
        let footTr = $('<tr>');
        let nameTd = $(`<td><input name="name" type="text"></td>`);
        let catTd = $(`<td><input name="category" type="text"></td>`);
        let prTd = $(`<td><input name="price" type="number"></td>`);
        footTr.append(nameTd);
        footTr.append(catTd);
        footTr.append(prTd);
        let addButton = $('<button>Add</button>');
        addButton.on("click", function () {
            let currentRow = $('<tr>');
            let name = $(nameTd.children()[0]);
            let category = $(catTd.children()[0]);
            let price = $(prTd.children()[0]);
            if (name.val().length > 0 && category.val().length > 0 && price.val().length > 0) {
                currentRow.append(`<td>${name.val()}</td>`);
                currentRow.append(`<td>${category.val()}</td>`);
                currentRow.append(`<td>${Math.round(Number(price.val()) * 100000) / 100000}</td>`);
                let deleteBtn = $('<button>Delete</button>');
                deleteBtn.on("click", function () {
                    currentRow.remove();
                });
                let delTd = $('<td>').append(deleteBtn);
                currentRow.append(delTd);
                $(tbody).append(currentRow);
                name.val("");
                category.val("");
                price.val("");
            }
        });
        let btd = $('<td>').append(addButton);
        footTr.append(btd);
        tfoot.append(footTr);
        table.append(caption);
        table.append(thead);
        table.append(tbody);
        table.append(tfoot);
        return table;
    }

    render(id) {
        $(`#${id}`).append(this.element);
    }
}
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
        let tfootRow = $('<tr>');
        let nameTd = $('<td><input name="name" type="text"></td>');
        let categoryTd = $('<td><input name="category" type="text"></td>');
        let priceTd = $('<td><input name="price" type="number"></td>`');
        let addBtn = $('<button>Add</button>').on("click", function () {
            let name = $(nameTd.children()[0]);
            let category = $(categoryTd.children()[0]);
            let price = $(priceTd.children()[0]);
            if (name.val().length > 0 && category.val().length > 0 && price.val().length > 0) {
                let rowToAppend = $('<tr>');
                rowToAppend.append($(`<td>${name.val()}</td>`));
                rowToAppend.append($(`<td>${category.val()}</td>`));
                rowToAppend.append($(`<td>${Math.round(Number(price.val()) * 100000) / 100000}</td>`));
                let deleteBtn = $('<button>Delete</button>').on("click", function () {
                    rowToAppend.remove();
                });
                rowToAppend.append(deleteBtn);
                tbody.append(rowToAppend);
                $(name).val("");
                $(category).val("");
                $(price).val("");
            }
        });
        let btnTd = $(`<td>`).append(addBtn);
        console.log(btnTd);
        tfootRow.append(nameTd);
        tfootRow.append(categoryTd);
        tfootRow.append(priceTd);
        tfootRow.append(btnTd);
        tfoot.append(tfootRow);
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
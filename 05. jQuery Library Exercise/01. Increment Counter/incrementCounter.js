function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textarea = $('<textarea>');
    let firstButton = $('<button>Increment</button>');
    let secondButton = $('<button>Add</button>');
    let list = $('<ul>');

    textarea.addClass("counter");
    textarea.val("0");
    textarea.attr("disabled", "true");
    firstButton.addClass("btn");
    firstButton.attr("id", 'incrementBtn');
    secondButton.addClass("btn");
    secondButton.attr("id", 'addBtn');
    list.addClass("results");

    $(firstButton).on("click", function () {
        let previousValue = Number(textarea.val());
        textarea.val(previousValue + 1);
    });

    $(secondButton).on("click", function () {
        let value = $(textarea).val();
        $(list).append(`<li>${value}</li>`);
    });
    console.log(list);

    textarea.appendTo(fragment);
    firstButton.appendTo(fragment);
    secondButton.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}
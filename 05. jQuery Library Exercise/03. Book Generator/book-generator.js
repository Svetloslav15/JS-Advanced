function createBook(sectionN, titleN, authorN, isbnN) {
    let section = $(sectionN);
    let innerSection = $('<div>');
    let title = $(`<p>${titleN}</p>`);
    let author = $(`<p>${authorN}</p>`);
    let isbn = $(`<p>${isbnN}</p>`);
    let selectButton = $(`<button>Select</button>`);
    let deselectButton = $(`<button>Deselect</button>`);

    innerSection.attr("id", "book1");
    title.attr("class", "title");
    author.attr("class", "author");
    isbn.attr("class", "isbn");
    selectButton.on("click", function () {
        innerSection.css("border", "2px solid blue");
    });

    deselectButton.on("click", function () {
        innerSection.css("border", "none");
    });

    title.appendTo(innerSection);
    author.appendTo(innerSection);
    isbn.appendTo(innerSection);
    selectButton.appendTo(innerSection);
    deselectButton.appendTo(innerSection);
    innerSection.appendTo(section);
}
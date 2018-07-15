function addSticker() {
    let title = $('.title-input input');
    let content = $('.text-input input');
    if (title.val() !== "" && content.val() !== ""){
        let li = $('<li class="note-content">');
        let button = $('<a class="button">x</a>');
        button.on("click", function () {
            $(li).remove();
        });
        let h2 = $(`<h2>${title.val()}</h2>`);
        let hr = $('<hr>');
        let p = $(`<p>${content.val()}</p>`);
        li.append(button);
        li.append(h2);
        li.append(hr);
        li.append(p);
        $('#sticker-list').append(li);
        $(title).val("");
        $(content).val("");
    }
}
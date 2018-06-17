function addItem() {
    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");
    let list = document.getElementById("menu");
    let option = document.createElement("option");
    option.value = value.value;
    option.textContent = text.value;
    list.appendChild(option);
    text.value = '';
    value.value = '';
}
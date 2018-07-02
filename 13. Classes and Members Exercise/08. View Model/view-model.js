class Textbox{
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);
        $(this.selector).on("input", function () {
            $('*[type=text]').val(this.value);
        });
    }
    set value(input){
        this._elements.val(input);
    }
    get value(){
        return this._elements.val();
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        if(!this._invalidSymbols.test(this.value)){
            return true;
        }
        return false;
    }
}
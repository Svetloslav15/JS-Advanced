class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }
    toString(){
        if (this.innerLength === 0){
            return '...';
        }
        else if (this.innerString.innerLength !== this.innerLength){
            return this.innerString.substring(0, this.innerLength) + "...";
        }
        return this.innerString;
    }
}

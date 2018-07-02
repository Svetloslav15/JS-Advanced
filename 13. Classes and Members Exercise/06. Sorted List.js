class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    add(el){
        this.arr.push(el);
        this.size++;
        this.arr.sort((a, b) => a - b);
        return this.arr;
    }
    remove(index){
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }
    get(index){
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}
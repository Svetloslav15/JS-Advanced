class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    unite(rat){
        if (rat instanceof Rat) {
            this.unitedRats.push(rat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result = `${this.name}\n`;
        for (let unitedRat of this.unitedRats) {
            result += `##${unitedRat.name}\n`;
        }
        return result;
    }
}

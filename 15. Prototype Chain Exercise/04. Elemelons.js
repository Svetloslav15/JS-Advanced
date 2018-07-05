function solve() {
    class Melon{
        constructor(weight, melonSort){
            if (new.target === Melon){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Water"
        }

        toString(){
            let parentToString = super.toString();
            return `Element: ${this.element}\n` + parentToString;
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Fire";
        }

        toString(){
            let parentToString = super.toString();
            return `Element: ${this.element}\n` + parentToString;
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Earth";
        }

        toString(){
            let parentToString = super.toString();
            return `Element: ${this.element}\n` + parentToString;
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Air";
        }

        toString(){
            let parentToString = super.toString();
            return `Element: ${this.element}\n` + parentToString;
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        morph(){
            if (this.element === "Fire"){
                this.element = "Earth";
            }
            else if (this.element === "Earth"){
                this.element = "Air";
            }
            else if (this.element === "Air"){
                this.element = "Water";
            }
            else if (this.element === "Water"){
                this.element = "Fire";
            }
        }
    }

    return{Melon, Airmelon, Earthmelon, Firemelon, Watermelon, Melolemonmelon}
}
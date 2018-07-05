function solve() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target == Computer){
                throw new Error("Cannot make an instance of abstract class Computer");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpac, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpac);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(b){
            if(! (b instanceof Battery)){
                throw new TypeError("not a valid battery");
            }
            this._battery = b;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpac, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpac);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(k){
            if(!(k instanceof Keyboard)){
                throw new TypeError("Incorrect Input");
            }
            this._keyboard = k;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(m){
            if(!(m instanceof Monitor)){
                throw new TypeError("Incorrect Input");
            }
            this._monitor = m;
        }
    }
    return {Desktop, Laptop, Computer, Battery, Monitor, Keyboard}
}
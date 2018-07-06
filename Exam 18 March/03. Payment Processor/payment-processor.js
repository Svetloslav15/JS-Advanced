class PaymentProcessor {
    constructor(...args) {
        this.options = args.length > 0 ? args[0] : {};
        this.payments = [];
    }

    get options() {
        return this._options;
    }

    set options(op) {
        if (this._options === undefined) {
            this._options = {};
        }
        if (this._options.types === undefined) {
            this._options.types = ["service", "product", "other"];
        }
        if (this._options.precision === undefined) {
            this._options.precision = 2;
        }
        if (op.hasOwnProperty("precision")) {
            if (op.precision !== undefined) {
                this._options.precision = op.precision;
            }
        }
        if (op.hasOwnProperty("types")) {
            if (op.types !== undefined) {
                this._options.types = op.types;
            }
        }
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== "string" || id.length === 0 || typeof name !== "string" || name.length === 0 || typeof value !== 'number' || !this.options.types.includes(type)) {
            throw new Error("Invalid data");
        } else {
            if (this.payments.length > 1 && this.payments.filter(i => i.id === id).length > 0) {
                throw new Error("Id is taken");
            } else {
                this.payments.push({
                    id: id,
                    name: name,
                    type: type,
                    value: value.toFixed(this.options.precision)
                });
            }
        }
    }

    deletePayment(id){
        if (this.payments.filter(x => x.id === id).length > 0){
            this.payments = this.payments.filter(x => x.id !== id);
        }
        else{
            throw new Error("Payment not found!");
        }
    }

    get(id){
        if (this.payments.filter(x => x.id === id).length > 0){
            let payment = this.payments.filter(x => x.id === id)[0];
            let result = `Details about payment ID: ${payment.id}\n` +
                        `- Name: ${payment.name}\n` +
                        `- Type: ${payment.type}\n` +
                        `- Value: ${payment.value}`;
            return result;
        }
        else{
            throw new Error("Payment not found!");
        }
    }

    setOptions(op) {
        this.options = op;
    }

    toString(){
        let sum = 0;
        this.payments.forEach(x => sum += x.value);
        let result = `Summary:\n` +
                    `- Payments: ${this.payments.length}\n` +
                    `- Balance: ${sum.toFixed(this._options.precision)}`;

        return result;
    }
}
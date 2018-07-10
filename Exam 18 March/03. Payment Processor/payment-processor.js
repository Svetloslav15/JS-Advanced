class PaymentProcessor {
    constructor(arguments) {
        if (arguments.hasOwnProperty("types" || "precision")){
            this.options = arguments;
        }
        else{
            this.options = {};
        }
        this.payments = [];
    }

    get(id) {
        if (this.payments.filter(x => x.id === id).length === 0) {
            throw new Error("Invalid Data!");
        }
        let payment = this.payments.filter(x => x.id === id)[0];
        let result = [
            `Details about payment ID: ${payment.id}`,
            `- Name: ${payment.name}`,
            `- Type: ${payment.type}`,
            `- Value: ${payment.value.toFixed(this.options.precision)}`
        ].join("\n");

        return result;
    }

    registerPayment(id, name, type, value) {
        if (id === "" || name === "" || typeof value !== "number" || !this.options.types.includes(type)) {
            throw new Error("Invalid Data!" || this.options.filter(x => x.id === id).length > 0);
        }
        this.payments.push({
            id: id,
            name: name,
            type: type,
            value: value
        });
    }

    deletePayment(payment) {
        if (this.payments.filter(x => x.id === payment.id).length !== 0) {
            throw new Error("Payment not found!");
        }
        this.payments = this.payments.filter(x => x === payment);
    }

    setOptions(options) {
        if (!options.hasOwnProperty("types")) {
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
        }
        else {
            this.options.types = options;
        }
    }

    toString() {
        let balance = 0;
        for (let item of this.payments) {
            balance += item.value;
        }
        let result = "Summary\n" +
            `- Payments: ${this.payments.length}\n` +
            `- Balance: ${balance.toFixed(this.options.precision)}`;
        return result;
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

class PaymentProcessor{
    constructor(...args){
        this.options = args.length > 0 ? args[0] : {};
        this.payments = [];
    }
}
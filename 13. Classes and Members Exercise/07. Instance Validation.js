class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    set clientId(input){
        let regex = /^[0-9]{6}$/;
        if (!regex.test(input)){
            throw new TypeError("Client ID must be a 6-digit number")
        }
        this._clientId = input;
    }
    set email(input){
        let regex = /^\w+@[\w.]+$/
        if (!regex.test(input)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = input;
    }
    set firstName(input){
        let regex = /^[a-zA-Z]{3,20}$/;
        if (input.length < 3 || input.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        if (!regex.test(input)){
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = input;
    }
    set lastName(input){
        let regex = /^[a-zA-Z]{3,20}$/;
        if (input.length < 3 || input.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        if (!regex.test(input)){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = input;
    }
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
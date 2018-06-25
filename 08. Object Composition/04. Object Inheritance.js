function objectInheritance(arr) {
    let processor = (function () {
        let garage = {};

        function create(tokens) {
            tokens = tokens.split(' ');
            if (tokens.length <= 2){
                garage[tokens[0]] = {};
            }
            else {
                garage[tokens[0]] = Object.create(garage[tokens[2]]);
            }
        }

        function set(tokens) {
            let [car, property, value] = tokens.split(' ');
            garage[car][property] = value;
        }

        function print(car) {
            garage[car].toString = function () {
                let result = [];
                for (let key in garage[car]) {
                    if (key !== 'toString') {
                        result.push(`${key}:${garage[car][key]}`);
                    }
                }
                return result.join(', ');
            };
            console.log(garage[car].toString());
        }

        return {create, set, print};
    }());

    for (let tokens of arr) {
        tokens = tokens.split(' ');
        let command = tokens.shift();
        tokens = tokens.join(' ');
        processor[command](tokens);
    }
}
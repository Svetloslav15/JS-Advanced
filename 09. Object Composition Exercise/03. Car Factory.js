function solution(obj){
    let result = {
        model: obj.model,
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: []
    };
    let wheelsize = obj.wheelsize;
    if (wheelsize % 2 === 0){
        wheelsize--;
    }
    for (let i = 1; i <= 4; i++) {
        result.wheels.push(wheelsize);
    }
    let power = obj.power;
    if (power <= 90){
        result.engine.power = 90;
        result.engine.volume = 1800;
    }
    else if (power <= 120){
        result.engine.power = 120;
        result.engine.volume = 2400;
    }
    else if (power <= 200){
        result.engine.power = 200;
        result.engine.volume = 3500;
    }
    return result;
}
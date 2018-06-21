function attachEventsListeners() {
    let rates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    let button = document.getElementById("convert");
    button.addEventListener("click", function () {
        let number = Number(document.getElementById("inputDistance").value);
        let option = document.getElementById("inputUnits").value;
        let output = document.getElementById("outputUnits").value;
        let result = number * rates[option] / rates[output];
        console.log(result);
        document.getElementById("outputDistance").value = result;
    })
}
function validate() {
    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let confirmPass = $("#confirm-password");
    let submitBtn = $("#submit");
    let company = $("#company");
    let companyInfo = $("#companyInfo");

    company.on("change", showInfo);
    submitBtn.on("click", validateData(event));

    function showInfo() {
        if (company.is(":checked")) {
            companyInfo.css("display", "block");
        }
        else {
            companyInfo.css("display", "none");
        }
    }

    function validateData(event) {
        event.preventDefault();
        isValid(username, /^[0-9A-Za-z]{3,20}$/);
        isValid(email, /^.*@.*?[\.]+.*$/);
        validatePassword(password, confirmPass);
    }

    function isValid(element, regex) {
        if (!regex.test(username.val())) {
            element.css("border-color", "red");
        }
        else {
            element.css("border-color", "none");
        }
    }

    function validatePassword(password, confirmPass) {
        let valid = false;
        if (password.val() === confirmPass.val()){
            let regex = /^[0-9a-zA-Z_]{5,15}$/;
            if (regex.test(password)){
                valid = true;
            }
        }
        if (!valid){
            password.css("border-color", "red");
            confirmPass.css("border-color", "red");
        }
        else {
            password.css("border-color", "none");
            confirmPass.css("border-color", "none");
        }
    }
}
let errorCounter = 0;
const submitForm = function () {
    let userName = document.getElementById('uname').value;
    let password = document.getElementById("pword").value;
    let passwordRepeat = document.getElementById("pword-repeat").value;
    let telephone = document.getElementById("tel").value;
    let country = document.getElementById("country").value.toLowerCase();

    let errorCount = document.getElementsByClassName("error")

    for (let i = 0; i < errorCount.length; i++) {
        errorCount[i].parentNode.removeChild(errorCount[i]);
    }

    if (userName.length < 5) {
        let message = "The supplied username is too short, try again using 5 or more characters";
        let element = "uname-input";
        createMsg(element, message);
    }
    if (password.length < 6) {
        let message = "Your Password is too short it must be at least six characters";
        let element = "pword-input";
        createMsg(element, message);
    }
    if (passwordRepeat !== password) {
        let message = "Your Passwords do not match.";
        let element = "pword-repeat";
        createMsg(element, message);
    }
    if (telephone.length > 15) {
        let message = "Your Phone number cannot be more then 15 characters";
        let element = "tel";
        createMsg(element, message);
    }
    if (country !== "israel" && country !== "usa") {
        let message = "Membership is only for residents of Israel or USA";
        let element = "country-input";
        createMsg(element, message);
    }
    if (document.getElementsByClassName("error").length === 0) {
        let element = "login-button";
        let message = "Welcome " + userName;
        welcome(element, message);
    }
}

function createMsg(element, message) {
    if (!document.getElementById("error_" + element)) {
        let notEnough = document.createElement("div");
        notEnough.className = "error";
        notEnough.setAttribute("id", "error_" + element);
        notEnough.innerHTML = message;
        document.getElementById(element).appendChild(notEnough);
    }
}


function welcome(element, message) {
    let enough = document.createElement("div");
    enough.className = "welcome";
    enough.innerHTML = message;
    document.getElementById(element).appendChild(enough);
}
let errorCounter = 0;
const submitForm = function () {
    let userName = document.getElementById('uname').value;
    let password = document.getElementById("password").value;
    let passwordRepeat = document.getElementById("password-repeat").value;
    let telephone = document.getElementById("telephone").value;
    let country = document.getElementById("country").value;
    country.toLowerCase();

    if (userName.length >= 5) {
        let element = "uname-input";
        let parent = document.getElementById(element);
        if (parent.getElementsByClassName('msg')) {
            removeMsg(element);
        }
    }
    if (userName.length < 5) {
        let message = "The supplied username is too short, try again using 5 or more characters";
        let element = "uname-input";
        createMsg(element, message);
    }
    if (password.length >= 6) {
        let element = "pword-input";
        removeMsg(element);
    }
    if (password.length < 6) {
        let message = "Your Password is too short it must be at least six characters";
        let element = "pword-input";
        createMsg(element, message);
    }
    if (passwordRepeat === pasword) {
        let element = "pword-repeat-input";
        removeMsg(element);
    }
    if (passwordRepeat !== password) {
        let message = "Your Passwords do not match.";
        let element = "pword-repeat-input";
        createMsg(element, message);
    }
    if (telephone.length > 15) {
        let message = "Your Phone number cannot be more then 15 characters";
        let element = "tel-input";
        createMsg();
    }
    if (country === "israel" || country === "usa") {
        let element = "country-input";
        removeMsg(element);
    }
    if (country !== "israel" && country !== "usa") {
        let message = "Membership is only for residents of Israel or USA";
        let element = "country-input";
        createMsg(element, message);
    }
    if (errorCounter === 0) {
        let element = "login-button";
        let message = "Welcome " + userName;
        welcome(element, message);
    }
}
function removeMsg(element) {
    let parent = document.getElementById(element);
    let child = parent.getElementsByClassName('msg');
    child.style.display="none";
}
function createMsg(element, message) {
    let notEnough = document.createElement("div");
    let textNode = document.createTextNode(message);
    textNode.class = "error";
    errorCounter++;
    notEnough.setAttribute("class", "msg");
    notEnough.appendChild(textNode);
    document.getElementById(element).appendChild(notEnough);
    document.getElementById("msg").style.display = "block";

}

function welcome(element, message) {
    let notEnough = document.createElement("div");
    let textNode = document.createTextNode(message);
    textNode.class = "welcome";
    notEnough.setAttribute("class", "msg");
    notEnough.appendChild(textNode);
    document.getElementById(element).appendChild(notEnough);
    document.getElementById("msg").style.display = "block";
    errorCounter++;
}
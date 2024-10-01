let emailAdd = document.getElementById("email");
let passwordAdd = document.getElementById("password");
let emailParagraph = document.getElementById("email-para");
let passwordParagraph = document.getElementById("password-para");
let signupButton = document.getElementById("signup-btn");
let useSigninCodeButton = document.getElementById("b-btn");
let signinCodeParagraph = document.getElementById("singin-code");

let email = "netflixindia@gmail.com";
let password = "123456789";
 
function validation() {
    let emailAddress = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (emailAddress == " " || password == "") {
        emailParagraph.style.display = "block";
        passwordParagraph.style.display = "block";
        emailParagraph.innerText = "Please enter a valid email address or phone number";
        emailParagraph.style.color = "red";
        emailParagraph.style.fontSize = "0.7rem";
        emailParagraph.style.textAlign = "start";
        passwordParagraph.innerText = "Your password must contain between 4 and 60 characters.";
        passwordParagraph.style.color = "red";
        passwordParagraph.style.fontSize = "0.7rem";
        passwordParagraph.style.textAlign = "start";
        return false;

    }
    else if (emailAddress == email) {
        passwordParagraph.innerText = "Your password must contain between 4 and 60 characters.";
    }

    else if (emailAddress == "" || emailPassword == password) {
        emailParagraph.innerText = "Please enter a valid email address or phone number";
    }

    else if (emailAddress == email || emailPassword == password) {
        window.location = "index.html";
    }

    else if (emailAddress !== email) {
        emailParagraph.innerText = "Invalid email please check";
    }

    else if (emailPassword !== password) {
        passwordParagraph.innerText = "Invalid password";
    }
    else {
        true;
    }
}
//use sign-in code
function signInCode() {
    passwordAdd.style.display = "none";
    passwordParagraph.style.display = "none";
    signupButton.innerText = "Send sign-in code";
    useSigninCodeButton.innerText = "Use password";
    signinCodeParagraph.innerText = "Message and data rates my apply";
    signinCodeParagraph.style.textAlign = "center";
    signinCodeParagraph.style.fontSize = "0.5rem";
    signinCodeParagraph.style.color = "gray";
}

function cheeking() {
    validation();
}

//Learn more
let learnMore = document.getElementById("learn-more");
let learnMore_button = document.getElementsByClassName("learn-more");

function learnMoreDetails() {
    learnMore.style.display = "block";
    // // learnMore_button.style.color = "#000000b0";
    // learnMore.innerText = "The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).";
    // learnMore.style.fontSize ="0.85rem";
    // learnMore.style.color = "gray";
    // learnMore.style.width = "90%"; 
    // learnMore.style.textAlign = "start";
}

//Language

const translations = {
    english: {
       
    },
    hindi: {
        
    }
}

let languageSelect = document.querySelector("select");
//NavHome Page
let signIn_heading = document.getElementById("sign-in");
let signIn_Button = document.getElementById("signup-btn");
let signIn_Code = document.getElementById("b-btn");
let forgot_password = document.getElementById("f-password");
let new_to_netflix = document.getElementsByTagName("h4");
let signup_now = document.getElementById("signup-now");
let learnMore_para = document.getElementsByTagName("h5");
let learnMore_paraclick = document.getElementById("learn-more");

//Footer 
let footer_heading = document.getElementById("")
//All sections

//question

const setLanguage = (language) => {
    if (language == "english") {
        HeroHeadingOne.innerText = translations.english.headingOne;
       

    } else if (language == "hindi") {
        HeroHeadingOne.innerText = translations.hindi.headingOne;
        
    }
}
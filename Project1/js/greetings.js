// Selecting <form> tag with 'login-form' id from HTML
const loginForm = document.querySelector("#login-form")
// Selecting <input> tag with 'login-form' id inside of <form> tag from HTML
const loginInput = document.querySelector("#login-form input");
// Selecting tag <h1> tag with 'greeting' id from HTML
const greeting = document.querySelector("#greeting");

// Setting constant value
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// function will hide loginForm tag and save userinfo to local storage in the browser.
const onLoginSubmit = (event) => {
    // preventDefault stops default behavior. In this case is refreshing when submitting info.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

// Changing text from HTML and remove class from the tag
const paintGreetings = (username) => {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Checking items saved in the local storage of the browser
const savedUsername = localStorage.getItem(USERNAME_KEY);

// If nothing is saved in the local storage, 
// proceed to initial website.
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
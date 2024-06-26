const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

// For function called by addEventListener,
// event could be entered as argument, which JS
// automatically give us.
const onLoginSubmit = (event) => {
    // preventDefault stops default behavior. 
    // In this case is refreshing when submitting info.
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);


var form=document.getElementById('form');
var passwordEl=document.getElementById('password');
var passwordConfirmEl=document.getElementById('confirm');
var messageContainer=document.querySelector('.message-container');
var message=document.getElementById('message');


let isValid = false;
let passwordsMatch=false;

function validateForm(){
    //using constraint API https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
    isValid=form.checkValidity();
    //style main message for an error
    if(!isValid){
    message.textContent="please fill out all fields";
    message.style.color='red';
    messageContainer.style.borderColor='red';
    return;
    }
    //check if pass match
    if(passwordEl.value === passwordConfirmEl.value){
        passwordsMatch=true;
        passwordEl.style.borderColor='green';
        passwordConfirmEl.style.borderColor='green';
    } else{
        passwordsMatch=false;
        message.textContent="password need to match";
        message.style.color='red';
        messageContainer.style.borderColor='red';
        passwordEl.style.borderColor='red';
        passwordConfirmEl.style.borderColor='red';
        return;
    }
    //if form is valid, pass match message
    if(isValid&&passwordsMatch){
        message.textContent="succesfully registered!"
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
}

//storedata
function storeFromData(){
    var user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        password:form.password.value
    };
    //do smth with user data
    console.log(user);
}
function processFormData(event){
    //Clicking on a "Submit" button, prevent it from submitting a form(because no backend to receive form)so by defauld refresh the page...
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();
    //split into 2 functionality:
    //1.Validate the form
    validateForm();
    //2.submit data if valid
    if(isValid&&passwordsMatch){
        storeFormData();
    }


}



//event listener https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

form.addEventListener('submit', processFormData);

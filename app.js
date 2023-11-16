const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active')
})

//modal items
const modal = document.getElementById('email-modal');
const openbtn = document.querySelector('.main-btn');
const closebtn = document.querySelector('.close-btn');

//click events
openbtn.addEventListener('click',()=> {
    modal.style.display='block';
});

closebtn.addEventListener('click', () =>{
    modal.style.display= 'none';
});

window.addEventListener('click',(e) =>{
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


//form validation 
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm  = document.getElementById('password-Confirm');

//show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//SHow valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else{
            showValid(input);
        }
    })
}

//Check input lenght
function checkLength(input, min , max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} Must be at least ${min} characters`);
    } else if (input.value.lenght > max) {
        showError(input, `${getFieldName(input)} Must be less than ${max} characters`)
    } else {
        showValid(input);
    }
}

//check email format
function checkEmail(input) {
    }

// get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//check passwords match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Passwords do not Match");
 }
} 
//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})
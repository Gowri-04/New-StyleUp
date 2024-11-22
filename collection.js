var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(e){
    var enteredvalue = e.target.value.toUpperCase()

    for(count = 0; count < productlist.length; count = count+1){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue) <0){
            productlist[count].style.display = "none";
        }
        else{
            productlist[count].style.display = "block";
        }
    }
})

/*
const form = document.getElementById('.contact-form');
const successMessage = document.getElementById('.success-message');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const firstname = document.getElementById('first-name').value.trim();
    const lastname = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    const formAlert = document.querySelectorAll('.form-alert');

    let isvalied = true

    // firstname validation

    if(firstname === ''){
        isvalied = false;

        document.querySelector('#first-name + .form-alert').style.display = 'block';
        document.querySelector('#first-name').style.border = '1px solid var(--red)';
    }
    else{
        document.querySelector('#first-name + .form-alert').style.display = 'none';
        document.querySelector('#first-name').style.border = '1px solid var(--medium-grey)';  
    }

    // lastname validation

    if(lastname === ''){
        isvalied = false;

        document.querySelector('#last-name + .form-alert').style.display = 'block';
        document.querySelector('#last-name').style.border = '1px solid var(--red)';
    }
    else{
        document.querySelector('#last-name + .form-alert').style.display = 'none';
        document.querySelector('#last-name').style.border = '1px solid var(--medium-grey)';  
    }

    // email validation

    if(isvaliedEmail (email)){
        isvalied = false;

        document.querySelector('#email + .form-alert').style.display = 'block';
        document.querySelector('#email').style.border = '1px solid var(--red)';
    }
    else{
        document.querySelector('#email + .form-alert').style.display = 'none';
        document.querySelector('#email').style.border = '1px solid var(--medium-grey)';  
    }

    // message validation

    if(message === ''){
        isvalied = false;

        document.querySelector('#message + .form-alert').style.display = 'block';
        document.querySelector('#message').style.border = '1px solid var(--red)';
    }
    else{
        document.querySelector('#message + .form-alert').style.display = 'none';
        document.querySelector('#message').style.border = '1px solid var(--medium-grey)';  
    }
    
    // consent validation

    if(!consent){
        isvalied = false;

        formAlert[5].classList.add('form-error');
    }
    else{
        formAlert[5].classList.remove('form-error');
    }

    // Form is valied

    if(isvalied){
        successMessage.classList.add('active');
        form.reset();
    }
})

// Email validation function

function isvaliedemail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
*/
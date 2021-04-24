const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const zipCode = document.querySelector('#zip');
const country = document.querySelector('#country');
const birthday_ = document.querySelector('#birthday');
const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#validate_password');
const phoneNum = document.querySelector('#phone');
const education = document.querySelector('#education');
const career = document.querySelector('#career');
const sqlServerLevel = document.querySelector('#sql_server_level');
const sqlLevel = document.querySelector('#sql_level');

firstName.addEventListener('input', () => {
    firstName.setCustomValidity('');
    firstName.checkValidity();
});

firstName.addEventListener('invalid', () => {
    firstName.setCustomValidity('Enter your first name!');
});

lastName.addEventListener('input', () => {
    lastName.setCustomValidity('');
    lastName.checkValidity();
});

lastName.addEventListener('invalid', () => {
    lastName.setCustomValidity('Enter your last name!');
});


email.addEventListener('input', () => {
    email.setCustomValidity('');
    email.checkValidity();
});

email.addEventListener('invalid', () => {
    if(email.value === '') {
        email.setCustomValidity('Enter your email!');
    } else {
        email.setCustomValidity('Enter your email correctly!');
    }
});

phoneNum.addEventListener('input', () => {
    phoneNum.setCustomValidity('');
    phoneNum.checkValidity();
});

phoneNum.addEventListener('invalid', () => {
    if(phoneNum.value === '') {
        phoneNum.setCustomValidity('Enter your phone number!');
    } else if(phoneNum.value.toString().length != 10) {
        phoneNum.setCustomValidity('Phone number should have 10 digits!');
    }
});

city.addEventListener('input', () => {
    city.setCustomValidity('');
    city.checkValidity();
});

city.addEventListener('invalid', () => {
    city.setCustomValidity('Enter your city!');
});

zipCode.addEventListener('input', () => {
    zipCode.setCustomValidity('');
    zipCode.checkValidity();
});

zipCode.addEventListener('invalid', () => {
    if(zipCode.value === '') {
        zipCode.setCustomValidity('Enter your zip code!');
    } else {
        zipCode.setCustomValidity('Enter your zip code correctly(5 digits)!');
    }
});

country.addEventListener('input', () => {
    country.setCustomValidity('');
    country.checkValidity();
});

country.addEventListener('invalid', () => {
    country.setCustomValidity('Enter your country!');
});

birthday_.addEventListener('input', () => {
    birthday_.setCustomValidity('');
    birthday_.checkValidity();
});

birthday_.addEventListener('invalid', () => {
    birthday_.setCustomValidity('Enter your birthday!');
});

pass1.addEventListener('input', () => {
    pass1.setCustomValidity('');
    pass1.checkValidity();
});

pass1.addEventListener('invalid', () => {
    if(pass1.value === '') {
        pass1.setCustomValidity('Enter your password!');
    } else {
        pass1.setCustomValidity('Password should be at least 8 characters!');
    }
});

pass2.addEventListener('input', () => {
    pass2.setCustomValidity('');
    pass2.checkValidity();
});

pass2.addEventListener('invalid', () => {
    if(pass2.value === '') {
        pass2.setCustomValidity('Enter your validate password!');
    } else {
        pass2.setCustomValidity('Password should be at least 8 characters!');
    }
});

education.addEventListener('input', () => {
    education.setCustomValidity('');
    education.checkValidity();
});

education.addEventListener('invalid', () => {
    education.setCustomValidity('Enter your education!');
});

career.addEventListener('input', () => {
    career.setCustomValidity('');
    birthday_.checkValidity();
});

career.addEventListener('invalid', () => {
    career.setCustomValidity('Enter your career!');
});

sqlServerLevel.addEventListener('input', () => {
    sqlServerLevel.setCustomValidity('');
    sqlServerLevel.checkValidity();
});

sqlServerLevel.addEventListener('invalid', () => {
    sqlServerLevel.setCustomValidity('Enter your sql server level!');
});

sqlLevel.addEventListener('input', () => {
    sqlLevel.setCustomValidity('');
    sqlLevel.checkValidity();
});

sqlLevel.addEventListener('invalid', () => {
    sqlLevel.setCustomValidity('Enter your sql level!');
});
/*--------------------------------------------------------------------------------*/
function changePasswordDisplay(el){
    let psw = document.getElementById('password');
    let val_psw = document.getElementById('validate_password');
    if(el.checked == true){
        psw.type = 'text';
        val_psw.type ='text';
    }else{
        psw.type = 'password';
        val_psw.type = 'password';
    }
}

function displayTimeSpent(el) {
    el.nextElementSibling.value = el.value;
}

function setMaxDate(){
    let el = document.getElementById('birthday');
    el.max =new Date().toISOString().split("T")[0];
}

function calculateAge() {
    let today = new Date(document.getElementById('birthday').max);
    let birthday = new Date(document.getElementById('birthday').value);

    let utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    let utc2 = Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());

    let oneDay = 24 * 60 * 60 * 1000; //in ms
    let age = Math.floor(Math.floor((utc1 - utc2) / oneDay) / 365);
    return age;
}


/*password check*/
function passCheck(el, show){
    let pass = document.getElementById('password');
    let pass_check =  document.getElementById('pass_check');

    if(show) pass_check.style.visibility = 'visible';

    if(pass.value !== el.value){
        if(show) {
            pass_check.innerHTML = 'Not matching passwords';
            pass_check.style.color = 'red';
        }
        return false;
    }

    if(show){
        pass_check.innerHTML = 'Matching passwords';
        pass_check.style.color = 'darkgreen';
    }

    return true;
}

function hidePassCheck() {
    let pass_check =  document.getElementById('pass_check');
    pass_check.style.visibility = 'hidden';
}

/*check email is safe*/
function checkEmailSafety() {
    let safe_emails = ['gmail.com', 'hotmail.com', 'yahoo.com'];
    let user_email = document.getElementById('email').value;
    let user_email_provider= user_email.split('@')[1];
    let m;
    for(m in safe_emails){
        if( safe_emails[m] === user_email_provider){
            return true;
        }
    }
    return false;
}

function validateData() {
    let non_valid_data = [];
    if(calculateAge() < 18) non_valid_data.push('You should be at least 18 years old.');
    if(!checkEmailSafety()) non_valid_data.push('Email should be of type @gmail.com, @hotmail.com or @yahoo.com.');
    if(!passCheck(document.getElementById('validate_password'), false))  non_valid_data.push('Passwords do not match.');

    return showModal(non_valid_data);
}


function showModal(non_valid_data){
    let remove_els = document.getElementsByClassName('modal_text');
    while(remove_els[0]){
        remove_els[0].parentNode.removeChild(remove_els[0]);
    }

    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    let modal_heading = document.getElementById('modal_heading');

    if(non_valid_data.length == 0){
        let close = document.getElementById('close');
        close.style.display = 'none';
        modal_heading.innerHTML = 'Sign Up Successful!';
        let node = document.createElement("p");
        node.innerHTML = 'Redirecting to Home...';
        node.classList.add('modal_text');
        modal.appendChild(node);
        setTimeout(function(){ window.location.href ='index.html'; }, 3000);
        return false;
    }

    modal_heading.innerHTML = 'Data is not valid.';
    document.getElementById('sign_up_button').style.backgroundColor = 'red';
    let x;
    for(x in non_valid_data){
        let node = document.createElement("p");
        node.innerHTML = "- " + non_valid_data[x];
        node.classList.add('modal_text');
        modal.appendChild(node);
    }
    return false;
}


function hideModal(){
    document.getElementById('modal').style.display = 'none';
}


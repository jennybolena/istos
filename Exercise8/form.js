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
            console.log(m);
            return true;
        }
    }
    console.log('sss');
    return false;
}

function validateData() {
    if(calculateAge() < 18){
       return false;
    }

   return true;
}


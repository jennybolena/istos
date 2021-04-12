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

function validateData() {
    if(calculateAge() < 18){
       return false;
    }

   return true;
}

//alert(document.querySelector('input[name="start_learning"]:checked').value);

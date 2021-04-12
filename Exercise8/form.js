
function validateData() {
    console.log("ok");
}


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


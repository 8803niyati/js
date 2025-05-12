const form = document.querySelector('form');

function clearError(){
    let errorsList = document.querySelectorAll('.error');
    errorsList.forEach(item => item.innerHTML = "")
}

function setError(id, message){
    document.getElementById(id).innerHTML = message
}

form.addEventListener('submit',(event) => {

    event.preventDefault();
    clearError();
    let a = true;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;

    // console.log(fname,lname,email,password)

    if(fname == ""){
        setError("fnameErr", 'Firstname is required');

        a = false;
    }
    if(lname == ""){
        setError("lnameErr", 'Lastname is required');

        a = false;
    }
    if(email == ""){
        setError("emailErr", 'Email is required');

        a = false;
    }
    if(password == ""){
        setError("passErr", 'Password is required');

        a = false;
    }

    if(a){
        console.log("submitted");
        form.reset();
    }
});
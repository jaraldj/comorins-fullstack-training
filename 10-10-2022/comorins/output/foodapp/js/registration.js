
function store(){
    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let password = document.getElementById("pwd");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert("Please Enter Name")
    }else if(email.value.length == 0){
        alert("Please Enter email")
    }else if(password.value.length == 0){
        alert("Please Fill password")
    }else if(email.value.length == 0 && password.value.length == 0){
        alert("Please enter email and password")
    }else if(password.value.length < 8){
        alert("Please enter atleast 8Characters")
    }else if(!password.value.match(numbers)){
        alert("Please enter atleast 'one' number")
    }else if(!password.value.match(lowerCaseLetters)){
        alert("Please enter atleast 'one' lowercase")
    }else if(!password.value.match(upperCaseLetters)){
        alert("Please enter atleast 'one' uppercase")
    }else{
        alert("Account Created Successfully")
    }
}

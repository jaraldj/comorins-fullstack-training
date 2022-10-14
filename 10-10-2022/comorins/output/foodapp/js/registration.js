
function saveData()
  {

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    let psw=document.getElementById("psw").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("Account already exist");
    }
    else
    {
      user_records.push({
      "name":name,
      "email":email,
      "psw":psw
    })
localStorage.setItem("users",JSON.stringify(user_records));
  }

  }















// let loginDetail = {

// }

// if(localStorage.getItem("loginDetails")){
//     localStorage.setItem("loginDetails", JSON.stringify([]))
// }


// function store(){
//     let name = document.getElementById("nameInput").value;
//     let email = document.getElementById("emailInput").value;
//     let password = document.getElementById("pwd").value;
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;

//     if(name.value.length == 0){
//         alert("Please Enter Name")
//     }else if(email.value.length == 0){
//         alert("Please Enter email")
//     }else if(password.value.length == 0){
//         alert("Please Fill password")
//     }else if(email.value.length == 0 && password.value.length == 0){
//         alert("Please enter email and password")
//     }else if(password.value.length < 8){
//         alert("Please enter atleast 8Characters")
//     }else if(!password.value.match(numbers)){
//         alert("Please enter atleast 'one' number")
//     }else if(!password.value.match(lowerCaseLetters)){
//         alert("Please enter atleast 'one' lowercase")
//     }else if(!password.value.match(upperCaseLetters)){
//         alert("Please enter atleast 'one' uppercase")
//     }else{
//         alert("Account Created Successfully")
//     }
// }

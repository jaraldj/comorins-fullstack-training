const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tipamount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if(tip === "NaN"){
    tipAmount.textContent = "Tip ₹0 each";
    showTip();
  }
  else{
    tipAmount.textContent = "Tip ₹" + tip + " each";
    showTip();
  }
}

showTip = () => {
  // Add the "show" class to DIV
  tipAmount.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ 
    tipAmount.className = tipAmount.className.replace("show", ""); 
    }, 3000);
}
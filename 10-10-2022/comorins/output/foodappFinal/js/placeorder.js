if(!localStorage.getItem("orders")){
    localStorage.setItem("orders", JSON.stringify([]))
}
let placeLocal = JSON.parse(localStorage.getItem("productInCart")) 
console.log(placeLocal);


function cartViewCards()
        {
          let cartView = JSON.parse(localStorage.getItem("productInCart"))
          let cartEle = "";
          let subTotal = 0;
          for(let i = 0; i < cartView.length; i++){
            cartEle +='<li><div><div class="card-body"><p class="card-text"><div class="row m-0"><div class="col-9 p-0">'+cartView[i].foodNames+'</div><div class="col-3 p-0 pl-2"> <span>'+cartView[i].foodPrice+'</span></div></div></p></div></div></li>'
            subTotal = subTotal + parseInt(cartView[i].foodPrice) 
          }
          document.getElementById("cartView").innerHTML = cartEle;
          document.getElementById("subTotals").innerHTML = subTotal;
        }
        

function placeOrder(){
    console.log("Clicked");
    let plcaceLocals = JSON.parse(localStorage.getItem("productInCart"));
    localStorage.setItem("orders", JSON.stringify(placeLocal))
    localStorage.removeItem("productInCart")
    console.log(plcaceLocals);
    // localStorage.setItem("productInCart", JSON.stringify(plcaceLocals))
    // console.log(plcaceLocals);
    // plcaceLocals.remove()
    // localStorage.setItem("productInCart", JSON.stringify(plcaceLocals))
     alert("Order Placed Successfully!")
     window.location.href = "index.html"
    cartViewCards()
}
cartViewCards()

 //placeOrder()
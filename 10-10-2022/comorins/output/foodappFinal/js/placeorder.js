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
            cartEle +='<li><div><div class="card-body mt-5"><p class="card-text"><div class="row m-0"><div class="col-9 p-0">'+cartView[i].foodNames+'</div><div class="col-3 p-0 pl-2"> <span>'+cartView[i].foodPrice+'</span></div></div></p></div></div></li>'
            subTotal = subTotal + parseInt(cartView[i].foodPrice) 
          }
          document.getElementById("cartView").innerHTML = cartEle;
          document.getElementById("subTotals").innerHTML = subTotal;
        }
        
        // function placeOrders(){
          

function placeOrder(){
  
  
    // document.getElementById("placeBody").innerHTML = `<a href="placeorder.html"><button class="btn btn-outline-success my-2 my-sm-0" onclick="placeOrders()" type="submit">Place Order</button></a> `
  
    console.log("Clicked");
    let plcaceLocals = JSON.parse(localStorage.getItem("productInCart"));
    localStorage.removeItem("productInCart")
    console.log(plcaceLocals);
    // localStorage.setItem("productInCart", JSON.stringify(plcaceLocals))
    // console.log(plcaceLocals);
    localStorage.setItem("orders", JSON.stringify(placeLocal))
    // plcaceLocals.remove()
    // localStorage.setItem("productInCart", JSON.stringify(plcaceLocals))
     alert("Order Placed Successfully!")
     window.location.href = "index.html"
    cartViewCards()
  
}
cartViewCards()

  //placeOrder()
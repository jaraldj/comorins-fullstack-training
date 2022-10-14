let menuSelect = JSON.parse(localStorage.getItem("restaurants"));
const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('restaurantName')
        alert(url);
        
        
        let menuContainer = document.getElementById("menuList")
        let cart = document.querySelectorAll(".addToCart");
        console.log(cart);

        for(let i =0; i < menuSelect.length; i++){
            if(url == menuSelect[i].restaurantName){
               let menu = menuSelect[i].foodMenu
               let ele = "";
              for(let i = 0; i < menu.length; i++){
                ele += `<div class="card mb-3 cardBorder">
                <div class="row no-gutters">   
                  <div class="col-md-9">
                    <div class="card-body pl-0">
                      <h5 class="card-title">${menu[i].foodName}</h5>
                      <p class="card-text"><span>&#8377;</span> <span>${menu[i].price}</span></p>
                      <p class="card-text"><small class="text-muted">${menu[i].desc}</small></p>
                    </div>
                  </div>
                  <div class="col-md-3 my-auto addBtn">
                    <button class="btn btn-outline-success my-2 my-sm-0 ml-5 addToCart" type="submit">Add to Cart</button>
                  </div>
                </div>
              </div>`

              menuContainer.innerHTML = ele;
              }
            }
        }


        let btn = document.getElementsByClassName("addToCart")
        for(i = 0; i < btn.length; i++){
          let cartBtn = btn[i]
          cartBtn.addEventListener("click", () => {
            let product = {
              foodNames : event.target.parentElement.parentElement.children[0].children[0].children[0].textContent,
              foodPrice : event.target.parentElement.parentElement.children[0].children[0].children[1].textContent,
              totalPrice : parseInt(event.target.parentElement.parentElement.children[0].children[0].children[1].textContent),
              quantity : 1
            }
            addItemToLocal(product);
          })
        }
        function addItemToLocal(product){
          if(!localStorage.getItem("productInCart")){
            localStorage.setItem("productInCart", JSON.stringify([]))
          }
          let cartItem =JSON.parse(localStorage.getItem("productInCart"))
          cartItem.push(product)
          localStorage.setItem("productInCart", JSON.stringify(cartItem))
          console.log(cartItem);
        }
        

        

        // <img src="${menu[i].imgUrl}" class="card-img-top" alt=""/>
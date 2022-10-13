let menuSelect = JSON.parse(localStorage.getItem("restaurants"));
const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('restaurantName')
        alert(url);
        
        
        let menuContainer = document.getElementById("menuList")


        for(let i =0; i < menuSelect.length; i++){
            if(url == menuSelect[i].restaurantName){
               let menu = menuSelect[i].foodMenu
               let ele = "";
              for(let i = 0; i < menu.length; i++){
                ele += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
    
    
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${menu[i].foodName}</h5>
                      <p class="card-text">${menu[i].price}</p>
                      <p class="card-text"><small class="text-muted">${menu[i].desc}</small></p>
                    </div>
                  </div>
                  <div class="col-md-4">

                  </div>
                </div>
              </div>`

              menuContainer.innerHTML = ele;
              }
            }
        }

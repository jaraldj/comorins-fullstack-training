let menuSelect = JSON.parse(localStorage.getItem("restaurants"));
const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('restaurantName')
        alert(url);

        // for(let i = 0; i < menuSelect.length; i++){
        //     if(url == menuSelect[i].restaurantName){
        //         document.getElementById("foodName").innerHTML = menuSelect.foodName
        //         document.getElementById("price").innerHTML = menuSelect.price
        //         document.getElementById("desc").innerHTML = menuSelect.desc
        //     }
        // }
        
        
       let menuContainer = document.getElementById("menuList")


    //    let ele = "";
    //    function menu(){
    //     for(let i =0; i < menuSelect.length; i++){
    //         if(url == menuSelect[i].restaurantName){
    //             ele += `<div class="card mb-3" style="max-width: 540px;">
    //             <div class="row no-gutters">
    
    
    //               <div class="col-md-8">
    //                 <div class="card-body">
    //                   <h5 class="card-title">${menuSelect[i].foodName}</h5>
    //                   <p class="card-text">${menuSelect[i].price}</p>
    //                   <p class="card-text"><small class="text-muted">${menuSelect[i].desc}</small></p>
    //                 </div>
    //               </div>
    //               <div class="col-md-4">
    //                 <img src="..." alt="...">
    //               </div>
    //             </div>
    //           </div>`


    //         }
    //     menuContainer.innerHTML = ele;

    //     }
    //    }

        function returnCard(menuSelect){
            return "<div class=\"menuCard\">" + menuSelect.map(restaurants => `
                <div id = "menuCards">
                <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${restaurants.foodName}</h5>
                      <p class="card-text">${restaurants.price}</p>
                      <p class="card-text"><small class="text-muted">${restaurants.desc}</small></p>
                    </div>
                  </div>
                  <div class="col-md-4">

                  </div>
                </div>
            </div>
                </div>
            `).join('') + "</div>"
        }

        menuContainer.innerHTML = returnCard(menuSelect)


        // <img src="${restaurants.url}" width="100%" alt="...">

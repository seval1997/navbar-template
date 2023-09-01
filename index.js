var navbarHeader = document.querySelector(".navbar-header");
var show = true;

navbarHeader.addEventListener("click", function(){
    var navbarBody = document.querySelector(".navbar-body");
    var navbarSearch = document.querySelector(".navbar-search");
    if(show) {
        navbarBody.classList.add("show");
        navbarSearch.classList.add("show");    
        show = false;
    } else {
        navbarBody.classList.remove("show");
        navbarSearch.classList.remove("show");    
        show = true;
    }
    
})

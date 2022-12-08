document.addEventListener("keyup", (e) => {
    if(e.target.matches(".input-search")){
        let count = 0;
        for(let i = 0; i<document.querySelectorAll(".country-name").length; i++){
            /*document.querySelectorAll(".country-name")[i].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ? document.querySelectorAll('.country')[i].classList.remove("filter") : document.querySelectorAll('.country')[i].classList.add("filter");*/
            if(document.querySelectorAll(".country-name")[i].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                document.querySelectorAll('.country')[i].classList.remove("filter");
                count++;
            }else{
                document.querySelectorAll('.country')[i].classList.add("filter");
            }
        }
        count ? document.querySelector('.not-found').classList.add("filter") : document.querySelector('.not-found').classList.remove("filter");
    }    
})
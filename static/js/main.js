import { countriesAPI} from "./api.js";
var obj = [];
var selected = null;

countriesAPI(obj);

const countries = document.querySelector('.countries');
countries.addEventListener('click', (e) => {
    var country = null;
    if(e.target.classList[0] != 'countries'){
        selected = e.target.classList[0];
        country = JSON.stringify(obj[selected]);
        console.log(country);
    }
})

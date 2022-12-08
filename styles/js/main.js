import { countriesAPI} from "./api.js";
countriesAPI();
var obj ={};
const countries = document.querySelector('.countries');
countries.addEventListener('click', (e) => {
    let click = '';
    if(e.target.classList[0] == 'countries'){
        click = '';
    }else{
        obj ={"country": e.target.classList[0]};
        var json = JSON.stringify(obj);
        console.log(json);
    }
})

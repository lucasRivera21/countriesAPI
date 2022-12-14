import { countriesAPI} from "./api.js";
var obj = [];
var selected = null;

countriesAPI(obj);

const countries = document.querySelector('.countries');
countries.addEventListener('click', (e) => {
    var array =[]
    if(e.target.classList[0] != 'countries'){
        selected = e.target.classList[0];
        obj[selected].borders.forEach((element) => {
            for(let i = 0; i < obj.length; i++){
                if(element == obj[i].cca3){
                    array.push(obj[i].countryName);
                }
            }
        })

        obj[selected].array = array;
        localStorage.setItem("country", JSON.stringify(obj[selected]));
    }
})

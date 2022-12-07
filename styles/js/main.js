import { countriesAPI} from "./api.js";
countriesAPI();
//console.log(data);

const darkMode = document.querySelector('.dark-mode-btn');
let mode = true;
let color = document.documentElement.style;
darkMode.addEventListener('click', () =>{
    if(mode){
        color.setProperty('--background-color-white', '#2B3844');
        color.setProperty('--color-text', '#FFFFFF');
        color.setProperty('--background-color-body', '#202C36');
        mode = false;
    }else{
        color.setProperty('--background-color-white', '#FFFFFF');
        color.setProperty('--color-text', '#111517');
        color.setProperty('--background-color-body', '#FAFAFA');
        mode = true;
    };
});
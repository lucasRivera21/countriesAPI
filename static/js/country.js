const countryJson = localStorage.getItem("country");
const country = JSON.parse(countryJson);
console.log(country.borders);

function countryCreate(obj){
    const img = document.querySelector('.flag');
    img.src = obj.flag;

    const h2 = document.querySelector('.country-name');
    h2.textContent = obj.countryName;

    const nativeName = document.querySelector('.native-name');
    nativeName.textContent = Object.values(country.nativeName)[0].common;

    const population = document.querySelector('.population');
    population.textContent = country.population;

    const region = document.querySelector('.region');
    region.textContent = country.region;

    const subRegion = document.querySelector('.sub-region');
    subRegion.textContent = country.subregion;

    const capital = document.querySelector('.capital');
    capital.textContent = country.capital;

    const tld = document.querySelector('.tld');
    tld.textContent = country.tld;

    const currencies = document.querySelector('.currencies');
    currencies.textContent = Object.values(country.currencies)[0].name;

    const languages = document.querySelector('.languages');
    languages.textContent = Object.values(country.languages).join(', ');

    const borders = document.querySelector('.borders');

    try{
        country.borders.forEach((element) => {
            const button = document.createElement('button');
            button.textContent = element;
            button.classList.add('border-country');
            borders.appendChild(button);
        });
    }catch(e){
        console.log(e);
    }
    
}
countryCreate(country);

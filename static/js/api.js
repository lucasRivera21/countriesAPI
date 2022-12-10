const countriesAPI = async(obj) =>{
    try{
        const apiResponse = await fetch('https://restcountries.com/v3.1/all');
        const data = await apiResponse.json();
        for(let i=0; i<data.length; i++){
            obj[i] = {
                id: i,
                countryName: data[i].name.common,
                flag: data[i].flags.png,
                nativeName: data[i].name.nativeName,
                population: data[i].population,
                region: data[i].region,
                subregion: data[i].subregion,
                capital: data[i].capital,
                tld: data[i].tld,
                currencies: data[i].currencies,
                languages: data[i].languages,
                borders: data[i].borders
            }
            
            //LINK
            const countries = document.querySelector('.countries');
            const a = document.createElement('a');
            a.classList.add(`${obj[i].id}`);
            a.classList.add('country');
            //a.href = 'country.html';
            countries.appendChild(a);

            //PICTURE
            const picture = document.createElement('picture');
            picture.classList.add(`${obj[i].id}`);
            a.appendChild(picture);

            //IMG
            const img = document.createElement('img');
            img.classList.add(`${obj[i].id}`);
            picture.appendChild(img);
            img.src = data[i].flags.png;

            //COUNTRY NAME
            const h2 = document.createElement('h2');
            h2.classList.add(`${obj[i].id}`);
            h2.classList.add('country-name');
            a.appendChild(h2);
            h2.textContent = data[i].name.common;

            //INFO COUNTRY
            const arrayInfo = ['Population', 'Region', 'Capital']

            arrayInfo.forEach(item => {
                const div = document.createElement('div');
                div.classList.add(`${obj[i].id}`);
                div.classList.add('info');
                a.appendChild(div);

                const strong = document.createElement('strong');
                strong.textContent = item + ': ';
                strong.classList.add(`${obj[i].id}`);
                div.appendChild(strong);

                const p = document.createElement('p');
                p.classList.add(`${obj[i].id}`);
                try{
                    item == 'Population' ? p.textContent = data[i].population : item == 'Region' ? p.textContent = data[i].region : p.textContent = data[i].capital[0];
                }catch(e){
                    p.textContent = 'NONE';
                }
                if(item == 'Region'){
                    p.classList.add('region');
                }
                
                div.appendChild(p);
            })
        }
    }catch(e){
        console.log(e);
    }
    
}
export {countriesAPI};
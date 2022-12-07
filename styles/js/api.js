
const countriesAPI = async() =>{
    try{
        const apiResponse = await fetch('https://restcountries.com/v3.1/all');
        const data = await apiResponse.json();
        for(let i=0; i<data.length; i++){

            //LINK
            const countries = document.querySelector('.countries');
            const a = document.createElement('a');
            a.classList.add('country');
            a.href = '#';
            countries.appendChild(a);

            //PICTURE
            const picture = document.createElement('picture');
            a.appendChild(picture);

            //IMG
            const img = document.createElement('img');
            picture.appendChild(img);
            img.src = data[i].flags.png;

            //COUNTRY NAME
            const h2 = document.createElement('h2');
            h2.classList.add('country-name');
            a.appendChild(h2);
            h2.textContent = data[i].name.common;

            //INFO COUNTRY
            const arrayInfo = ['Population', 'Region', 'Capital']

            arrayInfo.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('info');
                a.appendChild(div);

                const strong = document.createElement('strong');
                strong.textContent = item + ': ';
                div.appendChild(strong);

                const p = document.createElement('p');
                try{
                    item == 'Population' ? p.textContent = data[i].population : item == 'Region' ? p.textContent = data[i].region : p.textContent = data[i].capital[0];
                }catch(e){
                    p.textContent = 'NONE';
                }
                
                div.appendChild(p);
            })
        }

    }catch(e){
        console.log(e);
    }
    
}
export {countriesAPI};
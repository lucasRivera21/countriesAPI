let select = document.querySelector('#select');
select.addEventListener('change', (e) => {
    let region = document.querySelectorAll('.region');
    for(let i = 0; i < region.length; i++) {
        e.target.value == 'default' ? document.querySelectorAll('.country')[i].classList.remove("filter") : region[i].textContent.toLocaleLowerCase() == e.target.value.toLocaleLowerCase() ? document.querySelectorAll('.country')[i].classList.remove("filter") :  document.querySelectorAll('.country')[i].classList.add("filter");
    }
})
const sizeRadio = [...document.querySelectorAll('.size')];
const colorCheckbox = [...document.querySelectorAll('.color')];
const manufacturerSelect = [...document.querySelectorAll('.option')];
const form = document.querySelector('#form');
const baseUrl = `${location.href}/filter?`;

window.addEventListener('load', () =>{
    const newUrl = new URL(`${baseUrl}size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
    const params = new URLSearchParams(newUrl.search);
    const size = params.get('size');
    const colors = params.getAll('color');
    const manufacturers = params.getAll('manufacturer');

    sizeRadio.forEach((item) => {
        if (item.value === size) {
            item.checked = true;
        }
    });
    colorCheckbox.forEach((item) => {
        if (colors.indexOf(item.value) != -1) {
            item.checked = true;
        }
    });
    manufacturerSelect.forEach((item) => {
        if(manufacturers.indexOf(item.value) != -1) {
            item.selected = true;
        }
    });
})
form.addEventListener('change', (e) => {
    let size = '';
    let colors = '';
    let manufacturers = '';
    sizeRadio.forEach((item) => {
        if (item.checked) {
            size = `size=${item.value}`;
        }
    });
    colorCheckbox.forEach((item) => {
        if (item.checked) {
            colors += `&color=${item.value}`;
        }
    });
    manufacturerSelect.forEach((item) => {
        if (item.selected) {
            manufacturers += `&manufacturer=${item.value}`;
        }
    });

    const newUrl = new URL(`${baseUrl}${size}${colors}${manufacturers}`)

    console.log(newUrl);
});
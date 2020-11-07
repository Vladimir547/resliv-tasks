document.querySelector('#name_input').addEventListener ('input', (e) => {
    if(e.target.value !== 'Xxxx') {
        document.querySelector('#name_input').classList.add('red');
        console.log(3);
    } else {
        document.querySelector('#name_input').classList.remove('red');
    }
});
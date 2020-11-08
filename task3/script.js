const firstUrl = 'https://api.lyrics.ovh/suggest/numb';
const secondUrl = 'https://akabab.github.io/superhero-api/api//all.json';
function makeXhr(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);

            } else {
                reject(request.status);
            }
        }

        request.send();
    });
}

//the solution below is easier then before

// async function makeXhr (url) {
//     let xhr = await fetch(url);
//     let res = await xhr.json();
//     return res;
// }
function getData(first, second) {
    return Promise.all([
        makeXhr(first),
        makeXhr(second)
    ]).then((data) => {
        console.log(data[0]);
        console.log('------------');
        console.log(data[1]);
        console.log('оба ответа получены');
    }).then((data) => {

    }).catch((err) => {
        console.log(err);
    })
}
getData(firstUrl, secondUrl);

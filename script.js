let root = document.documentElement;
const button = document.querySelector('button');
let pList = document.querySelectorAll('p');
let pArr = Array.from(pList);

function createRand() {
    let randomNumber = Math.floor(Math.random() * 360) + 1;
    return randomNumber;
}

function chaos() {
    let randomNumber = Math.floor(Math.random() * 360) + 1;
    let randomNumber2 = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    root.style.setProperty('--rand', randomNumber);
    root.style.setProperty('--rand2', randomNumber2);
    pArr.map(item => {
        item.textContent = `${createRand()}`;
        item.style.boxShadow = `0px 0px ${randomNumber}px ${createRand() /2 }px rgba(0, 0, 0, 0.5)`;
        item.style.fontSize = `${createRand() / 2}px`
        item.style.rotate = `${createRand()}deg`;
    })
}


button.addEventListener('click', chaos);

const btn = document.querySelectorAll('button');
/*console.log(btn);*/
const span = document.querySelectorAll('span');


let count = [0,0,0,0];

for(let i = 0 ; i < 4 ; i++){
    btn[i].onclick =() => {
        count[i]++;
        span[i].textContent = count[i];

    }
}

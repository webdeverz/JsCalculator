let buttons = document.getElementById("number").querySelectorAll('button');
let screen = document.getElementById('screen');
let body = document.querySelector('body');
for (const element of buttons) {
    element.addEventListener('click', function val(){
        let buttonText = element.innerText;
        
        if(buttonText == '='){
            let result = eval(screen.value);
            screen.value = result;
        }else if(buttonText == 'C'){
            screen.value = "";
        }else{
            screen.value += buttonText;
        }
    })
}

for (const elems of buttons) {
    elems.addEventListener('mousedown', down = () => {
        elems.style.border = '0px solid rgb(228, 227, 227)';
        elems.style.backgroundColor = "#c1c1c1";
    })
}
for (const elems of buttons) {
    elems.addEventListener('mouseup', up = () => {
        elems.style.border = '0px solid #c1c1c1';
        elems.style.backgroundColor = '';
    })
}
// __________________


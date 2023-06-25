const display=document.querySelector('#display');
const buttons=document.querySelectorAll("button");

buttons.forEach((items) =>{
    items.onclick=()=>{
        if(items.id=='clear'){
            display.innerText=' ';
        }else if(items.id=='backspace'){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }else if(display.innerText != " " && items.id=="equal"){
            display.innerText=eval(display.innerText);
        }else if(display.innerText == " " && items.id=="equal"){
            display.innerText="Empty!";
            setTimeout(()=>(display.innerText=" "),2000);
        }else{
            display.innerText+=items.id;
        }
    }
})

const ThemeToggleBtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.calculator');
const toggleicon=document.querySelector('.toggle-icon');
let isDark=true;
ThemeToggleBtn.onclick=() =>{
    calculator.classList.toggle('dark');
    ThemeToggleBtn.classList.toggle('active');
    isDark!=isDark;
}

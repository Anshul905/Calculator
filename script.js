const allButtonEles = document.querySelectorAll('button');
screen = document.querySelector('#screen');


console.log(allButtonEles);

let screenValue = '';

allButtonEles.forEach(cur_button => {
    cur_button.addEventListener('click',(event)=>{
        const target = event.target ;
        const buttonText = target.innerText ;
        console.log(target,buttonText);

        if(target.classList.contains('digit') || target.classList.contains('operator') || target.classList.contains('decimal') ){
            screenValue += buttonText;
        }else if(buttonText=='AC'){
            screenValue = '';
        }else if(buttonText=='DEL'){
            screenValue = screenValue.substring(0,screenValue.length-1);
        }else if(buttonText=='='){
            screenValue = eval(screenValue);
        }
        screen.value = screenValue;

    })    
});

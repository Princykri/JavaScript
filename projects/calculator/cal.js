let screen = document.getElementById('screen');   // --> select in input screen 
let button =document.querySelectorAll('button');  // select all button 
let screenValue='';
for(item of button){
    item.addEventListener('click',(e)=>{       // create a funtion which take the input text 
        buttonText=e.target.innerText;
        console.log(buttonText);  
        if(buttonText=='X'){
            buttonText ='*'; // because X doesn't have any meaning 
            screenValue +=buttonText;
            screen.value =screenValue;
        }
        else if(buttonText=='='){
            screen.value= eval(screenValue);
       }
       else if(buttonText=='C'){
        screenValue =" ";
        screen.value =screenValue;
        }
        else if(buttonText=='DEL'){
            screenValue=screen.value.slice(0,-1);
            screen.value =screenValue;
            }
        else {
            screenValue +=buttonText;
            screen.value =screenValue;
        }
       
        
    })
}
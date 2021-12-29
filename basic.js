// javaScript console API (application programmable interface)
console.log("hello");
console.log("hii , i m in console")
document.write("i m in document");
console.warn("this is warning");
console.error("this is an error");

//data type 
// 1. number 
var num1=56;
var num2=44;
document.write(num1+num2);

//2. string 
let str1="hii";
let str2="prema"
console.log(str1+"-"+str2);

//3.array 
let color=['red' ,'orange' ,'blue'];
console.log(color); 
    // Array -method
color.push("crimsonPink")    // add to end 
console.log(color); 
color.unshift("voilet");      // add to start
console.log(color); 
color.shift();      // remove from  start
console.log(color); 
color.pop();      // remove from end
console.log(color); 



// conditional statement 

// var a = 27;
// if(a > 18) {
//     console.log('you are an adult');
// }
// else{
//     console.log('you are not an adult');
// }

// for each loop

// var arr = [6,4,8,9,2];
// arr.forEach(function(element){
//     console.log(element);
// })
// 

// function 
// function age(a){
//     if(a>18){
//         console.log("u can vote ");
//     }
//     else{
//         console.log("u can't vote");
//     }
    
// }

var b=54;
age(b);

let arr=[2 ,4,5,6,8,2,12];
/* for(var i=0;i<=arr.length-1;i++){
   console.log(arr[i]);
}*/

arr.forEach(function(element){
   console.log(element);
}) 


// dom manupulation 

// css manupulation 
document.getElementById('click').click();
let elem=document.getElementById('click');
console.log(elem);
document.getElementById('click').style.border="blue";
document.getElementById('click').style.border="2px solid blue";

let emclass=document.getElementsByClassName('container');
console.log(emclass);
// emclass[0].style.background="yellow";      --> high priority
emclass[0].classList.add("bgprimary");
emclass[0].classList.add("text-success");
emclass[0].classList.remove("text-success")
console.log(emclass[0].innerHTML);
 console.log(emclass[0].innerText);

 // html manupulation 
 let tn= document.getElementsByTagName('div');
 console.log (tn);
 let CreatedElement=document.createElement('p');
 CreatedElement.innerText="this is created para";
 tn[0].appendChild(CreatedElement);

 let CreatedElement2=document.createElement('b');
 CreatedElement2.innerText="this is created bold para ";
 tn[0].replaceChild( CreatedElement2, CreatedElement);


//  selecting using query
sel=document.querySelector('.container') // -->give first container
console.log(sel);
sel=document.querySelectorAll('.container') // -->give all container
console.log(sel);

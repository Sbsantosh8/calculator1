let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');  

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
  button.addEventListener("click",(chalobc) =>{
    if(chalobc.target.innerHTML == "="){
      string = eval(string);
      input.value = string;
    }
    else if(chalobc.target.innerHTML == "AC"){
      string = "";
      input.value = string;
    }
   
    else if(chalobc.target.innerHTML == "DEL"){
      input.value = string.substring(0,string.length-1);
    }
    

else{
    string += chalobc.target.innerHTML;
    input.value = string;
}
  })
})
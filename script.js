let input = document.getElementById('inputbox');
let button = document.querySelectorAll
('button'); //query to select all buttons in html code
let string="";
let arr= Array.from(button);//arry of every button 
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{//action to happen when button is pressed
        if(e.target.innerHTML=='='){
            string = eval(string);//eval is used to perform all mathematical operations
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){//if ac is pressed input is deleted
             string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);//substring means the input after deleting one element
            input.value= string;
        }
        else{
        string +=e.target.innerHTML;
        input.value=string;
}})
})

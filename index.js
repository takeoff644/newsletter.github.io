
const submit = document.getElementById("submit");
const error= document.getElementById("error");
const email= document.getElementById("Email"); 
const val = document. querySelector('input'). value;   
const format=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(){
  
    if (format.test(val)){
        email.style.border ="0.3em solid green";
        error.style.display="none";
        window.open("newsletter success.html", '_blank');
    } 
    else{     
        email.style.border ="0.3em solid red";
        error.style.display="block";  
    }
}
function terminate(){
    window.close();
}







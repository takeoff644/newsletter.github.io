
const submit = document.getElementById("submit");
const error= document.getElementById("error");
const email= document.getElementById("Email"); 
const format= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function validate(){
    if (format.test(email.value)){
        return
        error.style.display="none";
        window.open("newsletter success.html", '_blank');
    } 
    else{  
        return
        email.style.border ="0.3em solid red";
        error.style.display="block";  
    }
}
function terminate(){
    window.close();
}







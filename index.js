
function validate(){
    const error= document.getElementById("error");
    const email= document.getElementById("Email");
    var emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)){
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







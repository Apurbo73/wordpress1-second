function logformvalidation()
{
    var logMail=document.getElementById("logInemail").value;
    if(logMail.length==0)
    {
       alert("Enter your mail");
       return false;
    }
var logInpass= document.getElementById("logpass").value;
var logPassPattern = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*<>?+_-])).{8,20}/
if(logInpass.length==0)
{
    alert("Enter your password");
    return false;
}
else if(!logInpass.match(logPassPattern))
{
    alert(" Incorrect Password");
    return false;
}

     else
     {
         alert("Successfully logged in");
         return false;
     }   
    
}
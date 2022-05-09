function logformvalidation()
{
    var logMail=document.getElementById("logInemail").value;
    if(logMail.length==0)
    {
       alert("Enter your mail");
       return false;
    }
var logInpass= document.getElementById("logpass").value;
if(logInpass.length==0)
{
    alert("no");
    return false;
}
     else
     {
         alert("Successfully logged in");
         return false;
     }   
    
}
function formvalidation(){
    

    //first name validation starts 

    var fname= document.getElementById("ifname").value;
    var fpattern = /[a-zA-Z._]/

                if (fname.length<=0)
                {
                    document.getElementById("errorInFirstName").innerHTML="form must filled up";
                    return false;
                }
                else if(!fname.match(fpattern))
                {
                    
                    document.getElementById("errorInFirstName").innerHTML="Only character is allowed";
                    
                    
                }
                else
                {
                    document.getElementById("errorInFirstName").innerHTML=" ";
                    
                    
                }


// first name validation ends


//last name validation starts 
// first name thakle last name er alert deyna vice versa

var lname= document.getElementById("ilname").value;
    var lpattern = /[a-zA-Z._]/

                if (lname.length<=0)
                {
                    document.getElementById("errorInLastName").innerHTML="form must filled up";
                    
                }
                else if(!lname.match(lpattern))
                {
                    
                    document.getElementById("errorInLastName").innerHTML="Only character is allowed";
                   
                    
                }
                else
                {
                    document.getElementById("errorInLastName").innerHTML=" ";
                    
                    
                }


// last name validation ends




//Password validation starts
var pass =document.getElementById("ipass").value;
var passPattern= /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*<>?+_-])) {8,20}/

if(!pass.match(passPattern))
                {
                    
                    document.getElementById("errorInPass").innerHTML="1 special character, 1 upper case, 1 lower case, 1 digit, at least 8 character";
                    
                    return false;
                }
                else
                {
                    document.getElementById("errorInPass").innerHTML=" ";
                    
                    
                }



//Password validation ends




  



}
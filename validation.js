function formvalidation() {


    //first name validation starts 

    var fname = document.getElementById("ifname").value;
    var fpattern = /[a-zA-Z._]/

    if (fname.length <= 0) {
        document.getElementById("errorInFirstName").innerHTML = "form must filled up";
        return false;
    } else if (!fname.match(fpattern)) {

        document.getElementById("errorInFirstName").innerHTML = "Only character is allowed";


    } else {
        document.getElementById("errorInFirstName").innerHTML = " ";


    }


    // first name validation ends


    //last name validation starts 
    
    var lname = document.getElementById("ilname").value;
    var lpattern = /[a-zA-Z._]/

    if (lname.length <= 0) {
        document.getElementById("errorInLastName").innerHTML = "Fill the form please";

    } else if (!lname.match(lpattern)) {

        document.getElementById("errorInLastName").innerHTML = "Only character is allowed";


    } else {
        document.getElementById("errorInLastName").innerHTML = " ";


    }


    // last name validation ends


     // mobile number validation starts


     var mobile = document.getElementById("imobile").value;
     var mobilePattern = /(\+88)?-?01[0-9]\d{8}/

     if (mobile.length <= 0) {
        document.getElementById("errorInMobile").innerHTML = "form must filled up";
        return false;
    } else if (!mobile.match(mobilePattern)) {

        document.getElementById("errorInMobile").innerHTML = "Only Local numbers allowed";


    } else {
        document.getElementById("errorInMobile").innerHTML = " ";


    }


  // mobile number validation ends




    //email validation starts



    var email = document.getElementById("iemail").value;
    var emailPattern = /(cse|eee|cee\law|eng|arch)_\d{10}@lus\.ac\.bd/

        if (email.length <= 0) {
                document.getElementById("errorInEmail").innerHTML = "Fill the form";
                return false;
            } else if (!email.match(emailPattern)) {

                document.getElementById("errorInEmail").innerHTML = "Enter instutional email";


            } else {
                document.getElementById("errorInEmail").innerHTML = " ";


            }


    //email validation ends





    //Password validation starts
    var pass = document.getElementById("ipass").value;
    var passPattern = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*<>?+_-])).{8,20}/


    if (pass.length <= 0) {
        document.getElementById("errorInPass").innerHTML = "Fill the form please";
        return false;

    } else if (!pass.match(passPattern)) {

        document.getElementById("errorInPass").innerHTML = " 1 upper case, 1 lower case, 1 digit , 1 special character, at least 8 character";

        return false; }


        //ei portion ta kaj kortese na 
     else {
        document.getElementById("errorInPass").innerHTML = " ";
        return false;


    }
 //Password validation ends



 // Confirm Password validation starts

        //ei portion ta kaj kortese na 

 var confirmPass = document.getElementById("icpass").value;
    var confirmPassPattern = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*<>?+_-])).{8,20}/


    if (confirmPass.length <= 0) {
        document.getElementById("errorInConfirmPass").innerHTML = "Retype password";
        return false;

    } else if (!confirmPass.match(confirmPassPattern)) {

        document.getElementById("errorInConfirmPass").innerHTML = " 1 upper case, 1 lower case, 1 digit , 1 special character, at least 8 character";

        return false; }


          // Confirm Password validation ends

       


    }











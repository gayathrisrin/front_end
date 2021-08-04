function show()
{
var name = document.getElementById("name").value;
var email=document.getElementById("email").value;
var mobile=document.getElementById("mobile").value;
var dob = document.getElementById("dob").value;
var gender = document.getElementById("gender").value;
    var idproof = document.getElementById("idproof").value;
    var address = document.getElementById("address").value;
    var dose=document.getElementById(dose).value;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if(dob == "") {
        printError("dobErr", "Please enter your dob");
    } else {
        var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if(regex.test(dob) === false) {
            printError("dobErr", "Please enter a valid  number");
        } else{
            printError("dobErr", "");
            mobileErr = false;
        }
    }
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    if(address == "") {
        printError("addressErr", "Please enter your address");
    } else {
        var regex =/^[a-zA-Z0-9\s\,\''\-]*$/;                
        if(regex.test(address) === false) {
            printError("addressErr", "Please enter a valid address");
        } else {
            printError("addressErr", "");
            addressErr = false;
        }
    }
    
    // Validate dose
    if(dose == "Select") {
        printError("doseErr", "Please select your dose");
    } else {
        printError("doseErr", "");
        doseErr = false;
    }
    
    
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr ||dobErr||genderErr||idproofErr||addressErr|| doseErr  ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "dob: " + dob + "\n" +
                          "Gender: " + gender + "\n"+
                          "idproof:"+idproof+"\n"+
                          "address: " + address + "\n" +
                          "dose: " + dose + "\n";
        
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
}

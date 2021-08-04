function show()
{
 var name=document.getElementById("name").value;
 var password=document.getElementById("password").value;
var regex=/^[a-zA-Z0-9]*$/;
if (name==null || name=="")
{
alert("Name can't be blank");
return false;
}
else if(password.length<6){
    alert ("matches");
}
}
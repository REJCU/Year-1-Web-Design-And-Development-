function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var date = (currentDateTime.getDate());
    var purpose = document.forms["myForm"]["purpose"].value;

    if (name == "") {
    alert("Name must be filled out");
    return false;
    }
    if (email == "") {
    alert("Email must be filled out");
    return false; 
    }
    if (phone == "") {
    alert("Phone must be filled out");
    return false;
    }
    if (date == "") {
    alert("Must enter booking date");
    return false
    } 
    if (purpose == "") {
    alert("Must enter purpose of visit");
    return false
    } 
 
}

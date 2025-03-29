function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var name = document.forms["myForm"]["lName"].value
    var email = document.forms["myForm"]["email"].value;
    if (name == "") {
    alert("Name must be filled out");
    return false;
    }
    if (email == "") {
    alert("Email must be filled out");
    return false;
}
} 
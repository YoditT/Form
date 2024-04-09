var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(phone){
    var phone = document.getElementById('contact-phone').value;
    var phonePattern = /^\d{3}[\s-]?\d{3}[\s-]?\d{3}$/;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
        // Regular expression pattern to match a typical phone number format  
        
        // Test if the provided phoneNumber matches the pattern
        if (phonePattern.test(phone)) {
          phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        } else {
            phoneError.innerHTML = 'Phone number is not valid';
            return false;
        }
       
    }
    
    // Example usage:
    // var phoneNumber = "+48 123-456-789";
    // if (validatePhone(phone)) {
    //     console.log("Phone number is valid.");
    // } else {
    //     console.log("Invalid phone number format.");
    // }
    
    // else if(phone.match(/^[A-Za-z]$/)){
    //     phoneError.innerHTML = 'Only digits please!';
    //     return false;
    // }

    // else if(phone.length !== 10){
    //     phoneError.innerHTML = 'number should 10 digits';
    //     return false;
    // }

    // phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // return true;


// function validatePhone(phone){
//     var phone = document.getElementById('contact-phone').value;

//     const mobilePhonePattern = /^(\+48\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}$/;
// }

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

} 

function validateMessage(){
    var message = document.getElementById('contact-message').value; 
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }

}

    
var phone = "1234567890";
console.log(phone.match(/^[0-9]{10}$/));  // Should output an array containing the matched string

var formfield = document.getElementById('formfield');

function add(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','text');
  newField.setAttribute('class','text');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Optional Field');
  formfield.appendChild(newField);
}

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

 function validateMobile() {
  var mobileInput = document.getElementById('mobile');
  var mobileNumber = mobileInput.value;
  var mobilePattern = /^\d{10}$/; // Regular expression for a 10-digit numeric value

  if (!mobilePattern.test(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    mobileInput.focus();
    return false;
  }

  return true;
}

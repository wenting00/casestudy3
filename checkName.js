document.write("script started executing!\n\n");

function chkName() {

// Get the target node of the name
  var myName = document.getElementById("myName");
  alert("name field:" + myName);

  var regexpName=/[A-Za-z -][^0-9]$/g;
  var testResult= regexpName.test(myName);
  return alert("testResult");


document.write("script finished executing!");

/*function  chkEmail(Email){
  //Get target node of the name 
  var regexp=/^ ([\W,-]@[\w\.-]){1,3}\.(\w{2,3})$/g;
  var pos2=regexp.test(Email);
  return (pos2!=0 ?true : false);
}

function chkDate(){

var today=new Date();
var day1=today.getDay();
var month1=today.getMonth();
var year1=today.getFullYear();

if (year2<year1)
{
  alert("Invalid available date.")
  return false;
}
else if (month2<month1)
{
  alert("Invalid available date.")
  return false;
}
else if (day2<day1)
{
  alert("Invalid available date.")
  return false;
}


} */






// ********************************************************** //
// The event handler function for the phone number text box
/*
function chkPhone(event) {

// Get the target node of the event

  var myPhone = event.currentTarget;

// Test the format of the input phone number
 
  var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);
 
  if (pos != 0)     alert("The phone number you entered (" + myPhone.value +
          ") is not in the correct form. \n" +
          "The correct form is: ddd-ddd-dddd \n" +
          "Please go back and fix your phone number");
    myPhone.focus();
    myPhone.select();
	return false;
  } */


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function validateform(){  
var firstname=document.myform.firstname.value;  
var lastname=document.myform.lastname.value;
var address=document.myform.address.value;
var telephonenumber=document.myform.telephonenumber.value;
      
if (firstname==null || firstname==""){  
alert("please enter you name");  
return false;
}
else if (lastname==null || lastname==""){  
alert("please enter you name");  
return false;
}  
else if (address==null || address==""){  
alert("please enter address");  
return false;
}
//detect empty field and prompt user to enter a value 
else if (isNaN(telephonenumber)){
document.getElementById("numloc2").innerHTML="Please enter number";
return false;
}
// the last field is numeric value.
}
//Pinyin name:Shenxinkai English name:Evan
//this javascript is for creating a html form of 3 text fields and 1 numeric field,Visitors can contact the company by registering their personal information and logging in to the mailbox to obtain more information. At the same time, the information registered by visitors is verified to help everyone interested in the company's business to contact normally.
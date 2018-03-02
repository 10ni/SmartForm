
document.getElementById("form").addEventListener("mouseleave", function(){
 	var regex = /^[a-zA-Z]+$/;
 	var name = document.getElementById("form").value;
 	if(regex.test(name) && name !=="" ){
 	 document.getElementById("form").style.borderColor="black";

	  document.getElementById("q2").style.visibility = "visible"; 
	  document.getElementById("in2").style.visibility = "visible";
    } 
  else{ 
	 document.getElementById("form").style.borderColor="red";
	 document.getElementById("form").value ="";
	
	 document.getElementById("q2").style.visibility = "hidden";
     document.getElementById("in2").style.visibility = "hidden";
} 

});

 document.getElementById("in2").addEventListener("mouseleave", function(){
    var age = document.getElementById("in2").value;
 	
    if(age !=="") {
    	document.getElementById("in2").style.borderColor="black";
    	if(age >= 11 && age <=24 ){
 	         document.getElementById("q31").style.visibility = "visible";
 	         document.getElementById("schin").style.visibility = "visible";

          } else if(age > 24 && age < 60){
           document.getElementById("q32").style.visibility = "visible";
           document.getElementById("q32in").style.visibility = "visible";
    }  else{
    	alert("you are not eligbile for the survey")
    }

  }
  else{ 
	 document.getElementById("in2").style.borderColor="red";
	 document.getElementById("in2").value ="";

	 document.getElementById("q31").style.visibility = "hidden";

	 document.getElementById("q32").style.visibility = "hidden"; 
	 document.getElementById("q32in").style.visibility = "hidden";
}    

});

 document.getElementById("schin").addEventListener("mouseleave", function(){
  var regex = /^[a-zA-Z]+$/;
   var school= document.getElementById("schin").value;
  if( regex.test(school) && school!=="" ){
   document.getElementById("schin").style.borderColor="black";

    document.getElementById("q4").style.visibility = "visible"; 
    document.getElementById("q4in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("schin").style.borderColor="red";
   document.getElementById("schin").value ="";
  
     document.getElementById("q4").style.visibility = "hidden";
     document.getElementById("q4in").style.visibility = "hidden";
} 

});

document.getElementById("q32in").addEventListener("mouseleave", function(){
   var regex = /^[a-zA-Z]+$/;
   var occupation= document.getElementById("q32in").value;
  if( regex.test(occupation) && occupation !=="" ){
   document.getElementById("q32in").style.borderColor="black";

    document.getElementById("q4").style.visibility = "visible"; 
    document.getElementById("q4in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q32in").style.borderColor="red";
   document.getElementById("q32in").value ="";
  
     document.getElementById("q4").style.visibility = "hidden";
     document.getElementById("q4in").style.visibility = "hidden";
} 

});


 document.getElementById("q4in").addEventListener("mouseleave", function(){
   var sex= document.getElementById("q4in").value;
  if( sex !=="" ){
   document.getElementById("q4in").style.borderColor="black";

    document.getElementById("q5").style.visibility = "visible"; 
    document.getElementById("q5in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q4in").style.borderColor="red";
   document.getElementById("q4in").value ="";
  
     document.getElementById("q5").style.visibility = "hidden";
     document.getElementById("q5in").style.visibility = "hidden";
}
}); 

document.getElementById("q5in").addEventListener("mouseleave", function(){
   var regex = /^([A-Za-z0-9_\.\-]){1,}\@([A-Za-z\.\-]){1,}\.([A-za-z]{2,4})$/;
   var email= document.getElementById("q5in").value;
  if( regex.test(email) &&  email !=="" ){
    document.getElementById("q5in").style.borderColor="black";
    
    document.getElementById("qsta").style.visibility = "visible"; 
    document.getElementById("q6in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q5in").style.borderColor="red";
   document.getElementById("q5in").value ="";
  
     document.getElementById("qsta").style.visibility = "hidden";
     document.getElementById("q6in").style.visibility = "hidden";
}
}); 

document.getElementById("q6in").addEventListener("mouseleave", function(){
   var status= document.getElementById("q6in").value;
  if( status !=="" ){
   document.getElementById("q6in").style.borderColor="black";

    document.getElementById("q7").style.visibility = "visible"; 
    document.getElementById("q7in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q6in").style.borderColor="red";
   document.getElementById("q6in").value ="";
  
     document.getElementById("q7").style.visibility = "hidden";
     document.getElementById("q7in").style.visibility = "hidden";
}
}); 

document.getElementById("q7in").addEventListener("mouseleave", function(){
    var reg = /^[0-9\+]+$/;
    var phoneno = document.getElementById("q7in").value;
  if( reg.test(phoneno) && phoneno!=="" ){
   document.getElementById("q7in").style.borderColor="black";

    document.getElementById("q8").style.visibility = "visible"; 
    document.getElementById("q8in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q7in").style.borderColor="red";
   document.getElementById("q7in").value ="";
  
     document.getElementById("q8").style.visibility = "hidden";
     document.getElementById("q8in").style.visibility = "hidden";
     }
}); 

document.getElementById("q8in").addEventListener("mouseleave", function(){
   var regex = /^[a-zA-Z]+$/;
   var add = document.getElementById("q8in").value;
  if( regex.test(add) && add !=="" ){
   document.getElementById("q8in").style.borderColor="black";

    document.getElementById("q9").style.visibility = "visible"; 
    document.getElementById("q9in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q8in").style.borderColor="red";
   document.getElementById("q8in").value ="";
  
     document.getElementById("q9").style.visibility = "hidden";
     document.getElementById("q9in").style.visibility = "hidden";
} 

});
document.getElementById("q9in").addEventListener("mouseleave", function(){
   var regex = /^[0-9a-zA-Z]+$/;
   var username= document.getElementById("q9in").value;
  if( regex.test(username) && username!=="" ){
   document.getElementById("q9in").style.borderColor="black";

    document.getElementById("q10").style.visibility = "visible"; 
    document.getElementById("q10in").style.visibility = "visible";
    } 
  else{ 
   document.getElementById("q9in").style.borderColor="red";
   document.getElementById("q9in").value ="";
  
     document.getElementById("q10").style.visibility = "hidden";
     document.getElementById("q10in").style.visibility = "hidden";
} 

});
document.getElementById("q10in").addEventListener("mouseleave", function(){
   var regex = /^[a-zA-Z]+$/;
   var abt = document.getElementById("q10in").value;
  if( regex.test(abt) && abt !=="" ){
   document.getElementById("q10in").style.borderColor="black";
    } 
  else{ 
   document.getElementById("q10in").style.borderColor="red";
   document.getElementById("q10in").value ="";
  
  }  

});
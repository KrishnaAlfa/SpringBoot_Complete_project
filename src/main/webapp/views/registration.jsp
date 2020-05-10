<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<title>User Registration Form</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

.capbox {
	background-color: #92D433;
	border: #B3E272 0px solid;
	border-width: 0px 12px 0px 0px;
	display: inline-block;
	*display: inline; zoom: 1; /* FOR IE7-8 */
	padding: 8px 40px 8px 8px;
	}

.capbox-inner {
	font: bold 11px arial, sans-serif;
	color: #000000;
	background-color: #DBF3BA;
	margin: 5px auto 0px auto;
	padding: 3px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	border-radius: 4px;
	}

#CaptchaDiv {
	font: bold 17px verdana, arial, sans-serif;
	font-style: italic;
	color: #000000;
	background-color: #FFFFFF;
	padding: 4px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	border-radius: 4px;
	}

#CaptchaInput { margin: 1px 0px 1px 0px; width: 135px; }




body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 200px;
  opacity: 0.9;
  margin-left: 500px;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}



</style>

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<script>
		function call(file) {
		        var ext = $('#fupload').val().split(".").pop().toLowerCase();
		        
		        if($.inArray(ext, ["pdf"]) == -1) {
		            file.value = "";
		           // alert("Only Pdf Allowed");
		            $("#errorpdf").html("Only Pdf Allowed!");
		            $("#fupload").focus();
		        }
		        
		        var fileSize=file.files[0].size / 1024 / 1024 ;
		        if(fileSize > 2){
	            	$("#errorpdf1").html("Not allow file size more than 2 MB!");
	            	$("#fupload").val("");
		            $("#fupload").focus();
	            }
		        
		        else{
		        	
		        }
		        
		    }
</script>

<script>
function validate()                                    
{ 
var phone =   document.getElementById("phone").value;
  
//alert("phone : "+phone);


// pan card validation client side 
var panVal = document.getElementById("pan").value;
var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
if(regpan.test(panVal)){
	//alert("yes: "+panVal);
	return true;
} else {
	//alert("no: "+panVal);
	alert("Please provide correct Pan format!");
	$("#pan").val('');
	return false;
}



}


function isChar(e)
{
    var regex = new RegExp("^[a-z A-Z]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    else
    {
    return false;
    }
}

function isChar1(e)
{
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    else
    {
    return false;
    }
}







</script>

<script>
$(document).ready(function() {
	  $("#datepicker").datepicker({dateFormat: 'dd/mm/yy'});
	  $('.fa-calendar').click(function() {
	    $("#datepicker").focus();
	  });
	});
</script>


</head>
<body background="green">
<br/>
 <form action="/logout" method="post">
     <input type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"/>
  <input type="submit" value="Logout" class="btn btn-danger" style="margin-left: 50px;">
</form>

<a href="/">
<button type="button" class="btn btn-info" style="float: right; margin-right: 100px">Home</button>
</a>
<form action="/regis/registration" method="post" enctype="multipart/form-data" onsubmit="return(validate())">
  <div class="container">
    <h1 style="text-align: center;"><u>User Registration Form</u></h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter name" name="name" required style="width: 400px" onkeypress="return isChar(event)">
    
    <br/>
    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter address" name="address" required style="width: 400px">

 <br/>
    <label for="designation"><b>Designation</b></label>
    <input type="text" placeholder="Enter designation" name="designation" required style="width: 400px">
    
    <br/>
    
    <label for="pan"><b><font color="blue">Pan Card</font></b></label>
    <input type="text" placeholder="Enter pan card" name="pan" id="pan" required style="width: 400px">
    <span>Example : AAAPL1234C</span>
    <br/>
    
  <label for="datepicker">Date of birth*</label>
  <input type="text" name='dob' style="width: 400px"   id="datepicker" placeholder="DD/MM/YYYY" >
  <span class="fa fa-calendar"></span>
    
    
     <br/>
    <label for="phone"><b>Phone</b></label>
    <input type="text" placeholder="Enter phone" name="phone" id="phone" required style="width: 400px" maxlength="10" onkeypress="return isChar1(event)">
    							
    							<br/>
    							<label for="bloodgroup"><b>Blood Group</b></label>
														
							<div class="select-one">
							<select name="bloodgroup" id="bloodgroup" required="required" class="form-control" style="width: 400px;">

												<option value="" class="form-control">---Select---</option>
					<option value="O−">O−</option>
					<option
						value="O+" 
						 >O+</option>
					<option
						value="A−"
						>A−</option>
					<option
						value="A+"
						>A+</option>
						
						<option
						value="B−"
						>B−</option>
						
						<option
						value="B+"
						>B+</option>
						
						<option
						value="AB−"
						>AB−</option>
						
						<option
						value="AB+"
						>AB+</option>
						
						</select>
						</div>
    
    <br/>
    <label for="file"><b>Upload Document<span><font color="red">*</font></span></b></label>
    <input type="file" name="files" id="fupload" required style="width: 400px" onchange="call(this)"/>
    <span><font color="blue"> (Only Pdf allow & Max size 2 MB)</font></span>
    <div id="errorpdf" style="color: red"></div>
    <div id="errorpdf1" style="color: red"></div>

    <br/>
    <br/>
    <label for="itemimage"><b>Image Doc<span><font color="red">*</font></span></b></label>
    <input type="file" name="files2" id="files2" required style="width: 400px" accept="image/png,image/jpeg"/>
   
   <input type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"/>
   
 <br/>
    <input type="submit" class="btn btn-primary" value="Register" style="margin-left: 500px">
    <input type="reset" value="Reset" class="btn btn-danger">
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
</body>

</html>

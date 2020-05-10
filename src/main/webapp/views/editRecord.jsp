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
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
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
#ft{
text-align: center;
margin-top: ;
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

body {
	background-image: url("/images/bkp.webp");
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

<a href="/regis/registration/">
<button type="button" class="btn btn-warning" style="margin-left: 90px">Registration</button>
</a>

<a href="/">
<button type="button" class="btn btn-info" style="float: right; margin-right: 100px">Home</button>
</a>
<form action="/regis/editByIdUpdate/${idBasedEmployee.id}" enctype="multipart/form-data" method="post">
  <div class="container">
    <h1 style="text-align: center;"><u>Edit Information</u></h1>
    
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter name" name="name" required style="width: 400px" value="${idBasedEmployee.name}">
    
    <br/>
    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter address" name="address" required style="width: 400px" value="${idBasedEmployee.address}">

 <br/>
    <label for="designation"><b>Designation</b></label>
    <input type="text" placeholder="Enter designation" name="designation" value="${idBasedEmployee.designation}" required style="width: 400px">
    
    
    <br/>
    <label for="pan"><b>Pan Card</b></label>
    <input type="text" placeholder="Enter pan card" name="pan" value="${idBasedEmployee.pan}" required style="width: 400px">
    
    
     <br/>
    <label for="phone"><b>Phone</b></label>
    <input type="text" placeholder="Enter phone" name="phone" required style="width: 400px" value="${idBasedEmployee.phone}" maxlength="10">
   <br/>
   
   
   <br/>
    							<label for="bloodgroup"><b>Blood Group</b></label>
														
							<div class="select-one">
							<select name="bloodgroup" id="bloodgroup" required="required" class="form-control" style="width: 400px;">

												<option value="" class="form-control">---Select---</option>
												
					<option value="O−" <c:if test="${'O−' eq idBasedEmployee.bloodgroup}">selected</c:if> > O−</option>
					
					<option 
						value="O+" <c:if test="${'O+' eq idBasedEmployee.bloodgroup}">selected</c:if>
						 >O+</option>
						 
					<option
						value="A−" <c:if test="${'A-' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>A−</option>
						
					<option
						value="A+" <c:if test="${'A+' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>A+</option>
						
						<option
						value="B−" <c:if test="${'B-' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>B−</option>
						
						<option
						value="B+" <c:if test="${'B+' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>B+</option>
						
						<option
						value="AB−" <c:if test="${'AB-' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>AB−</option>
						
						<option
						value="AB+" <c:if test="${'AB+' eq idBasedEmployee.bloodgroup}">selected</c:if>
						>AB+</option>
						
						</select>
						</div>
   
   <br/>
   
   <label for="datepicker">Date of birth</label>
  <input type="text" name='dob' style="width: 400px"   id="datepicker" placeholder="DD/MM/YYYY" value="<fmt:formatDate value="${idBasedEmployee.dob}" type="date" pattern="dd/MM/yyyy"/>">
  <span class="fa fa-calendar"></span>
   
   
   <br/>
    <label for="file"><b>Upload Document</b></label>
    <input type="file" name="files" id="file2"  style="width: 400px"/>
   <c:if test="${idBasedEmployee.supportivefile != null}">
 <a href="${pageContext.request.contextPath}/regis/supportiveDocument?fileName=${idBasedEmployee.supportivefile}" class="blueBdrBtn">Document</a>
 </c:if>
   
 <br/>
 
 
 <br/>
    <label for="itemimage"><b>Image Doc</b></label>
    <input type="file" name="files2" id="files2"  style="width: 400px" accept="image/png,image/jpeg"/>
    <c:if test="${ idBasedEmployee.itemimage   !=null}">
    <img
	src="data:image/jpeg;base64,${userImage}"
	width="200px" height="200px"
	alt="No Photo"
	title="" style="float: left;">
	</c:if>
    
 <br/>
 
 <input type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"/>
 
    <input type="submit" class="btn btn-primary" value="Update" style="margin-left: 500px">
   
    <a href="/regis/allRegistrationRecord">
<button type="button" class="btn btn-info" >Cancel</button>
</a>
  </div>
  
  
</form>
<hr/>
<div id="ft">
<footer>
<font color="blue">
© Copyright 2018-2019 <b><i>Krishna</i></b>, All rights reserved.
</font>
</footer>
</div>
</body>
</html>


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html lang="en">
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

#ft{
text-align: center;
margin-top: ;
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

body {
	background-image: url("/images/bkp.webp");
}

</style>

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<body>
<br/>
<a href="/regis/allRegistrationRecord">
<button type="button" class="btn btn-info" style="float: right; margin-right: 100px">Back to List</button>
</a>
<div class="container">
  <h1 style="text-align: center;"><u>User Information</u></h1> <br/><br/><br/>             
  <div class="container">
 
  <label for="name"><b>Name</b></label>
    <input type="text"  name="name" required style="width: 400px" value="${idBasedEmployee.name}" readonly>
 
  <label for="name"><b>Address</b></label>
    <input type="text"  name="name" required style="width: 400px" value="${idBasedEmployee.address}" readonly>
 <br/>
  <label for="name"><b>Designation</b></label>
    <input type="text"  name="name" required style="width: 400px" value="${idBasedEmployee.designation}" readonly>
 
  <label for="name"><b>Phone</b></label>
    <input type="text"  name="name" required style="width: 400px" value="${idBasedEmployee.phone}" readonly>
 
 <br/>
 <label for="dob"><b>DOB</b></label>
    <input type="text"  name="dob" required style="width: 400px" value="<fmt:formatDate value="${idBasedEmployee.dob}" type="date" pattern="dd/MM/yyyy"/>" readonly>
 
 <label for="pan"><b>Pan Card</b></label>
    <input type="text"  name="pan" required style="width: 400px" value="${idBasedEmployee.pan}" readonly>
 
 
 <br/>
 
 
 <label for="dob"><b>Blood Group</b></label>
    <input type="text"  name=bloodgroup required style="width: 400px" value="${idBasedEmployee.bloodgroup}" readonly>
 
 <br/>
 
  
  <c:if test="${idBasedEmployee.supportivefile != null}">
 <label for="name"><b>Supportive Document</b></label>
 <br/>
 <a href="${pageContext.request.contextPath}/regis/supportiveDocument?fileName=${idBasedEmployee.supportivefile}" class="blueBdrBtn">Document</a>
 </c:if>
 
 
  <br/><br/>
  
	<img
	src="data:image/jpeg;base64,${userImage}"
	width="200px" height="200px"
	alt="No Photo"
	title="" style="float: left;">
  
  
  </div>
  
  
  
  
  
</div>
<div id="ft">
<footer>
<font color="blue">
© Copyright 2018-2019 <b><i>Krishna</i></b>, All rights reserved.
</font>
</footer>
</div>
</body>
</html>


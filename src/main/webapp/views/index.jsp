<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <jsp:include page="bootstrap.jsp"></jsp:include>
<!DOCTYPE html>
<html>



<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<style>
body {background-color: coral;}

#ft{
text-align: center;
margin-top: ;
}

#fb {
text-align: center;
color: gray;

}

body {
	background-image: url("/images/bkp.webp");
}

</style>

</head>
<body bgcolor="yellow">
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand/logo -->
  <a class="navbar-brand" href="#">Cab Go</a>
  
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/regis/registration" target="_blank">Registration</a>
    </li>
    
    <li class="nav-item" style="margin-left: 40px;">
      <a class="nav-link" href="/regis/allRegistrationRecord" target="_blank">All Record</a>
    </li>
    <li class="nav-item" style="margin-left: 40px;">
      <a class="nav-link" href="/cap/caplogin" target="_blank">Recaptcha</a>
    </li>
    <li class="nav-item" style="margin-left: 40px;">
      <a class="nav-link" href="/cap/scheduler" target="_blank"><font color="pink"> Scheduler</font></a>
    </li>
    <li class="nav-item">
     <form action="/logout" method="post">
     <input type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"/>
  <input type="submit" value="Logout" class="btn btn-danger" style="float: right; margin-left: 900px;">
</form>
    </li>
  </ul>
</nav>


<h3 style="text-align: center;"> </h3>

<img alt="image" src="/images/cab.gif" height="300px" width="" style="margin-left: 360px">
<!--  <img alt="image" src="/images/welcome.jpg" height="300px" width="600px">
<br/><br/>
name :<input type="text" name="name" placeholder="Enter name">

<div class="container">
  
  <button type="button" class="btn btn-success">Success</button>
       
</div> -->

</body>
</html>
<div id="ft">
<%@ include file="footer.jsp" %> 
</div>
<br/>
<div id="fb">
** Visit us on Social Site **<br/>
<a href ="http://www.google.com" target="_blank"><font color="navy blue"><b><u>Google</u></b></font></a>
<br/>
<a href ="http://www.facebook.com" target="_blank"><font color="blue"><b><u>Facebook</u></b></font></a>
</div>
<br/><br/>
<a href ="/cap/capCalender" target="_blank"><font color="navy blue"><b><u>Calender Demo</u></b></font></a>

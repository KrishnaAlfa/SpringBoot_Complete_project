<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<html>

<head>



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<link rel="stylesheet"
  href="https://rawgit.com/Eonasdan/bootstrap-datetimepicker/master/build/css/bootstrap-datetimepicker.min.css">
<script src="https://rawgit.com/Eonasdan/bootstrap-datetimepicker/master/build/js/bootstrap-datetimepicker.min.js"></script>
</head>
<body>

<form action="/cap/capSaveTime" method="post">

<div class="container">
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" name="appTime" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
                
                <div>
                <span>Hobbies: </span>
                Cricket <input type="checkbox" value="Cricket" name="chk">
                Riding <input type="checkbox" value="Riding" name="chk">
                Swimming <input type="checkbox" value="Swimming" name="chk">
                </div>
                
            </div>
        </div>
    </div>
</div>
<input type="submit" value="Submit">
</form>

<br/><br/>
All Checkbox value :
<br/>
${key.size()}
<c:forEach items="${key}" var="employee">
         <c:out value="${employee}"/>
    </c:forEach>   
    
</body>

<script type="text/javascript">
$('#datetimepicker1').datetimepicker({
     defaultDate: new Date(),
    format: 'H:mm:ss',
   
});
</script>
</html>
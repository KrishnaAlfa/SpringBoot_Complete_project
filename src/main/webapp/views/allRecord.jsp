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
<style>
#ft{
text-align: center;
margin-top: ;
}
body {
	background-image: url("/images/bkp.webp");
}

tfoot input {
        width: 100%;
        padding: 3px;
        box-sizing: border-box;
    }


#clr{
color: navy blue;
text-align: center;
font-size: 20px;
}
</style>
  <title>All Employee Record</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>

</head>
<body>
<br/>

<form action="/logout" method="post">
     <input type="hidden"
            name="${_csrf.parameterName}"
            value="${_csrf.token}"/>
  <input type="submit" value="Logout" class="btn btn-danger" style="margin-right: 50px; float: right">
</form>

<a href="/regis/registration/">
<button type="button" class="btn btn-warning" style="margin-left: 50px">Registration</button>
</a>

<a href="/">
<button type="button" class="btn btn-info" style="float: right; margin-right: 100px">Home</button>
</a>
<div class="container">

  <h1 style="text-align: center;"><u>User Information List</u></h1> <br/><br/><br/>           
  <!-- <table class="table table-striped"> -->
  <div id="clr">
  ${successfuldelete}
  
  </div>
  
  
  <button type="button" onclick="exportTableToExcel('example', 'user-information')" class="btn btn-primary" style="float: right; margin-right: 100px">Export Data in Excel</button>
  
    <table id="example" class="table table-striped" style="width:100%">
    <thead>
      <tr>
        <th><font color="blue">Sr. No.</font></th>
        <th><font color="blue">Name</font></th>
        <th><font color="blue">Address</font></th>
        <th><font color="blue">Designation</font></th>
        <th><font color="blue">DOB</font></th>
        <th><font color="blue">Blood Group</font></th>
        <th><font color="blue">Phone No</font></th>
        <th><font color="blue" style="width: 100px;">Action</font></th>
        <th><font color="blue">Download</font></th>
        <th><font color="blue">Supportive Document</font></th>
        <th><font color="blue">Image File</font></th>
        
      </tr>
    </thead>
    <tbody>
    
      <c:forEach items="${list}" var="emp" varStatus="counter">
      <tr>
<td>${counter.count}</td>
<td>${emp.name}</td>
<td>${emp.address}</td>
<td>${emp.designation}</td>
<td>

<fmt:formatDate value="${emp.dob}" type="date" pattern="dd/MM/yyyy"/>

</td>
<td>
${emp.bloodgroup}
</td>
<td>${emp.phone}</td>
<td style="width: 100px;">

<a class="nav-link" href="/regis/recordById/${emp.id}"><i class="fa fa-eye" title="View"></i></a>&nbsp;&nbsp;
<a class="nav-link" href="/regis/editById/${emp.id}"><i class="fa fa-edit" title="Edit"></i></a>&nbsp;&nbsp;

     <%--  <a class="nav-link" href="/regis/registrationDelete/${emp.id}">
      <i class="fa fa-trash-o" title="Delete"></i></a> --%>
      
      <a href="#" onclick="checkDelete('Delete',${counter.count-1},${emp.id})">
      <i class="fa fa-trash-o" title="Delete"></i>
      </a>
      
       <a href="<c:url value='${pageContext.request.contextPath}/regis/registrationDelete/${emp.id}' />"
       class="nav-link" title="Delete" id="closefileid${counter.count-1}"></a>

</td>
<td>
<a class="nav-link" href="/regis/download/${emp.id}">Download</a>
</td>

<td>
<c:if test="${emp.supportivefile != null}">
<a href="${pageContext.request.contextPath}/regis/supportiveDocument?fileName=${emp.supportivefile}" class="blueBdrBtn">Document</a>
</c:if>
</td>

<td>

<img
	src="data:image/jpeg;base64,${emp.itemimage}"
	width="200px" height="110px"
	alt="No Photo"
	title="${emp.name} profile picture">

</td>


</tr>
</c:forEach>
      
      
      
    </tbody>
    <tfoot>
            <tr>
               <th><font color="blue">Sr. No.</font></th>
        <th><font color="blue">Name</font></th>
        <th><font color="blue">Address</font></th>
        <th><font color="blue">Designation</font></th>
        <th><font color="blue">DOB</font></th>
        <th><font color="blue">Blood Group</font></th>
        <th><font color="blue">Phone No</font></th>
        <th><font color="blue">Action</font></th>
        <th><font color="blue">Download</font></th>
        <th><font color="blue">Supportive Document</font></th>
        <th><font color="blue">Image File</font></th>
        
            </tr>
        </tfoot>
    
  </table>
</div>
</body>
</html>
<div id="ft">
<jsp:include page="footer.jsp" />
<marquee behavior="alternate">
<b><font color="orange">Powered By :</font> <font color="red">Krishna</font></b>
</marquee>
</div>
<script>
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change clear', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
</script>

<script>
function exportTableToExcel(example, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(example);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}
</script>

<script>
function checkDelete(value,count,id){
	var trueFlag=confirm("Are you sure want to delete!");
	
	if(trueFlag == true){
		
		if(value == "Delete"){
			window.location.href='${pageContext.request.contextPath}/regis/registrationDelete/'+id;
		}
		return true;
	}
}

</script>

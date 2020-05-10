function saveEmployeePreviousPosting() {	
	
	$("div#errMsg").html("");
	
	
	var designation= $('#preDesignation').val();
    var level=$('#level').val();
    var prePostLocation=$('#prePostLocation').val();
    var toDate= $("#toDate").datepicker('getDate');
    var fromDate= $("#fromDate").datepicker('getDate');
    var place= $('#prePostPlace').val();
    var empId=  $('#empId').val();
   
    if((designation!='' && designation!=null) && (level!='' && level!=null)  && (prePostLocation!='' && prePostLocation!=null) && (place!='' && place!=null))
	{
	
	}
else
	{
	$("div#errMsg").css("color", "red");
    $("div#errMsg").html("Please Fill All the mandotory fields*!!!!");
		return false;
	}
	
	
	
    $.ajax({
        url: "/eASI/hrms/previousPosting",
        type: "post",
        data: employeePreviousPostingJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
            $("#preDesignation").val(""); 
            $("#level").val(""); 
            $("#fromDate").val(""); 
            $("#toDate").val(""); 
            $("#prePostLocation").val(""); 
            $("#prePostPlace").val(""); 
            
            populateEducationTable();
           
        },
        error: function(xhr, status, error) {
        	}
    });
}



function populateEducationTable() {
	var empId= $('#empId').val()
	
    $.ajax({
        url: "/eASI/hrms/getAllEmployeePeviousPostingByEmpId/" + empId,
        type: "get",
        success: function(data){
            var previousPostingList = data.payload;
            $('#pagePreviousPostingTable td').remove();
            console.log(previousPostingList);
            $(function() {
        	    $.each(previousPostingList, function (index) {
        		var previousPosting = previousPostingList[index]
        		console.log(previousPosting);
                var $tr = $('<tr>').append(
                    $('<td>').text(previousPosting.preDesignation),
                    $('<td>').text(previousPosting.level),
                    $('<td>').text(dateFormated(previousPosting.fromDate)),
                  
                $('<td>').text(dateFormated(previousPosting.toDate)),
                $('<td>').text(previousPosting.prePostLocation),
                    $('<td>').text(previousPosting.prePostPlace),
                
           
 $('<td>').html("<a href='#' onclick=openalert('"+previousPosting.id+"')><i class='fa fa-trash'></i></a>")        
                   ).appendTo('#pagePreviousPostingTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	 // alert(xhr.responseText);
      	}
    });
}


function dateFormated(timeInMillis){
	
	if(timeInMillis!=null && timeInMillis!=''){
    var date = new Date(timeInMillis);
	var formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();
}
	return formatedDate;	
 }
function employeePreviousPostingJsonOnAdd() {
	
	var json = JSON.stringify({
        "preDesignation": $('#preDesignation').val(),
        "level": $('#level').val(),
        "prePostLocation": $('#prePostLocation').val(),
        "fromDate": $("#fromDate").datepicker('getDate'),   
        "toDate": $("#toDate").datepicker('getDate'),  
        "prePostPlace": $('#prePostPlace').val(),
        "empId": $('#empId').val()
    });
	
	return json;
}




function openalert(id) {
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteEmployeePreviousPostingByEduId(id) }             
        }
    });	

}

function deleteEmployeePreviousPostingByEduId(id) { 
	
    $.ajax({
        url: "/eASI/hrms/deleteEmployeePreviousPostingByEduId/" + id,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		
            populateEducationTable();
           },
           error: function(xhr, status, error) {
          // 	  alert(xhr.responseText);
           }
    });

}
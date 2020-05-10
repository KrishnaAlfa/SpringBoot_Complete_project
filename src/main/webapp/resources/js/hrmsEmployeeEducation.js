function validateForm(){	
	 var validator = $("#educationForm").validate({
			rules:{
					board: "required",
					examination: "required",
					description: "required",
					startYear: "required",
					endYear:"required",
					cgpa:"required",
					percentCgpaId:"required",
					specialization:"required"
				},
		   messages:{
					board: "board required",
					examination: "examination required",
					description: "description required",
					startYear: "start year required",
					endYear:"end year required",
					cgpa:"cgpa required",
					percentCgpaId:"percent/CGPA required",
					specialization:"specialization required"
			 }
	});
	  return validator;
}
	 
function validateEndDate(){
	var startDate = $("#startYear").datepicker('getDate');
	var endDate = $("#endYear").datepicker('getDate');  	
	  if(endDate < startDate) {
		  alert('Error : startDate > endDate ');  
		   return false;
	 }	
	  return true;
}

function resetForm(){
	$('#educationForm')[0].reset();
		$("#saveButton").show();
		$("#editButton").hide();
}

function saveEducation() {	
	
	$("div#errMsg").html("");
	
	
	var board= $('#board').val();
    var examination=$('#examination').val();
    var description= $('#description').val();
    var startYear= $("#startYear").datepicker('getDate');
    var endYear= $("#endYear").datepicker('getDate');
    var cgpa= $('#cgpa').val();
    var percentCgpaId = $("input[name='percentCgpaId']:checked").val(); 
     
	
	if((board!='' && board!=null) && (examination!='' && examination!=null)  && (endYear!='' && endYear!=null) && (cgpa!='' && cgpa!=null))
		{
		
		}
	else
		{
		$("div#errMsg").css("color", "red");
        $("div#errMsg").html("Please Fill All the mandotory fields*!!!!");
			return false;
		}
	
	var empId=  $('#empId').val();
    $.ajax({
        url: "/eASI/hrms/education/add",
        type: "post",
        data: educationJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            $("input[type=text]").val("");
			$("#examination")[0].selectedIndex = 0;
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateEducationTable();
        },
        error: function(xhr, status, error) {
        	}
    });
}

function editEducation() {	
	
   /* var validator = validateForm();
    
    if(validator.form() && validateEndDate()){ */
    $.ajax({
        url: "/eASI/hrms/education/edit",
        type: "put",
        data: educationJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            $("input[type=text]").val("");
			$("#examination")[0].selectedIndex = 0;
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateEducationTable();
        },
        error: function(xhr, status, error) {
        	//  alert(xhr.responseText);
        	}
    });
  
}

	
function educationJsonOnAdd() {
	
	var json = JSON.stringify({
        "board": $('#board').val(),
        "examination": $('#examination').val(),
        "description": $('#description').val(),
        "startYear": $("#startYear").datepicker('getDate'),   
        "endYear": $("#endYear").datepicker('getDate'),  
        "cgpa": $('#cgpa').val(),
        "percentCgpaId": $("input[name='percentCgpaId']:checked").val(),
        "specialization": $('#specialization').val(),
        "empId": $('#empId').val()
    });
	
	return json;
}


function educationJsonOnEdit() {
	var json = JSON.stringify({
		"eduId": $('#eduId').val(),
		"employeeId": $('#empId').val(),
        "board": $('#board').val(),
        "examination": $('#examination').val(),
        "description": $('#description').val(),
        "startYear": $("#startYear").datepicker('getDate'),   
        "endYear": $("#endYear").datepicker('getDate'),  
        "cgpa": $('#cgpa').val(),
        "percentCgpaId": $("input[name='percentCgpaId']:checked").val(),
        "specialization": $('#specialization').val()
    });
	
	// alert(json);
	return json;
}


/*
 * Populating Education in Table Format
 */
function populateEducationTable() {
	var empId= $('#empId').val()
	
    $.ajax({
        url: "/eASI/hrms/education/getEmployeeEducationByEmpId/" + empId,
        type: "get",
        success: function(data){
            var educationList = data.payload;
            $('#pageEducationTable td').remove();
            console.log(educationList);
            $(function() {
        	    $.each(educationList, function (index) {
        		var education = educationList[index]
        		console.log(education);
        		var perCg;
        		if(education.percentCgpaId == 1)
        			perCg = "%";
        		if(education.percentCgpaId == 2)
        			perCg = " CGPA";
        			
                var $tr = $('<tr>').append(
                    $('<td>').text(education.description),
                    $('<td>').text(education.board),
                    $('<td>').text(dateFormated(education.startYear)),
                    $('<td>').text(dateFormated(education.endYear)),
                    $('<td>').text(education.cgpa + perCg),
                    
                    
                    $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editFormPopulate('"+education.eduId+"')><i class='fa fa-pencil' aria-hidden='true'></i></a><br> <a href='#' onclick=openalert('"+education.eduId+"')><i class='fa fa-trash'></i></a>")
                   /* $('<td>').html("<a href='#' onclick=openalert('"+education.eduId+"')><i class='fa fa-trash'></i></a>")*/
                                      ).appendTo('#pageEducationTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	 
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


function editFormPopulate(eduId){	
    $.ajax({
        url: "/eASI/hrms/education/getEmployeeEducationById/" + eduId,
        type: "get",
        contentType: "application/json",
        success: function(data){
            console.log("success");
            $("input[type=text]").val("");
			$("#examination")[0].selectedIndex = 0;
	   		$("#saveButton").hide();
			$("#editButton").show();
            populateEducationTable();
            var education = data.payload;
            
            $('#eduId').val(education.eduId);
            $('#employeeId').val(education.employeeId);
            $('#board').val(education.board);
            $('#examination').val(education.examination);
            $('#description').val(education.description);
            $('#startYear').datepicker('setDate', dateFormated(education.startYear));
            $('#endYear').datepicker('setDate', dateFormated(education.endYear));
            $('#cgpa').val(education.cgpa);
            var id11 = education.percentCgpaId;            
            
            $('#radio1').prop('checked', false);
            $('#radio2').prop('checked', false);
            
            if(id11 == 1)
            	$('#radio1').prop("checked", true); 
            if(id11 == 2)
            	$('#radio2').prop("checked", true);        
                      
            $('#specialization').val(education.specialization);

/*            $('#percentCgpaId').listview(); // initialize
            $('#percentCgpaId').listview('refresh'); */
           },
           error: function(xhr, status, error) {
           	  //alert(xhr.responseText);
           }
    });
  
}

function viewFormPopulate(eduId){	
    $.ajax({
        url: "/eASI/hrms/education/getEmployeeEducationById/" + eduId,
        type: "get",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		$("#saveButton").hide();
			$("#editButton").hide();
            populateEducationTable();
            var education = data.payload;
            
            $('#eduId').val(education.eduId);
            $('#employeeId').val(education.employeeId);
            $('#board').val(education.board);
            $('#examination').val(education.examination);
            $('#description').val(education.description);
            $('#startYear').datepicker('setDate', dateFormated(education.startYear));
            $('#endYear').datepicker('setDate', dateFormated(education.endYear));
            $('#cgpa').val(education.cgpa);
            $('#specialization').val(education.specialization);
            
           },
           error: function(xhr, status, error) {
           	  //alert(xhr.responseText);
           }
    });
}


function deleteEmployeeEducationByEduId(eduId) { 
	
	    $.ajax({
	        url: "/eASI/hrms/education/deleteEmployeeEducationByEduId/" + eduId,
	        type: "delete",
	        contentType: "application/json",
	        success: function(data){
	            console.log("success");
		   		$("#saveButton").show();
				$("#editButton").hide();
				$("input[type=text]").val("");
				$("#examination")[0].selectedIndex = 0;
	            populateEducationTable();
	           },
	           error: function(xhr, status, error) {
	          // 	  alert(xhr.responseText);
	           }
	    });
	
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
            	deleteEmployeeEducationByEduId(id) }             
        }
    });	

}
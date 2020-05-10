function validateForm(){	
	 var validator = $("#advocateForm").validate({
			rules:{
					name: "required",
					advocateCode: "required",
					pinCode: "required",
					startYear: "required",
					endYear:"required",
					address:"required",
					mobileNumber:"required"
				},
		   messages:{
			   name: "name required",
			   advocateCode: "advocateCode required",
			   pinCode: "pinCode required",
					startYear: "start year required",
					endYear:"end year required",
					address:"address required",
					mobileNumber:"mobileNumber required"
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
	$('#advocateForm')[0].reset();
		$("#saveButton").show();
		$("#editButton").hide();
}

function saveAdvocate() {	
    var validator = validateForm();     
    
    if(validator.form() && validateEndDate()){ 
    $.ajax({
        url: "/eASI/courtcase/advocateDetails/add",
        type: "post",
        data: advocateJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            $('#advocateForm')[0].reset();
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateAdvocateTable();
        },
        error: function(xhr, status, error) {
        	  alert(xhr.responseText);
        	}
    });
 }
}

function editAdvocate() {	
    var validator = validateForm();
    
    if(validator.form() && validateEndDate()){ 
    $.ajax({
        url: "/eASI/courtcase/advocateDetails/edit",
        type: "put",
        data: advocateJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            $('#advocateForm')[0].reset();
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateAdvocateTable();
        },
        error: function(xhr, status, error) {
        	  alert(xhr.responseText);
        	}
    });
 } 
}

	
function advocateJsonOnAdd() {
	var json = JSON.stringify({
        "name": $('#name').val(),
        "advocateCode": $('#advocateCode').val(),
        "pinCode": $('#pinCode').val(),
        "startYear": $("#startYear").datepicker('getDate'),   
        "endYear": $("#endYear").datepicker('getDate'),  
        "address": $('#address').val(),
        "mobileNumber": $('#mobileNumber').val()
    });
	
	// alert(json);
	return json;
}


function advocateJsonOnEdit() {
	var json = JSON.stringify({
		"aduId": $('#aduId').val(),
		"advocateId": $('#advocateId').val(),
        "name": $('#name').val(),
        "advocateCode": $('#advocateCode').val(),
        "pinCode": $('#pinCode').val(),
        "startYear": $("#startYear").datepicker('getDate'),   
        "endYear": $("#endYear").datepicker('getDate'),  
        "address": $('#address').val(),
        "mobileNumber": $('#mobileNumber').val()
    });
	
	// alert(json);
	return json;
}


/*
 * Populating Education in Table Format
 */
function populateAdvocateTable() {
    $.ajax({
        url: "/eASI/courtcase/advocateDetails/getAllAdvocatDetails",
        type: "get",
        success: function(data){
            var advocateList = data.payload;
            $('#pageAdvocateTable td').remove();
            console.log(advocateList);
            $(function() {
        	    $.each(advocateList, function (index) {
        		var advocate = advocateList[index]
        		console.log(advocate);
                var $tr = $('<tr>').append(
                    $('<td>').text(advocate.advocateCode),
                    $('<td>').text(advocate.pinCode),
                    $('<td>').text(dateFormated(advocate.startYear)),
                    $('<td>').text(dateFormated(advocate.endYear)),
                    $('<td>').text(advocate.address),
                    
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editFormPopulate('"+advocate.aduId+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalert('"+advocate.aduId+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#pageAdvocateTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	  alert(xhr.responseText);
      	}
    });
}


function dateFormated(timeInMillis){
    var date = new Date(timeInMillis);
	var formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();	
	return formatedDate;	
 }


function editFormPopulate(aduId){	
    $.ajax({
        url: "/eASI/courtcase/advocateDetails/getAdvocatDetailsById/" + aduId,
        type: "get",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		$("#saveButton").hide();
			$("#editButton").show();
            populateAdvocateTable();
            var advocate = data.payload;
            
            $('#aduId').val(advocate.aduId);
            $('#advocateId').val(advocate.advocateId);
            $('#name').val(advocate.name);
            $('#advocateCode').val(advocate.advocateCode);
            $('#description').val(advocate.description);
            $('#startYear').datepicker('setDate', dateFormated(advocate.startYear));
            $('#endYear').datepicker('setDate', dateFormated(advocate.endYear));
            $('#address').val(advocate.address);
            $('#mobileNumber').val(advocate.mobileNumber);
            
           },
           error: function(xhr, status, error) {
           	  alert(xhr.responseText);
           }
    });
}


function deleteAdvocateDetailsByaduId(aduId) { 
	    $.ajax({
	        url: "/eASI/courtcase/advocateDetails/deleteAdvocateDetailsByaduId/" + aduId,
	        type: "delete",
	        contentType: "application/json",
	        success: function(data){
	            console.log("success");
		   		$("#saveButton").show();
				$("#editButton").hide();
				$('#advocateForm')[0].reset();
	            populateAdvocateTable();
	           },
	           error: function(xhr, status, error) {
	           	  alert(xhr.responseText);
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
            	deleteAdvocateDetailsByaduId(id) }             
        }
    });	

}
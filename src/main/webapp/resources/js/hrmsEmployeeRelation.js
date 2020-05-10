
function validateForm(){	
	var validator = $("#relationForm").validate({
		rules:{
			relativeTitle: "required",
			relativeFname: "required",
			relativeMname: "required",
			relativeLname:"required",

		},
		messages:{
			relativeTitle: "relative title required",
			relativeFname: "relativeFname required",
			relativeMname: "relativeMname required",
			relativeLname: "relativeLname required",

		}
	});
	return validator;
}



function resetForm(){
	var validator = validateForm();  
	validator.resetForm();

	$('#relationForm')[0].reset();
	$("#saveButton").show();
	$("#editButton").hide();
}

function saveRelation() {

	$("div#errMsg").html("");


	var relativeTitle= $('#relativeTitle').val();
	var relativeFname= $('#relativeFname').val();
	var relativeLname= $('#relativeLname').val();
	var relativeMobile= $('#relativeMobile').val();
	
	var relationWithRelative=$('#relationWithRelative').val();
	var relativeNationality=$('#relativeNationality').val();
	var relativeMaritalStatus=$('#relativeMaritalStatus').val();
	var relativeOccupation=$('#relativeOccupation').val();
	
	if((relativeFname!='' && relativeFname!=null) && (relativeTitle!='' && relativeTitle!=null) && (relativeLname!='' && relativeLname!=null) && (relativeMobile!='' && relativeMobile!=null) && (relationWithRelative!='' && relationWithRelative!=null) && (relativeNationality!='' && relativeNationality!=null) && (relativeMaritalStatus!='' && relativeMaritalStatus!=null) && (relativeOccupation!='' && relativeOccupation!=null))
	{

	}
	else
	{
		$("div#errMsg").css("color", "red");
		$("div#errMsg").html("Please Fill All the mandotory fields*!!!!");
		return false;
	}

	$.ajax({
		url: "/eASI/hrms/add1",
		type: "post",
		data: relationJsonOnAdd(),
		contentType: "application/json",
		success: function (data) {
			console.log("success");
			 $("input[type=text]").val("");
			 $("input[type=email]").val("");
			   $('input:checkbox').removeAttr('checked');
			   
				   $("#relativeTitle")[0].selectedIndex = 0;
				   $("#relativeOccupation")[0].selectedIndex = 0;
				   $("#relativeMaritalStatus")[0].selectedIndex = 0;
				   $("#relationWithRelative")[0].selectedIndex = 0;
				   $("#relativeNationality")[0].selectedIndex = 0;
				   $("#applicantstate2")[0].selectedIndex = 0;
				   $("#applicantdistrict2")[0].selectedIndex = 0;
				   
				   $("#applicantcity2")[0].selectedIndex = 0;
				   
				   
					
					
			$("#saveButton").show();
			$("#editButton").hide();
			populateRelationTable();
		},
		error: function(xhr, status, error) {
			// alert(xhr.responseText);
		}
	});
}
/*}*/

function editRelation() {	
	
	/* var validator = validateForm();

   if(validator.form()){*/ 

	$.ajax({
		url: "/eASI/hrms/edit",
		type: "put",
		data: relationJsonOnEdit(),
		contentType: "application/json",
		success: function (data) {
			
			
			 $("input[type=text]").val("");
			 $("input[type=email]").val("");
			   $('input:checkbox').removeAttr('checked');
			   
				   $("#relativeTitle")[0].selectedIndex = 0;
				   $("#relativeOccupation")[0].selectedIndex = 0;
				   $("#relativeMaritalStatus")[0].selectedIndex = 0;
				   $("#relationWithRelative")[0].selectedIndex = 0;
				   $("#relativeNationality")[0].selectedIndex = 0;
				   $("#applicantstate2")[0].selectedIndex = 0;
				   $("#applicantdistrict2")[0].selectedIndex = 0;
				   
				   $("#applicantcity2")[0].selectedIndex = 0;
				   
				
			$("#saveButton").show();
			$("#editButton").hide();
			populateRelationTable();
		},
		error: function(xhr, status, error) {

		}
	});
	/* } */
}


function relationJsonOnAdd() {


	if($('#isResidingWith').is(":checked"))
		var bool1="true";
	else
		var bool1="false";




	if($('#isDependent').is(":checked"))
		var bool2="true";
	else
		var bool2="false";

	if($('#isNominee').is(":checked"))

		var bool4="true";
	else
		var bool4="false";

	if($('#emergencyContact').is(":checked"))

		var bool5="true";
	else
		var bool5="false";
	
	if($('#isPhysicallyDisabled').is(":checked"))

		var bool6="true";
	else
		var bool6="false";



	var json = JSON.stringify({
		"employeeId": $('#employeeId').val(),
		"relativeTitle": $('#relativeTitle').val(),
		"relativeFname": $('#relativeFname').val(),
		"relativeMname": $('#relativeMname').val(),
		"relativeLname": $("#relativeLname").val(),
		"relativeEmail": $('#relativeEmail').val(),
		"relativeDob": $('#datepicker2').datepicker('getDate'),


		"relativeMobile": $('#relativeMobile').val(),
		"relativeOccupation": $("#relativeOccupation").val(),
		"relativeMaritalStatus": $('#relativeMaritalStatus').val(),
		"relationWithRelative": $('#relationWithRelative').val(),
		"relativeNationality": $('#relativeNationality').val(),
		"address1": $('#address1').val(),
		"address2": $('#address2').val(),
		 "state": $('#applicantstate2').val(),
        "district": $("#applicantdistrict2").val(),
        "city": $("#applicantcity2").val(),
		"isResidingWith": bool1,
		"isDependent": bool2,
		"isNominee": bool4,
		"emergencyContact": bool5,
		"isPhysicallyDisabled": bool6,

		"gpf": $('#gpf').val(),
		"utegis": $('#utegis').val(),
		"pensionAndGratuity": $('#pensionAndGratuity').val(),
		"leaveInCash": $("#leaveInCash").val(),
		"employeeId":$("#empId").val()





	});

	return json;
}


function relationJsonOnEdit() {
	

	if($('#isResidingWith').is(":checked"))
		var bool1="true";
	else
		var bool1="false";




	if($('#isDependent').is(":checked"))
		var bool2="true";
	else
		var bool2="false";

	if($('#isNominee').is(":checked"))

		var bool4="true";
	else
		var bool4="false";

	if($('#emergencyContact').is(":checked"))

		var bool5="true";
	else
		var bool5="false";
	
	if($('#isPhysicallyDisabled').is(":checked"))

		var bool6="true";
	else
		var bool6="false";
	var json = JSON.stringify({
		"erId": $('#erId').val(),
		"employeeId": $('#empId').val(),

		"relativeTitle": $('#relativeTitle').val(),
		"relativeFname": $('#relativeFname').val(),
		"relativeMname": $('#relativeMname').val(),
		"relativeLname": $("#relativeLname").val(),
		"relativeEmail": $('#relativeEmail').val(),
		"relativeDob": $('#datepicker2').datepicker('getDate'),


		"relativeMobile": $('#relativeMobile').val(),
		"relativeOccupation": $("#relativeOccupation").val(),
		"relativeMaritalStatus": $('#relativeMaritalStatus').val(),
		"relationWithRelative": $('#relationWithRelative').val(),
		"relativeNationality": $('#relativeNationality').val(),
		"address1": $('#address1').val(),
		"address2": $('#address2').val(),
		
		 "state": $('#applicantstate2').val(),
	        "district": $("#applicantdistrict2").val(),
	        "city": $("#applicantcity2").val(),
		
		"isResidingWith": bool1,
		"isDependent": bool2,
		"isNominee": bool4,
		"emergencyContact": bool5,
		"isPhysicallyDisabled": bool6,

		"gpf": $('#gpf').val(),
		"utegis": $('#utegis').val(),
		"pensionAndGratuity": $('#pensionAndGratuity').val(),
		"leaveInCash": $("#leaveInCash").val(),
	});

	return json;
}


/*
 * Populating Relation in Table Format
 */
function populateRelationTable() {

	var empId= $('#empId').val();
	$.ajax({
		url: "/eASI/hrms/getAllEmployeeRelationBasedOnEmpId/" + empId ,
		type: "get",
		success: function(data){
			var relationList = data.payload;
			$('#pageRelationTable td').remove();
			console.log(relationList);
			$(function() {
				$.each(relationList, function (index) {
					var relation = relationList[index]
					console.log(relation);
					console.log("relation : "+Object.values(relation));
					//alert("relation.isPhysicallyDisabled : "+relation.isPhysicallyDisabled);
					var isResWith, isDep, isNom, isPhysical ;
					if(relation.isResidingWith == true)
						isResWith = 'Yes';
					else
						isResWith = 'No';
					
					if(relation.isDependent == true)
						isDep = 'Yes';
					else
						isDep = 'No';					
					
					if(relation.isNominee == true)
						isNom = 'Yes';
					else
						isNom = 'No';					
					if(relation.isPhysicallyDisabled==true)
						isPhysical = 'Yes';
					else
						isPhysical = 'No';	
	
					var $tr = $('<tr>').append(
							$('<td>').text(relation.relativeFname +' '+relation.relativeMname+' '+relation.relativeLname),
							$('<td>').text(relation.relationWithRelative),
							$('<td>').text(relation.relativeMobile),
							$('<td>').text(relation.relativeNationality),
							$('<td>').text(isResWith),
							$('<td>').text(isDep),
							$('<td>').text(isPhysical),
							$('<td>').text(isNom),
							
							/* $('<td>').text(""),
                    $('<td>').text(""),
                    $('<td>').text(""),*/

							
							$('<td>').html("<a  class='tooltip-top' data-tooltip='Edit' onclick=editFormPopulate('"+relation.erId+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
                    $('<td>').html("<a onclick=openalert('"+relation.erId+"')><i class='fa fa-trash'></i></a>")
					).appendTo('#pageRelationTable');

				});
			});
		},
		error: function(xhr, status, error) {
			// alert(xhr.responseText);
		}
	});
}


function editFormPopulate(erId){

	$.ajax({
		url: "/eASI/hrms/getEmployeeRelationById/" + erId,
		type: "get",
		contentType: "application/json",
		success: function(data){
			console.log("success");
			$("#saveButton").hide();
			$("#editButton").show();
			populateRelationTable();
			var relation = data.payload;
			
			$('#erId').val(relation.erId);
			$('#employeeId').val(relation.employeeId);
			
			if(relation.isResidingWith==true)
				{
				$("#isResidingWith").prop("checked", true);
				}
			else
				{
				$("#isResidingWith").prop("checked", false);
				}
			
			if(relation.isDependent==true)
			{
			$("#isDependent").prop("checked", true);
			}
		else
			{
			$("#isDependent").prop("checked", false);
			}
			
			if(relation.emergencyContact==true)
			{
			$("#emergencyContact").prop("checked", true);
			}
		else
			{
			$("#emergencyContact").prop("checked", false);
			}
			
			if(relation.isPhysicallyDisabled==true)
			{
			$('#isPhysicallyDisabled').prop("checked", true);
			}
		else
			{
			$("#isPhysicallyDisabled").prop("checked", false);
			}
			
			if(relation.isNominee==true)
			{
			$("#isNominee").prop("checked", true);
			}
		else
			{
			$("#isNominee").prop("checked", false);
			}
		
			
			
			
			$('#relativeTitle').val(relation.relativeTitle);
			$('#relativeFname').val(relation.relativeFname);
			$('#relativeMname').val(relation.relativeMname);
			$("#relativeLname").val(relation.relativeLname);
			$("#relativeEmail").val(relation.relativeEmail);
			
			 $('#datepicker2').datepicker('setDate', dateFormated(relation.relativeDob));
			 
			$('#relativeMobile').val(relation.relativeMobile);
			$('#relativeOccupation').val(relation.relativeOccupation);
			$('#relativeMaritalStatus').val(relation.relativeMaritalStatus);
			$('#relationWithRelative').val(relation.relationWithRelative);
			$('#relativeNationality').val(relation.relativeNationality);
			$("#address1").val(relation.address1);
			$("#address2").val(relation.address2);
			$("#emergencyContact").val(relation.emergencyContact);
			$("#gpf").val(relation.gpf);
			$("#utegis").val(relation.utegis);
			$("#pensionAndGratuity").val(relation.pensionAndGratuity);
			$("#leaveInCash").val(relation.leaveInCash);
			
			
			
			
			$("#applicantstate2").val(relation.state);
			
			$("#applicantcity2").html("");
			$("#applicantdistrict2").html("");
			$("#applicantdistrict2").append("<option value='"+ relation.district+ "'>"+ relation.districtName+ "</option>");
			$("#applicantcity2").append("<option value='"+ relation.city+ "'>"+ relation.cityName+ "</option>");
			
			
			
			
			
			
			
			
			
			
			
			
			
			

		},
		error: function(xhr, status, error) {

		}
	});
}


function deleteEmployeeRelationByErId(erId) { 
	$.ajax({
		url: "/eASI/hrms/deleteEmployeeRelationByErId/" + erId,
		type: "delete",
		contentType: "application/json",
		success: function(data){
			console.log("success");
			$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();
			populateRelationTable();
		},
		error: function(xhr, status, error) {
		}
	});

}


function openalert(id) {
	var validator = validateForm();  
	validator.resetForm();

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
				deleteEmployeeRelationByErId(id) }             
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


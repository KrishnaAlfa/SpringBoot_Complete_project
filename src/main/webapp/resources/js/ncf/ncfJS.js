/**
 * This file is used in NCF Module
 */

// Hide and show for Donor Type
$(document).ready(function () {
	//$("#totalPersonGroup").hide();
	/*$("#personGroup").change(function() {
		var dat = $("#personGroup").val();
	    if(dat != ""){
	    	$("#totalPersonGroup").show();
	    }else{
	    	$("#totalPersonGroup").hide();
	    }
	});*/
	
	//getAllMonumentList(1);
	//var conid = 0;
	auto();
});


$('#orgChk,#individualChk,#ngoChk').click(function() {
	if ($('#orgChk').is(':checked')) {
		// alert("ds1");
		$("#organisationId").show();
	} else if ($('#individualChk,#ngoChk').is(':checked')) {
		$("#organisationId").hide();
	}
});

$('#centGov,#pvt,#stGov').click(function() {
	if ($('#stGov').is(':checked')) {
		 //alert("ds");
		$("#orgState").show();
	} else if ($('#centGov,#pvt').is(':checked')) {
		$("#orgState").hide();
	}
});

// Hide and show Upload MOU
$('#mouYes,#mouNo').click(function() {
	if ($('#mouYes').is(':checked')) {
		// alert("ds");
		$("#uploadMou").show();
	} else if ($('#mouNo').is(':checked')) {
		$("#uploadMou").hide();
	}
});

//Hide and show Upload MOU
$('#csrYes,#csrNo').click(function() {
	if ($('#csrYes').is(':checked')) {
		// alert("ds");
		$("#uploadCsr").show();
	} else if ($('#csrNo').is(':checked')) {
		$("#uploadCsr").hide();
	}
});

// Hide and show for Donor Type
$('#orgChk,#individualChk,#ngoChk').click(function() {
	if ($('#orgChk').is(':checked')) {
		$(".indName").hide();
		$(".orgName").show();
		$(".ngoName").hide();
	} else if ($('#individualChk').is(':checked')) {
		$(".indName").show();
		$(".orgName").hide();
		$(".ngoName").hide();
	} else if ($('#ngoChk').is(':checked')) {
		$(".indName").hide();
		$(".orgName").hide();
		$(".ngoName").show();
	}
});

/*$(document).ready(function() {

	$("#stateId").change(function(event) {

		event.preventDefault();
		alert("state selected");
		// getDistrict();
	});

});*/

/*
 * function getDistrict() { var BASE_CONTEXT_PATH =
 * $('meta[name=context-path]').attr("content"); BASE_CONTEXT_PATH =
 * BASE_CONTEXT_PATH.substr(0, BASE_CONTEXT_PATH.length - 1);
 * 
 * var selectedState = $("#stateId option:selected").val(); var url =
 * "${pageContext.request.contextPath}/transferOwnership/getDistrict/" +
 * selectedState; $.ajax({ type : "POST", url : url, data :
 * "name=selectedState", cache : false, success : function(data) { var obj =
 * JSON.stringify(data.district); var len = data.district.length;
 * $("#stateId").html(""); $("#applicantdistrict").append( "<option
 * value=''>---Select---</option>"); for (var i = 0; i < len; i++) { var id =
 * data.district[i]['district_id']; var name =
 * data.district[i]['district_name']; $("#stateId").append( "<option value='" +
 * id + "'>" + name + "</option>"); } }, error : function(request, error) {
 * alert("Request: " + JSON.stringify(request)); } }); }
 */

$(document)
		.ready(
				function() {
					$("select.stateId")
							.change(
									function(e) {
										e.preventDefault();
										var selectedState = $(
												".stateId option:selected")
												.val();//alert("state selected");
										var url = "/eASI/transferOwnership/getDistrict/"
												+ selectedState;
										$
												.ajax({
													type : "POST",
													url : url,
													data : "name=selectedState",
													cache : false,
													success : function(
															data) {
														var obj = JSON
																.stringify(data.district);
														var len = data.district.length;
														$(
																"#applicantdistrict")
																.html(
																		"");
														$(
																"#applicantdistrict")
																.append(
																		"<option value=''>---Select---</option>");
														for (var i = 0; i < len; i++) {
															var id = data.district[i]['district_id'];
															var name = data.district[i]['district_name'];
															$(
																	"#applicantdistrict")
																	.append(
																			"<option value='"
															+ id
															+ "'>"
																					+ name
																					+ "</option>");
														}
													},
													error : function(
															request,
															error) {
														alert("Request: "
																+ JSON
																		.stringify(request));
													}
												});
									});
				});

$(document)
		.ready(
				function() {
					$("select.applicantdistrict")
							.change(

									function(e) {
										e.preventDefault();
										var selectedDistrict = $(
												".applicantdistrict option:selected")
												.val();
										var url = "/eASI/transferOwnership/getCity/"
												+ selectedDistrict;
										$
												.ajax({
													type : "POST",
													url : url,
													data : "name=selectedDistrict",
													cache : false,
													success : function(
															data) {
														//								
														$(
																"#cityId")
																.html(
																		"");
														$(
																"#cityId")
																.append(
																		"<option value=''>---Select---</option>");
														var len = data.city.length;
														for (var i = 0; i < len; i++) {
															var id = data.city[i]['city_id'];
															var name = data.city[i]['city_name'];
															$(
																	"#cityId")
																	.append(
																			"<option value='"
															+ id
															+ "'>"
																					+ name
																					+ "</option>");
														}
													},
													error : function(
															request,
															error) {
														alert("Request: "
																+ JSON
																		.stringify(request));
													}
												});
									});
				});


// Redirection of Page
function listPage() {
	// window.loaction.href ="/ncf/listRequestMonuments";

	window.location.href = "/eASI/ncf/listRequestMonuments";

}

/*// Submit Form
function save(index) {
	$("#saveAsDraft").val(index);
	document.getElementById("monumentsRequest").submit();*/

	/*
	 * var validator = $("#monumentsRequest").validate({ rules : {
	 * donorName:"required" , }, messages : { donorName:"This field is Required" , }
	 * }); alert("dsd"); if(validator.form()){ alert("in");
	 * document.getElementById("monumentsRequest").submit(); }
	 */
//}

function auto(){
	  //var BASE_CONTEXT_PATH = $('meta[name=context-path]').attr("content");
	//  BASE_CONTEXT_PATH = BASE_CONTEXT_PATH.substr(0, BASE_CONTEXT_PATH.length - 1);
	  
	  $("#itemId").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: 'GET',
                url:"/eASI/ncf/getMonument/" + request.term,
                success: function (data) {

                    var items = [];
                    $.map(data, function( val, i ) {
                  	  if(i==0){
                  		  items.push({
	                              label: val,
	                              value: i,
	                    		  disabled: true		                              
	                          })
                  	  }else{
	                    	  items.push({
	                              label: val,
	                              value: i,
	                              disabled: false
	                          })
                  	  }
    				});
                  response(items);
                },
                error: function (response) {
                    //console.log("error while fetching items" + response)
                }
            });
        },
        select: function (event, ui) {
      	  if(!ui.item.disabled) {
	              $("#itemId").val(ui.item.label);
	              $("#monuId").val(ui.item.value);
	              //$("#multiMonumentsIdForCheck").val(ui.item.value);
	        	  }
	              return false;
        }
    });
}

function prepareBean () {
	   var bean ={};
	    var id = parseInt($("#multiMonumentsId").val());
	    var fmid = parseInt($("#id").val());
	    if(!isNaN(fmid)){
	    	bean['id'] = fmid;
	    }
		bean['multiMonumentsId'] = id;
	//	var mysDate = new Date($("#datepicker116").val());
	//	bean['start_Date'] = mysDate;
	//	var myeDate = new Date($("#datepicker117").val());
	//	bean['end_Date'] = myeDate;
		
   // var duration = parseInt($("#duration").val());
		//bean['duration'] = duration;
		//var distance = parseInt($("#distance").val());
		//bean['distance'] = distance;
		//console.log(duration);  
		
		return bean;
	}

/*function assignToCircle(){
	alert("in Function");
	var assignMonument = 1;
	$.ajax({
		type:"post",
		url:"/eASI/ncf/getMonument/",
		data:assignMonument,
		success:function(){},
		error:function(){}
		
	});
}
*/


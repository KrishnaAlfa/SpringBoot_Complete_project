var commonCounter = 0;
$(document)
		.ready(
				function() {
					$("#personalTab").click(function() {
						var appids = parseInt($("#checkAppId").val());
						if(appids != 0){
							$("#personal").show();
							$("#sitedetail").hide();
							$("#projectdetail").hide();
							$("#team").hide();
					   }
					});
					$("#sitedetailTab").click(function() {
					 var formid = parseInt($("#formId").val());
					   if(formid != 0){
							$("#personal").hide();
							$("#sitedetail").show();
							$("#projectdetail").hide();
							$("#team").hide();
						}
					});
					$("#projectdetailTab").click(function() {
						var prid = parseInt($("#formProjectId").val());
						if(prid != 0){
						$("#personal").hide();
						$("#sitedetail").hide();
						$("#projectdetail").show();
						$("#team").hide();
						}
					});
					$("#teamTab").click(function() {
						/*if($("#applicationTeamName0").val() !=""){*/
					  var prid = parseInt($("#formTeamId").val());
						if(prid != 0){
						$("#personal").hide();
						$("#sitedetail").hide();
						$("#projectdetail").hide();
						$("#team").show();
						}
					});
					
					$("#personal").show();
					$("#sitedetail").hide();
					$("#projectdetail").hide();
					$("#team").hide();
					
					$('input:radio[name=fieldArea]:nth(0)').attr('checked',true);
					var radioValue = $("input[name='fieldArea']:checked"). val();
					if(radioValue == "1"){
						 $(".protectByState").hide();
						 $(".hideRow").show();
						
					}
					

					$("#buttonForm1")
							.click(
									function() {
										if (validator.form()) {
											$("#form1")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerTempleSurveyFormPersonal";
																$
																		.ajax({
																			type : "POST",
																			url : url,
																			data : $(
																					"#form1")
																					.serialize(),
																			cache : false,
																			success : function(
																					data) {
																				var id = JSON.parse(data.id);
																				$("#checkAppId").val(id)
																				$("#formId").val(id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.show();
																				$(
																						"#projectdetail")
																						.hide();
																				$(
																						"#team")
																						.hide();
																				$(
																						"#personalTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#sitedetailTab')
																						.prop(
																								'class',
																								'active');
																			},beforeSend: function () {
																				$("#commonLodder").show();
																	        },
																	        complete: function () {
																	        	$("#commonLodder").hide();
																	        },
																			error : function(
																					request,
																					error) {
																				alert("Error");
																			}
																		});
															});
										}
									});
					var validator = $("#form1").validate({
						rules : {
							text : "required",
							file : "required",
							Select : "required",
						},
						messages : {
							text : "Field not be empty",
							file : "Please Select File",
							Select : "Please Select",
						}
					});

					$("#buttonForm2")
							.click(
									function() {
										if (validator2.form()) {
											$("#form2")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerTempleSurveySiteDetails";
																$
																		.ajax({
																			type : "POST",
																			url : url,
																			data : $(
																					"#form2")
																					.serialize(),
																			cache : false,
																			success : function(
																					data) {
																				var id = JSON
																						.parse(data.id);
																				$("#formProjectId").val(id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.hide();
																				$(
																						"#projectdetail")
																						.show();
																				$(
																						"#team")
																						.hide();
																				$(
																						"#sitedetailTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#projectdetailTab')
																						.prop(
																								'class',
																								'active');
																			},beforeSend: function () {
																				$("#commonLodder").show();
																	        },
																	        complete: function () {
																	        	$("#commonLodder").hide();
																	        },
																			error : function(
																					request,
																					error) {
																				alert("Error");
																			}
																		});
															});
										}
									});
					var validator2 = $("#form2").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#buttonForm3").click(function() {
					 if (validator3.form()) {
					 $("#form3").submit(function(e) {
					e.preventDefault();
					var url = "registerTempleSurveyFormProjectDetails";
					$.ajax({
								type : "post",
								url : url,
								data : new FormData(this),
								processData : false,
								contentType : false,
								cache : false,

								// data
								// :new
								// FormData(form),//
								// $("#form3").serialize(),
								success : function(data) {
									var id = JSON.parse(data.id);
									$("#formTeamId").val(id);
									$("#analysisId").val(id);
									
									$("#personal").hide();
									$("#sitedetail").hide();
									$("#projectdetail").hide();
									$("#team").show();
									$("#projectdetailTab").removeAttr('class','active');
									$('#teamTab').prop('class','active');
								},
								beforeSend : function() {
									$("#commonLodder").show();
								},
								complete : function() {
									$("#commonLodder").hide();
								},
								error : function(request,error) {
									alert(JSON.stringify(request));
								}
							});
						});
					}
					});
					var validator3 = $("#form3").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#buttonForm4").click(function() {
						/*if (validator4.form()) {
*/							if($('#decCheck').is(":checked")){
								$('#submitOrDraft').val(true);
								//checkBioDataConditions();
								$("#form4").submit();
							}
							else {
								alert("Please select checkbox")
						/*	}*/
						}
					});
					$("#buttonDraft").click(function() {
						/*if (validator4.form()) {*/
							if($('#decCheck').is(":checked")){
								$('#submitOrDraft').val(false);
								//checkBioDataConditions();
								$("#form4").submit();
							}
							else {
								alert("Please select checkbox")
							}
						/*}*/
					});
					
					function checkBioDataConditions(){
						var index = commonCounter;

						var applicationTeamRole = $("#applicationTeamRole"+index).val();
						var bioDataFile = $("#bioDataFile"+index).val();
						var applicationTeamNationality = $("#applicationTeamNationality"+index).val();

						if(applicationTeamRole == "Director" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
						alert("Director should be Indian.");
						}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India"){
						alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
						}else{
						$("input").attr("required", false);
						document.forms["form4"].submit();
						}
					}
					
					var validator4 = $("#form4").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});
					
					$("#addMore1").click(
					function() {
						var counts =$("#counter1").val();
						$('#addRow1')
								.append('<tr>'+
										'<td><input name="sin['+counts+'].name" id="name'+counts+'" placeholder="dep name" type="text"></td>'+
										'<td><input name="sin['+counts+'].intituion" id="intituion'+counts+'" placeholder="name" type="text"></td>'+
										'<td><input name="sin['+counts+'].address" id="address'+counts+'" placeholder="mobile" type="text"></td>'+
										'<td><input name="sin['+counts+'].phoneNo" id="phoneNo'+counts+'" class="numericOnly" placeholder="" type="text"></td>'+
										'<td><span class="removebutton"title="Delete" ><i class="fa fa-trash" aria-hidden="true"></i><span></td>'+	
								'</tr>');
						$("#counter1").val(++counts);
					});
			
					
					$("#buttonFormTeam").click(function() {
						if (validatorss.form()) {
						var applicationTeamRole = $("#applicationTeamRole").val();
						var bioDataFile = $("#bioDataFile").val();
						var applicationTeamNationality = $("#applicationTeamNationality").val();

						if(applicationTeamRole == "Director" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
						$("#bioDataFile").attr("required", false);
						alert("Director should be Indian.");
						}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India"){
						alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
						$("#bioDataFile").attr("required", true);
						}else{
						$("#commonLodder").show();
						//$("input").attr("required", false);
					    $(".ab").submit(function(e) {
						e.preventDefault();
						var form = document.forms[3];
						var formData = new FormData(form);
						var url = "teamAdd";
						$.ajax({
									type : "post",
									url : url,
									data : formData,
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
									 $("#form4").show();
									 $("#commonLodder").hide();
								     $("#buttonFormTeam").attr("disabled", true);
									 $("#buttonFormTeam").hide();
									 $("#buttonFormTeam1").attr("disabled", false);
									 $("#buttonFormTeam1").show();
									 $(".clearVal").val('');
									 $("#applicationTeamName").val('');
									 $("#applicationTeamDepartment").val('');
									 
										showData(data);
									},
									error : function(request,error) {
										alert(JSON.stringify(request));
									}
								});
							});
						  }
						}
						});
                    
						var validatorss = $("#form5").validate({
							rules : {
								text : "required",
								file : "required",
							},
							messages : {
								text : "Field not be empty",
								file : "Please upload file",
							}
						});
				});
               
                function getVal(value){
                	if(value == "1"){
                	  $(".hideDiv").hide();
                	}else if(value == "2"){
                	  $(".hideDiv").show();
                		
                	}
                }
                
				function getValue(value){
					   if(value == "3"){
						  $(".hidRow").show();
						  $(".protectByState").show();
						  $("#statePro").show();
						  $("#fieldArea").val(3);
					   }else if(value == "1"){
						  $(".protectByState").hide();
						  $("#fieldArea").val(1);
						  $(".protectByState").hide();
						  $(".hideRow").show();
					   }else if(value == "2"){
						  $(".protectByState").show();
						  $(".hideRow").show();
						  $("#fieldArea").val(2);
					   }
				 }
				
				function deleteSelected(id,fid){
			        var trueCheck = confirm("Please Confirm to delete the selected Items !");
			        if (trueCheck == true) {
			        	$("#addTeamList tbody").empty();
			        	deleteData(id,fid);
			            return true;
			        }
				}

				function deleteData(id,fid){
					var url = "delete";
					$.ajax({
						type : "GET",
						url : url,
						data : {
							id:id,
							fid:fid
						},
						cache : false,
						success : function(data) {
							if(data != null){
							   showData(data);
							}
						},
						beforeSend : function() {
							$("#commonLodder").show();
						},
						complete : function() {
							$("#commonLodder").hide();
						},
						error : function(request,error) {
							alert(error);
						}
					});
				}
				function showData(data){
					if (data != null) {
						$('#addTeamList tbody').empty();
						var count = 1;
						for(var i=0; i<data.length; i++){
							var row = "";
							row += '<tr>';
							row += '<td>' + count++ + '</td>';
							row += '<td>'+ data[i].applicationTeamDepartment +'</td>';
							row += '<td>'+ data[i].applicationTeamRole +'</td>';
							row += '<td>'+ data[i].applicationTeamName +'</td>';
							row += '<td>'+ data[i].applicationTeamMobile +'</td>';
							row += '<td>'+ data[i].applicationTeamEmail + '</td>';
							row += '<td>'+ data[i].applicationTeamNationality + '</td>';
							row += '<td>'+ data[i].applicationTeamAddress + '</td>';
							row += '<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-bioDataTemp"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							if(data[i].fVisa != null){
								row += '<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-fVisaTemp"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							}else{
								row += '<td>&nbsp;</td>';
							}
							if(data[i].fPassport != null){
								row += '<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-fPassportTemp"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							}else{
								row += '<td>&nbsp;</td>';
							}
							row +='<td><a href="#" onclick="deleteSelected('+data[i].applicationTeamId+','+data[i].applicationId+');" data-tooltip="Delete" class="tooltip-top"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'
							row += '</tr>';
							$('#addTeamList').append($(row));
						};
					}
				}
				
				$(document).on('click', 'span.removebutton', function () {
				    $(this).closest('tr').remove();
				    return false;
				});
var commonCounter = 0;
$(document)
		.ready(
				function() {
					deleteDataDetails($("#checkAppId").val());
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
						if($("#applicationTeamName0").val() !=""){
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

					$("#buttonForm1")
							.click(
									function() {
										if (validator.form()) {
											$("#form1")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerBuildingFormPersonal";
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
																				var id = JSON
																						.parse(data.id);
																				$(
																						"#formId")
																						.val(
																								id);
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
																			}
																			,beforeSend: function () {
																				$("#commonLodder").show();
																	        },
																	        complete: function () {
																	        	$("#commonLodder").hide();
																	        },
																			error : function(request,error) {
																				$("#commonLodder").hide();
																				alert("Something went wrong");
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

					/*
					 * function getDistrict(){ e.preventDefault(); }
					 */
					/*
					 * $(function(){
					 * 
					 * });
					 */

					$("#buttonForm2")
							.click(
									function() {
										if (validator2.form()) {
											$("#form2")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerBuildingFormSiteDetails";
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
																				$(
																						"#formProjectId")
																						.val(
																								id);
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
																			},
																			beforeSend: function () {
																				$("#commonLodder").show();
																	        },
																	        complete: function () {
																	        	$("#commonLodder").hide();
																	        },
																			error : function(request,error) {
																				$("#commonLodder").hide();
																				alert("Something went wrong");
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

					$("#buttonForm3")
							.click(
									function() {
										if (validator3.form()) {
											$("#form3")
													.submit(
															function(e) {
																e
																		.preventDefault();

																var url = "updateBuildingFormProjectDetails";
																$
																		.ajax({
																			type : "post",
																			url : url,
																			data : new FormData(
																					this),
																			processData : false,
																			contentType : false,
																			cache : false,

																			// data
																			// :new
																			// FormData(form),//
																			// $("#form3").serialize(),
																			success : function(
																					data) {
																				var id = JSON
																						.parse(data.id);
																				$(
																						"#formTeamId")
																						.val(
																								id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.hide();
																				$(
																						"#projectdetail")
																						.hide();
																				$(
																						"#team")
																						.show();
																				$(
																						"#projectdetailTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#teamTab')
																						.prop(
																								'class',
																								'active');
																			},
																			beforeSend: function () {
																				$("#commonLodder").show();
																	        },
																	        complete: function () {
																	        	$("#commonLodder").hide();
																	        },
																			error : function(request,error) {
																				$("#commonLodder").hide();
																				alert("Something went wrong");
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

					/*$("#buttonForm4").click(function() {
						if (validator4.form()) {
							$("#form4").submit();
						}
					});*/
					/*$("#buttonForm4").click(function() {
						if (validator4.form()) {
							if($('#decCheck').is(":checked")){
								$('#submitOrDraft').val(true);
								checkBioDataConditions();
								$("#form4").submit();
							}
							else {
								alert("Please select checkbox")
							}
						}
					});
					$("#buttonDraft").click(function() {
						if (validator4.form()) {
							if($('#decCheck').is(":checked")){
								$('#submitOrDraft').val(false);
								checkBioDataConditions();
								$("#form4").submit();
							}
							else {
								alert("Please select checkbox")
							}
						}
					});*/
					$(".b").click(function() {
						$('#submitOrDraft').val(false);
					});
                    $(".a").click(function() {
                      $('#submitOrDraft').val(true);
					});
					$("#buttonForm4").click(function() {
							if ($('#decCheck').is(":checked")) {
								/* checkBioDataConditions() */
								$("#form4").submit();
							} else {
								alert("Please select checkbox");
								return false;
							}
					});
					$("#buttonDraft").click(function() {
							if ($('#decCheck').is(":checked")) {
								/* checkBioDataConditions(); */
								$("#form4").submit();
							} else {
								alert("Please select checkbox");
								return false;
							}
					});

					var validator4 = $("#form4").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});
					
					function checkBioDataConditions(){
						var index = commonCounter;

						var applicationTeamRole = $("#applicationTeamRole"+index).val();
						var spanBidata =  $("#spanBidata"+index).text();
						var ogFile = $("#bioDataFile"+index).val();
						var bioDataFile = "";
						if(ogFile == ""){
							bioDataFile = spanBidata;
						}else{
							bioDataFile = ogFile;
						}
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
					
					/*var validator4 = $("#form4").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});*/

					$("#addMore").click(
							function() {
								var count=$("#counter").val();
								$('#addRow')
								.append('<tr>'+
										'<td><input name="teamList['+count+'].applicationTeamDepartment" autocomplete="off" maxlength="50" id="applicationTeamDepartment'+count+'" required="required" placeholder="dep name" type="text"></td>'+
										'<td><select name="teamList['+count+'].applicationTeamRole" id="applicationTeamRole'+count+'" required="required">'+
										'<option value="Director">Director</option><option value="CoDirector">CoDirector</option><option value="Photographer">Photographer</option>'+
										'<option value="DraftsMan">DraftsMan</option><option value="Surveyor">Surveyor</option>'+
										'</select></td>'+
										'<td><input name="teamList['+count+'].applicationTeamName" autocomplete="off" maxlength="50" id="applicationTeamName'+count+'" required="required" placeholder="name" type="text"></td>'+
										'<td><input name="teamList['+count+'].applicationTeamMobile" autocomplete="off" maxlength="13" id="applicationTeamMobile'+count+'" class="numericOnly" required="required" placeholder="mobile" type="text"></td>'+
										'<td><input name="teamList['+count+'].applicationTeamEmail" autocomplete="off" maxlength="100" id="applicationTeamEmail'+count+'" required="required" placeholder="" type="email"></td>'+
										'<td><select name="teamList['+count+'].applicationTeamNationality" id="applicationTeamNationality'+count+'" required="required"><option value="India">India</option><option value="Albania">Albania</option>'+
										'<option value="Austria">Austria</option><option value="UK">UK</option><option value="USA">USA</option>'+
										'</select></td>'+
										'<td><div class="text-area-sec">'+
												'<textarea name="teamList['+count+'].applicationTeamAddress"   maxlength="200" id="applicationTeamAddress'+count+'" required="required" placeholder="address" style="min-height: 60px;"></textarea>'+
											'</div></td>'+
										'<td><input name="teamList['+count+'].bioDataFile" id="bioDataFile'+count+'"  placeholder="" type="file"></td>'+
									'</tr>');
								commonCounter  = count;
								$("#counter").val(++count);
							});
					
					/*$("#addMore1").click(
							function() {
								var counts =$("#counter1").val();
								$('#addRow1')
										.append('<tr id="trow'+counts+'">'+
												'<td><input name="sin['+counts+'].name" id="name'+counts+'" required="required"  type="text"></td>'+
												'<td><input name="sin['+counts+'].intituion" id="intituion'+counts+'" required="required"  type="text"></td>'+
												'<td><input name="sin['+counts+'].address" id="address'+counts+'" required="required"   type="text"></td>'+
												'<td><input name="sin['+counts+'].phoneNo" id="phoneNo'+counts+'" class="numericOnly" required="required"  '+
												'type="text"><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+
												
										'</tr>');
								$("#counter1").val(++counts);
							});
					
					$("#addMore5").click(
							function() {
								var count=$("#counter").val();
								$('#addRow')
										.append('<div class="addTeamCollaboration" id="collaborationDiv'+count+'">'+
												'<div class="row">'+
												'<div class="select">'+
													'<div class="col-md-3">'+
														'<label class="radioLabel">'+
															'<input checked="checked" value="1" name="teamList['+count+'].teamForeign" type="radio"'+
															' id="teamForeign'+count+'" class="teamForeignCheck"> <span'+
															'class="lbl">Team Details</span>'+
														'</label>'+
													'</div>'+
													'<div class="col-md-3">'+
														'<label class="radioLabel"> '+
															'<input name="teamList['+count+'].teamForeign" type="radio" value="2"'+
															'id="teamForeign'+count+'" class="teamForeignCheck"> <span class="lbl">Foreign'+
																'Collaboration</span>'+
														'</label>'+
													'</div>'+
													'<i class="fa fa-remove" style="float: right;font-size: large;" title="Delete" onclick="deleteDiv(collaborationDiv'+count+')"></i>'+
												'</div>'+
											'</div>'+

											'<div class="clearfix"></div>'+
											'<div class="address-enforcing margin30 block-m row ">'+
												'<div>'+
													'<div class="col-md-4">'+
														'<span class="input"> Name'+
															'<span style="color: red">*</span>'+
														'</span> <input name="teamList['+count+'].applicationTeamName"'+
															'id="applicationTeamName'+count+'" required="required"'+
															'type="text" autocomplete="off" maxlength="50">'+
														'</td>'+
													'</div>'+
													'<div class="col-md-4">'+
														'<span class="input"> Institution'+
															'<span style="color: red">*</span>'+
														'</span> <input name="teamList['+count+'].applicationTeamDepartment"'+
															'autocomplete="off" maxlength="50"'+
															'required="required" type="text">'+
													'</div>'+
													'<div class="col-md-4">'+
														'<div class="select-one">'+
															'<span class="input"> Role'+
																'<span style="color: red">*</span>'+
															'</span> <select name="teamList['+count+'].applicationTeamRole"'+
																'id="applicationTeamRole'+count+'" required="required">'+
																'<option value="Director">Director</option>'+
																'<option value="CoDirector">CoDirector</option>'+
																'<option value="Photographer">Photographer</option>'+
																'<option value="DraftsMan">DraftsMan</option>'+
																'<option value="Surveyor">Surveyor</option>'+
															'</select>'+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
											'<div class=" address-enforcing block-m row">'+
												'<div class="col-md-4">'+
													'<div class="select-one">'+
														'<span class="input"> Nationality <span style="color: red">*</span></span>'+ 
															'<select name="teamList['+count+'].applicationTeamNationality"'+
															'id="applicationTeamNationality'+count+'" required="required">'+
															'<option value="India">India</option>'+
															'<option value="Albania">Albania</option>'+
															'<option value="Austria">Austria</option>'+
															'<option value="UK">UK</option>'+
															'<option value="USA">USA</option>'+
														'</select>'+
													'</div>'+
												'</div>'+
												'<div class="col-md-4">'+
													'<span class="input"> Mobile No'+
														'<span style="color: red">*</span>'+
													'</span> <input name="teamList['+count+'].applicationTeamMobile"'+
														'autocomplete="off" maxlength="13"'+
														'pattern=".{0}|.{9,}" class="numericOnly"'+
														'required="required" type="text"'+
														'id="applicationTeamMobile'+count+'">'+
												'</div>'+
												'<div class="col-md-4">'+
													'<span class="input"> Email ID '+
														'<span style="color: red">*</span></span> '+
														'<input autocomplete="off" maxlength="100"'+
														'name="teamList['+count+'].applicationTeamEmail"'+
														'id="applicationTeamEmail'+count+'" required="required"'+
														'type="email">'+
												'</div>'+
											'</div>'+
											'<div class="clearfix"></div>'+
											
											'<div class="row">'+
												'<div class="col-md-8">'+
													'<span class="input"> Address'+
														'<span style="color: red">*</span>'+
													'</span>'+ 
													'<div class="text-area-sec">'+
														'<textarea name="teamList['+count+'].applicationTeamAddress"'+
															'id="applicationTeamAddress'+count+'" maxlength="200"'+
															'rows="20" required="required"'+
															'style="min-height: 60px;"></textarea>'+
													'</div>'+
												'</div>'+
												'<div class="col-md-4">'+
													'<div class="upload-image-sec">'+
														'<div class="form-group">'+
															'<label>Bio Data<span style="color: red">*</span></label>'+
															'<input name="teamList['+count+'].bioDataFile"'+
																'id="bioDataFile'+count+'" type="file" >'+
														'</div>'+
													'</div>'+
												'</div>'+
												'<div class="col-md-4"></div>'+
											'</div>'+
											'<div class="clearfix"></div>'+
											'<div class="row" id="visaPassport'+count+'">'+
												'<div class="col-md-4">'+
													'<div class="upload-image-sec">'+
														'<div class="form-group">'+
															'<label>Visa<span style="color: red">*</span></label>'+
															'<input name="teamList['+count+'].visaFile"'+
																'id="visaPassportFile'+count+'" type="file" required="required">'+
														'</div>'+
													'</div>'+
												'</div>'+
												'<div class="col-md-4">'+
													'<div class="upload-image-sec">'+
														'<div class="form-group">'+
															'<label>Passport<span style="color: red">*</span></label>'+
															'<input name="teamList['+count+'].passportFile" id="mouFilee'+count+'"'+
																'type="file" required="required">'+
														'</div>'+
													'</div>'+
												'</div>'+
												'<div class="col-md-4"></div>'+
											'</div>'+
										'</div>');
								commonCounter  = count;
								$("#counter").val(++count);
							});
					
					$('input[type=radio][id=teamForeign'+commonCounter+']').change(function() {
						if(this.value==2)
							$("#visaPassport"+commonCounter).show();
						else if(this.value==1)
							$("#visaPassport"+commonCounter).hide();
					});*/
					
/*});
function deleteDiv(divId) {
	$(divId).remove();
}*/
					$("#addMore1")
					.click(
							function() {
								var counts = $("#counter1").val();
								$('#addRow1')
										.append(
												'<tr>'
														+ '<td><input name="sin['
														+ counts
														+ '].name" id="name'
														+ counts
														+ '" required="required" placeholder="dep name" type="text"></td>'
														+ '<td><input name="sin['
														+ counts
														+ '].intituion" id="intituion'
														+ counts
														+ '" required="required" placeholder="name" type="text"></td>'
														+ '<td><input name="sin['
														+ counts
														+ '].address" id="address'
														+ counts
														+ '" required="required" placeholder="mobile" type="text"></td>'
														+ '<td><input name="sin['
														+ counts
														+ '].phoneNo" id="phoneNo'
														+ counts
														+ '" class="numericOnly" required="required" placeholder="" type="text"></td>'
														+  '<td><span class="removebutton"title="Delete" ><i class="fa fa-trash" aria-hidden="true"></i><span></td></tr>');
								$("#counter1").val(++counts);
							});
					
					$("#visaPassport").hide();
					$('input[type=radio][id=teamForeign]').change(function() {
						if(this.value==2)
							$("#visaPassport").show();
						else if(this.value==1)
							$("#visaPassport").hide();
					});
                    
					var validator5 = $("#teamForm").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});
					
					$("#addMore6").click(function() { 
					if (validator5.form()) {
					var applicationTeamRole = $("#applicationTeamRole").val();
					var bioDataFile = $("#bioDataFile").val();
					var applicationTeamNationality = $("#applicationTeamNationality").val();
					var teamForeign = $("input[id='teamList[0].teamForeign']:checked").val();

					if(applicationTeamRole == "Director" && bioDataFile == ""){
					alert("Upload bio data file");
					return false;
					}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
					alert("Upload bio data file");
					return false;
					}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
					alert("Director should be Indian.");
					return false;
					}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India" && bioDataFile == ""){
					alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
					return false;
					}else if(teamForeign == 2 && applicationTeamNationality == "India"){
					alert("Foreign Collaboration should not be Indian");
					return false;
					}else{

						$(".ab")
								.submit(
										function(e) {
											e.preventDefault();

											var url = "teamInsertion";
											$.ajax({
													type : "POST",
													url : url,
													data : new FormData(this),
													processData : false,
													contentType : false,
													cache : false,
													success : function(data) {
													if(data != null){
														  $("#addMore7").attr("disabled", false);
														   $("#addMore7").show();
														   $("#addMore6").hide();
														   $("#addMore6").attr("disabled", true);
														   $(".teamDetailsEmpty").val("");
														if (data != null) {
															showData(data);
														};
													    
													}
													},beforeSend: function () {
														$("#commonLodder").show();
											        },
											        complete: function () {
											            waitingDialog.hide();
											        	$("#commonLodder").hide();
											        },
													error : function(request,error) {
														alert("Something went wrong");
													}
													});
										});
					
					
					}
				}
		});
				
				
		$("#addMore7").click(function() {
			if (validator5.form()) {

			var applicationTeamRole = $("#applicationTeamRole").val();
			var bioDataFile = $("#bioDataFile").val();
			var applicationTeamNationality = $("#applicationTeamNationality").val();
			var teamForeign = $("input[name='teamList[0].teamForeign']:checked").val();

			if(applicationTeamRole == "Director" && bioDataFile == ""){
			alert("Upload bio data file");
			return false;
			}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
			alert("Upload bio data file");
			return false;
			}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
			alert("Director should be Indian.");
			return false;
			}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India" && bioDataFile == ""){
			alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
			return false;
			}else if(teamForeign == 2 && applicationTeamNationality == "India"){
			alert("Foreign Collaboration should not be Indian");
			return false;
			}else{
			/*$("input").attr("required", false);*/
			/*document.forms["form4"].submit();*/

				$(".abb")
						.submit(
								function(e) {
									e.preventDefault();

									var url = "teamInsertion";
									$.ajax({
											type : "POST",
											url : url,
											data : new FormData(this),
											success : function(data) {
											if(data != null){
												   $("#addMore6").show();
												   $("#addMore6").attr("disabled", false);
												   $("#addMore7").attr("disabled", true);
												   $("#addMore7").hide();
												   $(".teamDetailsEmpty").val("");
												if (data != null) {
													showData(data);
													 
												};
											    
											}
											},beforeSend: function () {
												$("#commonLodder").show();
									        },
									        complete: function () {
									            waitingDialog.hide();
									        	$("#commonLodder").hide();
									        },
											error : function(request,error) {
												alert("Something went wrong");
											}
											});
								});
							}
						}
				});
									
				});
				function getValue(value) {
					if (value == "3") {
						$(".hidRow").show();
						$(".protectByState").show();
						$("#statePro").show();
						$("#fieldArea").val(3);
					} else if (value == "1") {
						$(".protectByState").hide();
						$("#fieldArea").val(1);
						$(".protectByState").hide();
						$(".hideRow").show();
					} else if (value == "2") {
						$(".protectByState").show();
						$(".hideRow").show();
						$("#fieldArea").val(2);
					}
				}
				
				
				function deleteSelected(id) {
					var trueCheck = confirm("Please Confirm to delete the selected Items !");
					if (trueCheck == true) {
						$("#addTeamList tbody").empty();
						deleteData(id);
						return true;
					}
				}
				
				function deleteData(id) {
					var url = "deleteTeam-"+id;
					$.ajax({
						type : "GET",
						url : url,
						data : {},
						cache : false,
						success : function(data) {
							if (data != null) {
								showData(data);
							}
						},
						beforeSend : function() {
							$("#commonLodder").show();
						},
						complete : function() {
							$("#commonLodder").hide();
						},
						error : function(request, error) {
							alert(error);
						}
					});
				}
				
				function deleteDataDetails(fid) {
					var url = "getEXDetails";
					$.ajax({
						type : "GET",
						url : url,
						data : {
							fid : fid
						},
						cache : false,
						success : function(data) {
							if (data != null) {
								showData(data);
							}
						},
						beforeSend : function() {
							$("#commonLodder").show();
						},
						complete : function() {
							$("#commonLodder").hide();
						},
						error : function(request, error) {
							alert(error);
						}
					});
				}
				
				function showData(data) {
					if (data != null) {
						$('#addTeamList').empty();
						var count = 1;
						for (var i = 0; i < data.length; i++) {
							var row = "";
							row += '<tr>';
							row += '<td>' + count++ + '</td>';
							row += '<td>' + data[i].applicationTeamDepartment + '</td>';
							row += '<td>' + data[i].applicationTeamRole + '</td>';
							row += '<td>' + data[i].applicationTeamName + '</td>';
							row += '<td>' + data[i].applicationTeamMobile + '</td>';
							row += '<td>' + data[i].applicationTeamEmail + '</td>';
							row += '<td>' + data[i].applicationTeamNationality + '</td>';
							row += '<td>' + data[i].applicationTeamAddress + '</td>';
							row += '<td><a href="/eASI/document/admin/download-'
									+ data[i].applicationTeamId
									+ '-bioData"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							if (data[i].visa != null) {
								row += '<td><a href="/eASI/document/admin/download-'
										+ data[i].applicationTeamId
										+ '-visa"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							} else {
								row += '<td>&nbsp;</td>';
							}
							if (data[i].passport != null) {
								row += '<td><a href="/eASI/document/admin/download-'
										+ data[i].applicationTeamId
										+ '-passport"><i class="fa fa-arrow-circle-o-down"></i></a></td>';
							} else {
								row += '<td>&nbsp;</td>';
							}
							row += '<td><a href="#" onclick="deleteSelected('
									+ data[i].applicationTeamId
									+ ');" data-tooltip="Delete" class="hrf tooltip-top"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'
							row += '</tr>';
							$('#addTeamList').append($(row));
						}
						;
					}
				}
				
				$(document).on('click', 'span.removebutton', function() {
					$(this).closest('tr').remove();
					return false;
				});
				function deleteSinSelected(id) {
					var trueCheck = confirm("Please Confirm to delete the selected Items !");
					if (trueCheck == true) {
						$("#idr"+id).closest('tr').remove();
						deleteSinData(id);
						return true;
					}
				}
				
				function deleteSinData(id) {
					var url = "deleteSinData-"+id;
					$.ajax({
						type : "GET",
						url : url,
						data : {},
						cache : false,
						success : function(data) {
							if (data != null) {
								showData(data);
							}
						},
						beforeSend : function() {
							$("#commonLodder").show();
						},
						complete : function() {
							$("#commonLodder").hide();
						},
						error : function(request, error) {
							alert(error);
						}
					});
				}
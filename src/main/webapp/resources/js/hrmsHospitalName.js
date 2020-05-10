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
																var url = "registerApplicationFormPersonal";
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
																var url = "registerApplicationFormSiteDetails";
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
																				var fieldArea = JSON
																				.parse(data.fieldArea);
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
																				if(fieldArea==1){
																					$(".hideDetailsColumn").hide();
																				}
																				
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

					$("#buttonForm3")
							.click(
									function() {
										if (validator3.form()) {
											$("#form3")
													.submit(
															function(e) {
																e
																		.preventDefault();

																var url = "registerApplicationFormProjectDetails";
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
																				$("#formTeamId").val(id);
																				$("#formTeamId2").val(id);
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
																			error : function(
																					request,
																					error) {
																				alert(JSON
																						.stringify(request));
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
						if (validator4.form()) {
							if($('#decCheck').is(":checked")){
								$('#submitOrDraft').val(true);
								/*checkBioDataConditions()*/
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
								/*checkBioDataConditions();*/
								$("#form4").submit();
							}
							else {
								alert("Please select checkbox")
							}
						}
					});
					
					/*function checkBioDataConditions(){
						var index = commonCounter;

						var applicationTeamRole = $("#applicationTeamRole"+index).val();
						var bioDataFile = $("#bioDataFile"+index).val();
						var applicationTeamNationality = $("#applicationTeamNationality"+index).val();
						var teamForeign = $("input[name='teamList[0].teamForeign']:checked").val();

						if(applicationTeamRole == "Director" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
						alert("Director should be Indian.");
						}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India" && bioDataFile == ""){
						alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
						}else if(teamForeign == 2 && applicationTeamNationality == "India"){
						alert("Foreign Collaboration should not be Indian");
						}else{
						$("input").attr("required", false);
						document.forms["form4"].submit();

							$("#teamForm")
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
														    $("#successdiv").show("slow");
															alert(data.length);
															if (data != null) {
																$('#addTeamList').empty();
																var count = 1;
																for(var i=0; i<data.length; i++){
																	$('#addTeamList')
																	.append('<tr>'+
																			'<td>'+data[i].applicationTeamDepartment+'</td>'+
																			'<td>'+data[i].applicationTeamRole+'</td>'+
																			'<td>'+data[i].applicationTeamName+'</td>'+
																			'<td>'+data[i].applicationTeamMobile+'</td>'+
																			'<td>'+data[i].applicationTeamEmail+'</td>'+
																			'<td>'+data[i].applicationTeamNationality+'</td>'+
																			'<td>'+data[i].applicationTeamAddress+'</td>'+
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-bioData1">download</a></td>'+
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-visa1">download</a></td>'+
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-passport1">download</a></td>'+
																		'</tr>');
																	commonCounter  = count;
																	$("#counter").val(++count);
																};
																
																 
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
					}*/
					function checkBioDataConditions(){
						var index = commonCounter;

						var applicationTeamRole = $("#applicationTeamRole"+index).val();
						var bioDataFile = $("#bioDataFile"+index).val();
						var applicationTeamNationality = $("#applicationTeamNationality"+index).val();
						var teamForeign = $("input[name='teamList[0].teamForeign']:checked").val();

						if(applicationTeamRole == "Director" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "CoDirector" && bioDataFile == ""){
						alert("Upload bio data file");
						}else if(applicationTeamRole == "Director" && applicationTeamNationality != "India"){
						alert("Director should be Indian.");
						}else if(applicationTeamRole != "Director" && applicationTeamRole != "CoDirector" && applicationTeamNationality != "India" && bioDataFile == ""){
						alert("Bio data is mandatory as " +applicationTeamRole + " is not Indian");
						}else if(teamForeign == 2 && applicationTeamNationality == "India"){
						alert("Foreign Collaboration should not be Indian");
						}else{
							return true;
						}
						return false;
					}
					
					var validator4 = $("#form4").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#addMore").click(
									function() {
										var count=$("#counter").val();
										$('#addRow')
										.append('<tr>'+
												'<td><input name="teamList['+count+'].applicationTeamDepartment" id="applicationTeamDepartment'+count+'" required="required" placeholder="dep name" type="text"></td>'+
												'<td><select name="teamList['+count+'].applicationTeamRole" id="applicationTeamRole'+count+'" required="required">'+
												'<option value="Director">Director</option><option value="CoDirector">CoDirector</option><option value="Photographer">Photographer</option>'+
												'<option value="DraftsMan">DraftsMan</option><option value="Surveyor">Surveyor</option>'+
												'</select></td>'+
												'<td><input name="teamList['+count+'].applicationTeamName" id="applicationTeamName'+count+'" required="required" placeholder="name" type="text"></td>'+
												'<td><input name="teamList['+count+'].applicationTeamMobile" id="applicationTeamMobile'+count+'" class="numericOnly" required="required" placeholder="mobile" type="text"></td>'+
												'<td><input name="teamList['+count+'].applicationTeamEmail" id="applicationTeamEmail'+count+'" required="required" placeholder="" type="email"></td>'+
												'<td><select name="teamList['+count+'].applicationTeamNationality" id="applicationTeamNationality'+count+'" required="required"><option value="India">India</option><option value="Albania">Albania</option>'+
												'<option value="Austria">Austria</option><option value="UK">UK</option><option value="USA">USA</option>'+
												'</select></td>'+
												'<td><div class="text-area-sec">'+
														'<textarea name="teamList['+count+'].applicationTeamAddress" id="applicationTeamAddress'+count+'" required="required" placeholder="address" style="min-height: 60px;"></textarea>'+
													'</div></td>'+
												'<td><input name="teamList['+count+'].bioDataFile" id="bioDataFile'+count+'"  placeholder="" type="file"></td>'+
											'</tr>');
										commonCounter  = count;
										$("#counter").val(++count);
									});

					$("#addMore1").click(
							function() {
								var counts =$("#counter1").val();
								$('#addRow1')
										.append('<tr id="trow'+counts+'"<tr><td>'+counts+'</td>'+
												'<td><input name="sin['+counts+'].amountOfAdvance" id="name'+counts+'" required="required" placeholder="" type="text"></td>'+
												'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+
											'</tr>');
								$("#counter1").val(++counts);
							});
					
					
					/*$("#addMore1").click(
							function() {
								var counts =$("#counter1").val();
								$('#addRow1')
										.append('<tr id="trow'+counts+'"<tr><td>'+counts+'</td>'+ 
												'<td><input name="sin['+counts+'].amountOfAdvance" id="intituion'+counts+'" required="required" placeholder="" type="text"></td>'+
												'<td><input name="sin['+counts+'].balanceOutstanding" id="address'+counts+'" required="required" placeholder="" type="text"></td>'+
												'<i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i>'+
											'</tr>');
								$("#counter1").val(++counts);
							});*/
					
					$("#addMoreFile").click(
							function() {
								var counts =$("#counter2").val();
								$('#addRow2')
										.append('<tr id="trow'+counts+'"<tr><td>'+counts+'</td>'+ 
												'<td><input name="upload['+counts+'].files" id="intituion'+counts+'" required="required" placeholder="" type="file"></td>'+
											/*	'<td><input name="sin['+counts+'].balanceOutstanding" id="address'+counts+'" required="required" placeholder="" type="text"></td>'+
*/												'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+
											'</tr>');
								$("#counter2").val(++counts);
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
															'<input  value="1" name="teamList['+count+'].teamForeign" type="radio"'+
															' id="teamForeign'+count+'" class="teamForeignCheck"> <span'+
															'class="lbl">Team Details</span>'+
														'</label>'+
													'</div>'+
													'<div class="col-md-3">'+
														'<label class="radioLabel"> '+
															'<input checked="checked" name="teamList['+count+'].teamForeign" type="radio" value="2"'+
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
					
					/*$("#buttonDraft").click(function() {
						
					});*/
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
						/*$("input").attr("required", false);*/
						/*document.forms["form4"].submit();*/

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
														    /*$("#successdiv").show("slow");*/
															if (data != null) {
																$('#addTeamList').empty();
																
																for(var i=0; i<data.length; i++){
																	
																	$('#addTeamList')
																	.append('<tr>'+
																			'<td>'+data[i].applicationTeamDepartment+'</td>'+
																			'<td>'+data[i].applicationTeamRole+'</td>'+
																			'<td>'+data[i].applicationTeamName+'</td>'+
																			'<td>'+data[i].applicationTeamMobile+'</td>'+
																			'<td>'+data[i].applicationTeamEmail+'</td>'+
																			'<td>'+data[i].applicationTeamNationality+'</td>'+
																			'<td>'+data[i].applicationTeamAddress+'</td>'+
																			
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-bioData1"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-visa1" class="visa1'+data[i].applicationTeamId+'" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																			'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-passport1" class="visa1'+data[i].applicationTeamId+'" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																			/*'<td><a href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i class="fa fa-trash"></i></a></td>'+*/
																		'</tr>');
																	
																	if(data[i].visa != null){
																		$(".visa1"+data[i].applicationTeamId).show();
																	}
																	
																};
																
																 
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
													  
												    /*$("#successdiv").show("slow");*/
													if (data != null) {
														$('#addTeamList').empty();
														
														for(var i=0; i<data.length; i++){
															
															$('#addTeamList')
															.append('<tr>'+
																	'<td>'+data[i].applicationTeamDepartment+'</td>'+
																	'<td>'+data[i].applicationTeamRole+'</td>'+
																	'<td>'+data[i].applicationTeamName+'</td>'+
																	'<td>'+data[i].applicationTeamMobile+'</td>'+
																	'<td>'+data[i].applicationTeamEmail+'</td>'+
																	'<td>'+data[i].applicationTeamNationality+'</td>'+
																	'<td>'+data[i].applicationTeamAddress+'</td>'+
																	'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-bioData1"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																	'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-visa1" class="visa1'+data[i].applicationTeamId+'" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																	'<td><a href="/eASI/document/admin/download-'+data[i].applicationTeamId+'-passport1" class="visa1'+data[i].applicationTeamId+'"style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'+
																	/*'<td><a href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i class="fa fa-trash"></i></a></td>'+*/
																'</tr>');
															if(data[i].visa != null){
																$(".visa1"+data[i].applicationTeamId).show();
															}
														};
														 
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
function deleteDiv(divId) {
	$(divId).remove();
}
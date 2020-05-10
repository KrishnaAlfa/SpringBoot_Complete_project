function getLocation() {
		var officeType=$("#officetype_id").val();
		$('#location_id').empty();
		if(officeType==2){
			getRegion();
		}else if (officeType==3){
			getCircle();
		}else if (officeType==4){
			getSubCircle();
		}else if (officeType==1){
			getHeadquarter();
		}else if (officeType==5){
			getDDOOffice();
		}
		else if (officeType==6){
			appendDivision();
		}
		else if (officeType==7){
			appendSubDivision();
		}
		else if (officeType==8){
			appendEpigraphy();
		}
		else if (officeType==9){
			appendExcavation();
		}
		else if (officeType==10){
			appendArchaeologyList();
		}
		else if (officeType==11){
			appendNNMAList();
		}
		else if (officeType==12){
			appendScienceDivision();
		}
		else if (officeType==13){
			appendZone();
		}
		else if (officeType==14){
			appendTempleSurveyList();
		}
		else if (officeType==15){
			appendScienceLabList();
		}
		else if (officeType == 16){
			appendMonumentsList();
		}else if (officeType == 17){
			appendPrehistoryList();
		}
		
		
	};
	
function appendToLocation(data){
		var option = "";
		$('#location_id').empty();
		option = option
				+ "<option value='' selected='selected'>Select From List</option>";
		for (var i = 0; i < data.length; i++) {
			option = option
					+ "<option value='"+data[i][0] + "'>"
					+ data[i][1] + "</option>";
		}
		$('#location_id').append(option);
	}

		function getHeadquarter()
		{
			$.ajax({
				type : 'GET',
				url : "/eASI/user/getheadquarter",
				success : function(data) {
					appendToLocation(data);
				},
				error : function() {
					alert("error while getting location");
					$('#location_id').empty();
				}
			});
		}
		
		function getRegion()
		{
			$.ajax({
				type : 'GET',
				url : "/eASI/region/getAllRegion",
				success : function(data) {
					appendToLocation(data);
				},
				error : function() {
					alert("error while getting location");
					$('#location_id').empty();
				}
			});
		}

		function getCircle() {
		$.ajax({
			type : 'GET',
			url : "/eASI/circle/getcirclebyregionid-",
			success : function(data) {
				appendToLocation(data);
			},
			error : function() {
				alert("error while getting location");
				$('#location_id').empty();
			}
		});
		};

		function getSubCircle() {
		$.ajax({
			type : 'GET',
			url : "/eASI/subcircle/getsubcirclebycircleid-",
			success : function(data) {
				appendToLocation(data);
			},
			error : function() {
				alert("error while getting sub circles");
				$('#location_id').empty();
			}
		});
		};
		
		function getDDOOffice() {
			$.ajax({
				type : 'GET',
				url : "/eASI/budget/getAllOfficeData",
				success : function(data) {
					appendToLocation(data);
				},
				error : function() {
					alert("error while getting DDO Office Data");
					$('#location_id').empty();
				}
			});
			};
			
			function appendDivision() {
				$.ajax({
					type : 'GET',
					dataType : 'json',
					url : "/eASI/budget/getDivisionMaster",
					success : function(data) {
						var option = "";
						$("#location_id").empty();
						option = option	+ "<option value=''>Select Division</option>";
						$.each(data, function(i, obj) {
		                	option = option	+ "<option value='"+obj.id + "'>"+ obj.divisionName + "</option>";
		                     });
						$('#location_id').append(option); 
					},
					error : function() {
					alert("Error ");
					}
				});
				};
				
				
				function appendSubDivision() {
					$.ajax({
						type : 'GET',
						url : "/eASI/budget/getSubDivisionMaster",
						success : function(data) {
							var option = "";
							$("#location_id").empty();
							option = option	+ "<option value=''>Select Sub Division</option>";
							$.each(data, function(i, obj) {
			                	option = option	+ "<option value='"+obj.id + "'>"+ obj.subDivisionName + "</option>";
			                     });
							$('#location_id').append(option); 
						},
						error : function() {
						alert("Error ");
						}
					});
					};
					
					
					function appendEpigraphy() {
						$.ajax({
							type : 'GET',
							url : "/eASI/epigraphy/getEpigraphyList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Select Epigraphy List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.epigraphy_branch + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
						};
						
						function appendExcavation() {
							$.ajax({
								type : 'GET',
								url : "/eASI/excavation/getExcavationList",
								success : function(data) {
									var option = "";
									$("#location_id").empty();
									option = option	+ "<option value=''>Select Excavation List</option>";
									$.each(data, function(i, obj) {
					                	option = option	+ "<option value='"+obj.id + "'>"+ obj.excavation_branch + "</option>";
					                     });
									$('#location_id').append(option); 
								},
								error : function() {
								alert("Error ");
								}
							});
							};
				function appendArchaeologyList()
				 {
					$.ajax({
						type : 'GET',
						url : "/eASI/archaeologyInstitute/getArchlogiesOfficeList",
						success : function(data) {
							var option = "";
							$("#location_id").empty();
							option = option	+ "<option value=''>Select Institute of Archaeology Office List</option>";
							$.each(data, function(i, obj) {
			                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
			                     });
							$('#location_id').append(option); 
						},
						error : function() {
						alert("Error ");
						}
					});
					};
					
					function appendNNMAList()
					 {
						$.ajax({
							type : 'GET',
							url : "/eASI/archaeologyInstitute/getArchlogiesOfficeList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Select National Mission on Monuments & Antiquities List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
						};
						
					function appendScienceDivision()
					{
						$.ajax({
						type : 'GET',
						url : "/eASI/science/analytical/getScienceDIvisionList",
						success : function(data) {
							var option = "";
							$("#location_id").empty();
							option = option	+ "<option value=''>Science Division List</option>";
							$.each(data, function(i, obj) {
			                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
			                     });
							$('#location_id').append(option); 
						},
						error : function() {
						alert("Error ");
						}
					});
					};
					
					function appendZone()
					{
						$.ajax({
						type : 'GET',
						url : "/eASI/science/analytical/getZoneList",
						success : function(data) {
							var option = "";
							$("#location_id").empty();
							option = option	+ "<option value=''>Zone List</option>";
							$.each(data, function(i, obj) {
			                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
			                     });
							$('#location_id').append(option); 
						},
						error : function() {
						alert("Error ");
						}
					});
					};
					
					function appendTempleSurveyList()
					{
						$.ajax({
							type : 'GET',
							url : "/eASI/templeSurvey/getTempleSurveyList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Temple Survey List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
					};
					
					function appendScienceLabList()
					{
						$.ajax({
							type : 'GET',
							url : "/eASI/science/analytical/getScienceLabList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Science Lab List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
					};
					
					
					function appendMonumentsList()
					{
						$.ajax({
							type : 'GET',
							url : "/eASI/monument/getDemoMonumentsList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Monuments List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
					};
					
					function appendPrehistoryList()
					{
						$.ajax({
							type : 'GET',
							url : "/eASI/prehistory/getPrehistoryList",
							success : function(data) {
								var option = "";
								$("#location_id").empty();
								option = option	+ "<option value=''>Pre History List</option>";
								$.each(data, function(i, obj) {
				                	option = option	+ "<option value='"+obj.id + "'>"+ obj.name + "</option>";
				                     });
								$('#location_id').append(option); 
							},
							error : function() {
							alert("Error ");
							}
						});
					};
					
					
					function getUserListData()
					{
						//alert("Function Called");
						var dataLength=$("#userName").val().length;
						if(dataLength>3)
						{
							var data = { 'name': $("#userName").val() }
							 $.ajax({
						          	type : 'GET',
						  			data : data,
						  			url : "/eASI/hrms/user/getSearchUsers",
						              success: function (data) {
						                  var items = [];
						                  var optionData="";
						                  $.map(data, function( value, key ) {
						                	 optionData=optionData+'<option  value="'+key+'">'+value+'</option>'
						  				});
						                  $("#datalist").empty(); 
						                  $("#datalist").append(optionData); 
						              },
						              error: function (response) {
						                  console.log("error while fetching items" + response)
						              }
						          });
							
						}
					}
					
					 
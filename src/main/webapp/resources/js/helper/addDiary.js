		$(document).ready(
				function() {
					$(".b1").click(function(){
						$("#saveAsDraft").val(0);
					});
					$(".b2").click(function(){
						$("#saveAsDraft").val(1);
						    var a =  $("#isMigrateFile").val();
			                var b = $("#isCorrespondence").val();
			                if(a != "" || b != ""){
			                	$("#isMigrateFile").attr("required",false);
			                    $("#isCorrespondence").attr("required",false);
			                }
					});
					
					$("#buttonForm1").click(function() {
						if (validator3.form()) {
							$("#form1").submit();
						}
					});
					var validator3 = $("#form1").validate({
						rules : {
							text : "required",
							Select :"required",
							file :"required",
						},
						messages : {
							text : "Field not be empty",
							file :"Please Upload file",
						}
					});
					
					$("#addMore").click(
						function() {
							var count = $("#counter").val();
							$('#addRow').append('<tr>'+
								 '<td><input name="filesList['+ count+'].doc" id="doc'+ count+'" type="file" required="required"></td>'+
								 '<td style="border:none!important;text-align: right;"><span class="removebutton" style="font-size:14px !important;float: left;">Remove</span></td>'+
								 '</tr>');
							commonCounter = count;
							$("#counter").val(++count);
					});
		});
		
		$(document).on('click', 'span.removebutton', function () {
		    $(this).closest('tr').remove();
		    return false;
		});
		//AUTO COMP
		 function getAutoValue(id){
			 if(id == ""){
				$("#monumentId").val("");
			 }
			 $("#setId").autocomplete({
		         source: function (request, response) {
		             $.ajax({
		                 type: 'GET',
		                 url: "getMonument",
		                 data: {
		                	 itemName : request.term,
		                     subId : $("#subcircleids").val()
		                 },
		                 success: function (data) {
		                     var items = [];
		                     data.forEach(function (value, index) {
		                         /*console.log(value + " " + index);*/
		                         if(value.rate == null){
		                        	 value.rate = 0           //if null rate then default value set 
		                         }
		                         items.push({
		                             label: value.name,
		                             value: value.id,
		                         })

		                     })
		                     response(items);
		                 },
		                 error: function (response) {
		                     console.log("error while fetching items" + response)
		                 }

		             });
		         },
		         select: function (event, ui) {
		             $("#setId").val(ui.item.label);
		             $("#munumentsId").val(ui.item.value);
		             return false;
		         }
		       });
			 }
		 
		   $(document).ready(function(){
			var testCheck =  $("#isPmtQs").val();
			if(testCheck != "true"){
	         $('input[type="checkbox"]').click(function(){
	            if($(this).is(":checked")){
	               $(".pClassA").show();
	  			   $(".pClassB").hide();
	  			   $('.req').attr("required",false);
	  			 $('#parliamentType').attr("required",true);
	  			$('#departmentType').attr("required",true);
	  			$('#departmentType').val(57);
	  			 
	  			   $("#isPmtQs").val(true);
	            }else if($(this).is(":not(:checked)")){
	               $(".pClassA").hide();
	  			   $(".pClassB").show();
	  			   $('.req').attr("required",true);
	  			   $("#isPmtQs").val(false);
	  			 $('#parliamentType').attr("required",false);
	  			$('#departmentType').attr("required",false);
	  			$('#departmentType').val("");
	            }
	         });
			}
	        var filesId = $("#filesId").val();
	        if(filesId != ""){
        	 $(".pClassA").show();
  			 $(".pClassB").hide();
  			 $('.req').attr("required",false);
	        	
	        }
	    });
		   
		   $(document).ready(function(){
		         $('input:radio[name="provisionalMode"]').change(
		        	function(){
		        		if ($(this).is(':checked') && $(this).val() == '2') {
		        			$(".provisionalDiv").show();
		        			$(".diaryNumber").hide();
		        			$('#provisionalFieldData').attr("required",true);
		        			$('#questionNumber').attr("required",true);
		        		}
		        		else{
		        			$(".provisionalDiv").hide();
		        			$(".diaryNumber").show();
		        			$('#provisionalFieldData').attr("required",false);
		        			$('#questionNumber').attr("required",false);
		        		}
		        });
		    });

		  

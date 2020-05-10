var warehouseUrl = "/eASI/easi/warehouse/";

function addWarehouse() {
	var name=$('#warehouseName').val();
	var regionId=$('#regions').val();
	var circleId=$('#circle').val();
	if(name=='')
		{
		alert("Please Select Warehouse Name!");
		}
	else if(regionId=='')
		{
		alert("Please Select Region!");
		}
	else if(circleId==null || circleId=='')
	{
	alert("Please Select Circle!");
	}
	else
		{
		$.ajax({
	        url: warehouseUrl+"new",
	        type: "post",
	        data: warehouseInfoJson(),
	        contentType: "application/json",
	        success: function (data) {
	            var ids = data.payload;
	            if(ids.message!=null)
	            	{
	            	 alert("Warehouse already exist");
	            	}
	            else
	            	{
	            	 alert("page successfully saved");
	            	}
	           
	            window.location = warehouseUrl + "main";
	        },
	        error: function (jqXHR, textStatus, errorThrown) {
	            console.log("failure");
	        }
	    });
		}
}

function warehouseInfoJson() {
    return JSON.stringify({
        "name": $('#warehouseName').val(),
        "regionId": $('#regions').val(),
        
        "circleId": $('#circle').val()
    });
}

function populateWarehouses() {
    $.ajax({
        url: warehouseUrl + "warehouses",
        type: "get",
        success: function (data) {
            var warehouses = data.payload;
            $('#warehouseTable td').remove();
            $(function () {
                $.each(warehouses, function (index) {
                    var warehouse = warehouses[index]
                    var id = warehouse.id;
                    var $tr = $('<tr>').append(
                        $('<td>').text(warehouse.regionName),
                        $('<td>').text(warehouse.circleName),
                       // $('<td>').text(warehouse.subcircleName),
                      //  $('<td>').text(warehouse.monumentName),
                        $('<td>').text(warehouse.name),
                       $('<td>').html(
                           "<a href=javascript:void class='tooltip-top' data-tooltip='View' onclick=viewWarehouse('" + id + "')><i class='faa faa-eye'></i></a><a href=javascript:void class='tooltip-top' data-tooltip='Delete' onclick=deleteWarehouse('" + id + "')><i class='fa fa-trash'></i></a>"
                       )
                    ).appendTo('#warehouseTable');

                });
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function deleteWarehouse(warehouseId) {
    if (confirm("Are you sure want to delete this Page?")) {
        $.ajax({
            url: warehouseUrl + warehouseId,
            type: "delete",
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("Page Deleted Successfully");
                populateWarehouses();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}

function viewWarehouse() {

}

function listWarehouse() {
    window.location = warehouseUrl + "main";
}

function populatecircleByRegion(regionid) {
	$
			.ajax({
				type : 'GET',
				url : "/eASI/circle/getcirclebyregionid-"
						+ regionid,
				success : function(data) {
					var option = "";
					$('#circle').empty();
					$('#subcircles').empty();
					$('#monuments').empty();
					option = option
							+ "<option value='' selected=''>Select</option>";
					$('#subcircles').append(option);
					$('#monuments').append(option);
					for (var i = 0; i < data.length; i++) {
						option = option
								+ "<option value='"+data[i][0] + "'>"
								+ data[i][1] + "</option>";
					}
					$('#circle').append(option);
				},
				beforeSend : function() {
					// Code to display spinner
					$('#loader').show();
				},
				complete : function() {
					// Code to hide spinner.
					$('#loader').hide();
					;
				},
				error : function() {
					alert("error while getting circles");
				}
			});
};

function populatesubCircleByCircle(circleid) {
	$
			.ajax({
				type : 'GET',
				url : "/eASI/subcircle/getsubcirclebycircleid-"
						+ circleid,
				success : function(data) {
					var option = "";
					$('#subcircles').empty();
					$('#monuments').empty();
					option = option
							+ "<option value='' selected=''>Select</option>";
					$('#monumentid').append(option);
					for (var i = 0; i < data.length; i++) {
						option = option
								+ "<option value='"+data[i][0] + "'>"
								+ data[i][1] + "</option>";
					}
					$('#subcircles').append(option);
				},
				beforeSend : function() {
					// Code to display spinner
					$('#loader').show();
				},
				complete : function() {
					// Code to hide spinner.
					$('#loader').hide();
					;
				},
				error : function() {
					alert("error while getting sub circles");
				}
			});
};
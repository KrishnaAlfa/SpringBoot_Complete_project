function getSortedDraft(id) {
	var url = "findDraft";
	$.ajax({
		type : "GET",
		url : url,
		data : {
			id : id
		},
		cache : false,
		success : function(data) {
			showDraftById(data);
		},
		error : function(e) {
		}
	})
};

$(document).on('click', '#close11', function(e) {
	$("#draftIDShow").show();
	$(".singleView").hide();
});

function showDraftById(data) {
	/* var ctx = $(".gectcontext").val(); */
	var ctx = "/eASI";
	var correspondencePath = data.newDoc
	if (correspondencePath) {
		var path = window.location.protocol + "//" + window.location.host + ctx
				+ correspondencePath;
	}

	$(".singleView").empty();

	var row = "";
	row += '<div class="col-md-9 right-sidebar right-section">'
	row += '<div class="main-content">'
	row += '<div class="page-content boxMain" style="margin-top:0!important;">'
	row += '<div class="innersection">'
	row += '<div class="sectionwise">'

	row += '<div class="row">'

	row += '<div class="col-md-6 leftbrd draftview">'

	row += '<div class="row red box" style="display: block">'

	row += '<div class="col-md-12 margin80">'
	row += '<div>Version&nbsp;&nbsp;' + data.version + '&nbsp;' + data.draftNo
			+ '</div>'
	if (data.newDoc == null) {
		row += '<div style="color:black"><p style="color:black">'
				+ data.draftRemarks + '</p></div>'
	}
	if (data.newDoc != null) {
		row += '<iframe id="fredd" src="http://docs.google.com/gview?url='
				+ path
				+ '&embedded=true" style="border:1px solid #666CCC" title="PDF in an i-Frame " frameborder="1" scrolling="auto" height="100%" width="100%"></iframe>'
	}
	row += '</div>'

	row += '</div>'
	row += '</div>'

	row += '<div class="col-md-6 border-box-s">'
	row += '<div class="row">'
	row += '<h3 class="notify-heading title"><strong>Draft Details</strong></h3>'
	row += ' <input type="button" style="float: right; text-align: right; padding: 4px 23px 3px 20px;margin: -51px 60px;" id="close11" value="Close">'
	row += '</div>'
	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Draft Type</strong></label>'
	row += '</div>'
	row += '<div> ' + data.draftType + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Language</strong></label>'
	row += '</div>'
	row += '<div> ' + data.language + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row margin10">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Draft Nature </strong></label>'
	row += '</div>'
	row += '<div> ' + data.draftNature + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>Prefix </strong></label>'
	row += '</div>'
	row += '<div> ' + data.prefix + ''
	row += '</div>'
	row += '</div>'

	row += '</div>'

	row += '<div class="row">'
	row += '<div class="col-md-12">'
	row += '<div>'
	row += '<label> <strong>Subject </strong></label>'
	row += '</div>'
	row += '<div> ' + data.subject + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row">'
	row += '<h3 class="notify-heading title"><strong>Communication Details</strong></h3>'
	row += '</div>'

	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Ministry </strong></label>'
	row += '</div>'
	row += '<div> ' + data.ministryType + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>Department </strong></label>'
	row += '</div>'
	row += '<div> ' + data.departmentType + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row margin10">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>Name </strong>'
	row += '</label>'
	row += '</div>'
	row += '<div> ' + data.name + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Designation </strong></label>'
	row += '</div>'
	row += '<div> ' + data.designation + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row margin10">'
	row += '<div class="col-md-12">'
	row += '<div>'
	row += '<label>  <strong>Organization </strong></label>'
	row += '</div>'
	row += '<div> ' + data.organisation + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row" margin10>'
	row += '<div class="col-md-12">'
	row += '<div>'
	row += '<label> <strong>Address1</strong></label>'
	row += '</div>'
	row += '<div> ' + data.address1 + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'

	row += '<div class="row" margin10>'
	row += '<div class="col-md-12">'
	row += '<div>'
	row += '<label> <strong>Address12</strong></label>'
	row += '</div>'
	row += '<div> ' + data.address2 + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'

	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Country</strong></label>'
	row += '</div>'
	row += '<div> ' + data.countryName + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>State</strong></label>'
	row += '</div>'
	row += '<div> ' + data.stateName + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>City</strong></label>'
	row += '</div>'
	row += '<div> ' + data.cityName + ''
	row += '</div>'
	row += '</div>'

	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>Pincode</strong></label>'
	row += '</div>'
	row += '<div> ' + data.pincode + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Mobile</strong></label>'
	row += '</div>'
	row += '<div> ' + data.mobile + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label> <strong>Landline</strong></label>'
	row += '</div>'
	row += '<div> ' + data.landline + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '<div class="row">'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Fax</strong> </label>'
	row += '</div>'
	row += '<div> ' + data.fax + ''
	row += '</div>'
	row += '</div>'
	row += '<div class="col-md-6">'
	row += '<div>'
	row += '<label>  <strong>Email</strong> </label>'
	row += '</div>'
	row += '<div> ' + data.email + ''
	row += '</div>'
	row += '</div>'
	row += '</div>'
	if(data.draftFileAttach){
		row += '<div class="row">'
		row += '<div class="col-md-8"><h3 class="notify-heading title"><strong>Attachment Details</strong></h3></div>'
	
		row += '<div class="col-md-4">'
		
		row += '<a href="' + ctx + '/document/admin/download-' + data.id
				+ '-draftFileAttachDetails">Download</a>'
		row += '</div>'
		row += '</div>'
	}
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '</div>'
	row += '</div>'
	$("#draftIDShow").hide();
	$(".singleView").show();
	$(".singleView").append($(row));
}

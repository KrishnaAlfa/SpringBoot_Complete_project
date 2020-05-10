var pageUrl = "/eASI/easi/page/"

function savePage() {


    var validator = $("#moduleForm").validate({
        // $("#moduleForm").validate({
        rules: {
            name: "required",
            description: "required",
            url: "required",
            modules: "required",
        },
        messages: {
            name: "Page Name Required",
            description: "Page Description Required",
            url: "Page URL Required",
            modules: "Module Name Required",
        }
    });
    if (validator.form()) {
        $.ajax({
            url: pageUrl,
            type: "post",
            data: pageInfoJson(),
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("page successfully saved");
                populatePagesNew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }

    function pageInfoJson() {
        return JSON.stringify({
            "name": $('#name').val(),
            "active": $('#isActive').is(':checked'),
            "url": $('#url').val(),
            "moduleCode": $('#modules').val(),
            "description": $('#description').val()
        });
    }
}

/*
 * Now Using populatePagesNew() function for populating Pages
 */
function populatePages() {
    $.ajax({
        url: pageUrl + "pages",
        type: "get",
        success: function (data) {
            var pages = data.payload;
            console.log(pages)
            var options = $("#pages");
            options.children().remove();

            $.each(pages, function (index) {
                var page = pages[index]
                console.log(page)
                options.append($("<option />").val(page.code).text(page.name));
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

/*
 * Populating Pages in Table Format
 */
function populatePagesNew() {
    $.ajax({
        url: pageUrl + "pages",
        type: "get",
        success: function (data) {
            var pages = data.payload;
            $('#pageTable td').remove();
            console.log(pages)
            $(function () {
                $.each(pages, function (index) {
                    var page = pages[index]
                   // alert(">>"+page.name);
                    //alert(page.code);
                    var code = page.code;
                    var activeflag="";
                    if(page.active='true')
                    	{
                    	activeflag="Yes";
                    	}
                    else
                    	{
                    	activeflag="No";
                    	}
                    var $tr = $('<tr>').append(
                        $('<td>').text(1 + index),
                        $('<td>').text(page.name),
                        $('<td>').text(page.description),
                        $('<td>').text(page.url),
                      
                        $('<td>').text(activeflag),
                       
                        $('<td>').html(/*"<a href='/eASI/easi/page/"+page.code +"' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>" +*/
                            "<a href=javascript:void class='tooltip-top' data-tooltip='Delete' onclick=deletePage('" + code + "')><i class='fa fa-trash'></i></a>"
                            /*                    		"<a href='/eASI/easi/page/edit-"+page.code +"' class='tooltip-top' data-tooltip='Edit'><i class='fa fa-pencil' aria-hidden='true'></i></a>"*/)
                    ).appendTo('#pageTable');

                });
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

/*
 * Deleting Page by Code
 */
function deletePage(code) {
    //alert(code);
    if (confirm("Are you sure want to delete this Page?")) {
        $.ajax({
            url: pageUrl + code,
            type: "delete",
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("Page Deleted Successfully");
                populatePagesNew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}


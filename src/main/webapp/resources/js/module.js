var moduleUrl = "/eASI/easi/module/"


function saveModule() {

    var validator = $("#moduleForm").validate({
        // $("#moduleForm").validate({
        rules: {
            name: "required",
            description: "required"
        },
        messages: {
            name: "Module Name Required",
            description: "Module Description Required"
        }
    });

    if (validator.form()) {
        //  $('form#moduleForm').submit();
        var name = $('#name').val();
        var code = $('#code').val();
        var isActive = $('#isActive').is(':checked');
        console.log(name, code, isActive);

        $.ajax({
            url: moduleUrl,
            type: "post",
            data: moduleInfoJson(),
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("Module Saved Successfully ");
                location.reload();
                /* var testDiv = document.getElementById("addModule");
                 testDiv.innerHTML = "<div class='row'><div class='col-md-12'><div class='alert alert-success alert-dismissible'>" +
                         "<a href='#' class='close' data-dismiss='alert'aria-label='close'>&times;</a> <strong>sasaa</strong></div></div></div>";*/
                populateModulesNew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}

function moduleInfoJson() {
    return JSON.stringify({
        "name": $('#name').val(),
        "active": $('#isActive').is(':checked'),
        "description": $('#description').val(),
        "parent": $('#isParent').is(':checked'),
        "parentModuleCode": $('#parentModules').val()
    });
}


/*
 
 *   Now We Are Using populateModulesNew() 
 *   For Creating Table Structure 
 
 */
function populateModules() {
    $.ajax({
        url: moduleUrl + "modules",
        type: "get",
        success: function (data) {
            var modules = data.payload;
            console.log(modules)
            var options = $("#modules");
            populateModuleDropDown(options, modules);

            options = $("#parentModules");
            populateModuleDropDown(options, modules);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateModulesupdate() {
    var Id = $("#parentName").val();
    // alert(Id);
    $.ajax({
        url: moduleUrl + "modules",
        type: "get",
        success: function (data) {
            var modules = data.payload;
            console.log(modules)
            var options = $("#modules");
            populateModuleDropDown(options, modules);

            options = $("#parentModules");
            populateUpdateModuleDropDown(options, modules);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

/*
*   For Creating Table Structure 
 */
function populateModulesNew() {
    $.ajax({
        url: moduleUrl + "modules",
        type: "get",
        success: function (data) {
            var modules = data.payload;
            $('#moduleTable td').remove();
            console.log(modules)
            $(function () {
                $.each(modules, function (index) {
                    var module = modules[index]
                    var code = module.code;
                    var activeflag="";
                    if(module.active='true')
                    	{
                    	activeflag="Yes";
                    	}
                    else
                    	{
                    	activeflag="No";
                    	}
                    
                    var $tr = $('<tr>').append(
                        $('<td>').text(1 + index),
                        $('<td>').text(module.name),
                        $('<td>').text(module.description),
                       
                        $('<td>').text(activeflag),
                        
                        $('<td>').html("<a href='/eASI/easi/module/" + module.code + "' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>" +
                            "<a href=javascript:void class='tooltip-top' data-tooltip='Delete' onclick=deleteModule('" + code + "')><i class='fa fa-trash'></i></a>" +
                            "<a href='/eASI/easi/module/edit-" + module.code + "' class='tooltip-top' data-tooltip='Edit' ><i class='fa fa-pencil' aria-hidden='true'></i></a>")
                    ).appendTo('#moduleTable');

                });
            });

            options = $("#parentModules");
            populateModuleDropDown(options, modules);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
            "+code+"
        }
    });
}

function populateModuleDropDown(options, modules) {
    options.children().remove();
    options.append($("<option />").val("").text("Select Modules"));
    $.each(modules, function (index) {
        var module = modules[index]
        console.log(module)

        options.append($("<option />").val(module.code).text(module.name));
    });
}

function populateUpdateModuleDropDown(options, modules) {
    options.children().remove();
    $.each(modules, function (index) {
        var module = modules[index]
        console.log(module)
        options.append($("<option />").val(module.code).text(module.name));
    });
}


// Deleting Module based on their ID
function deleteModule(id) {
    if (confirm("Are you sure you want to delete this Module?")) {
        $.ajax({
            url: moduleUrl + id,
            type: "delete",
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("Module Deleted Successfully");
                populateModulesNew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}


// Updating Module based on their ID
function updateModule(code) {
    $.ajax({
        url: moduleUrl,
        type: "put",
        data: updateModuleInfoJson(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            alert("Module Updated Successfully");
            window.location.href = '/eASI/easi/module/main';
            //populateModulesNew();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function updateModuleInfoJson() {
    return JSON.stringify({
        "code": $('#code').val(),
        "name": $('#name').val(),
        "active": $('#isActive').is(':checked'),
        "description": $('#description').val(),
        "parent": $('#isParent').is(':checked'),
        "parentModuleCode": $('#parentModules').val()
    });
}
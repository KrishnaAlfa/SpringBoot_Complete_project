var roleUrl = "/eASI/easi/role/";

/*
 * Saving New Role
 */
function saveRole() {
    var validator = $("#roleForm").validate({
        // $("#moduleForm").validate({
        rules: {
            name: "required",
            description: "required",
            ordering: "required",
        },
        messages: {
            name: "Role Name Required",
            description: "Role Description Required",
            ordering: "Role Ordering Required",
        }
    });
    if (validator.form()) {
        $.ajax({
            url: roleUrl,
            type: "post",
            data: roleInfoJson(),
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("role successfully saved");
                populateRolesNew();
                backtonew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}

function backtonew()
{
	$("#roleForm").trigger("reset");
}


 
function roleInfoJson() {
    return JSON.stringify({
        "name": $('#name').val(),
        "active": $('#isActive').is(':checked'),
        "description": $('#description').val(),
        "ordering": $('#ordering').val()
    });
}

/*
 * Now Using populateRolesNew() for populating Roles
 */
function populateRoles() {
    $.ajax({
        url: roleUrl + "roles",
        type: "get",
        success: function (data) {
            var roles = data.payload;
            console.log(roles)
            var options = $("#roles");
            var parent = $("#parent");
            options.children().remove();
            options.append($("<option />").val("").text("Select Role"));
            $.each(roles, function (index) {
                var role = roles[index]
                console.log(role);

                options.append($("<option />").val(role.code).text(role.name));
                parent.append($("<option />").val(role.code).text(role.name));
            });
        },
        
        beforeSend: function () {
            // Code to display spinner
            $('#loader').show()
            //waitingDialog.show('Custom message');
        },
        complete: function () {
            // Code to hide spinner.
            $('#loader').hide();
            // waitingDialog.hide('Custom message');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

/*
 * Creating Table Format of Roles
 */
function populateRolesNew() {
    $.ajax({
        url: roleUrl + "roles",
        type: "get",
        success: function (data) {
            var roles = data.payload;
            $('#roleTable td').remove();
            console.log(roles)
            $(function () {
                $.each(roles, function (index) {
                    var role = roles[index]
                    var code = role.code;
                    var activeflag="";
                    if(role.active='true')
                    	{
                    	activeflag="Yes";
                    	}
                    else
                    	{
                    	activeflag="No";
                    	}
                    var $tr = $('<tr>').append(
                        $('<td>').text(1 + index),
                        $('<td>').text(role.name),
                        $('<td>').text(role.description),
                        $('<td>').text(role.ordering),
                       
                        $('<td>').text(activeflag),
                        
                        $('<td>').html(
                            "<a href=javascript:void class='tooltip-top' data-tooltip='Delete' onclick=deleteRole('" + code + "')><i class='fa fa-trash'></i></a>"/*/*/)
                    ).appendTo('#roleTable');

                });
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

var permissions;
var permissionsMap = [];

function roles() {
    var role = $('#roles').val();

    $.ajax({
        url: roleUrl + role,
        type: "get",
        success: function (data) {
            permissions = data.payload.permissions;
            console.log(permissions);
            var roleTable = $("#rolesTable");
            roleTable.html('');
            roleTable.append(updateRoleTable())
        },

        beforeSend: function () {
            // Code to display spinner
            $('#loader').show()
            //waitingDialog.show('Custom message');
        },
        complete: function () {
            // Code to hide spinner.
            $('#loader').hide();
            // waitingDialog.hide('Custom message');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function updateRoleTable() {

    var table = document.createElement('table');

    var tr = document.createElement('tr');

    var th = document.createElement('th');
    var cellText = document.createTextNode("Module");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Page");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Read");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Write");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Edit");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Delete");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Accept");
    th.appendChild(cellText);
    tr.appendChild(th);

    th = document.createElement('th');
    cellText = document.createTextNode("Reject");
    th.appendChild(cellText);
    tr.appendChild(th);
    table.append(tr);

    $.each(permissions, function (index) {
        var permission = permissions[index];
        permissionsMap[permission.moduleCode + '-' + permission.pageCode] = permission;

        tr = document.createElement('tr');

        var td = document.createElement('td');
        td.id = permission.moduleCode;
        cellText = document.createTextNode(permission.moduleName);
        td.appendChild(cellText);
        tr.appendChild(td);

        td = document.createElement('td');
        td.id = permission.pageCode;
        cellText = document.createTextNode(permission.pageName);
        td.appendChild(cellText);
        tr.appendChild(td);

        td = document.createElement('td');
        var chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.readAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);

        td = document.createElement('td');
        chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.writeAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);

        td = document.createElement('td');
        chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.editAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);


        td = document.createElement('td');
        chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.deleteAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);

        td = document.createElement('td');
        chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.acceptAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);

        td = document.createElement('td');
        chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.checked = permission.rejectAllowed;
        td.appendChild(chkBox);
        tr.appendChild(td);
        table.append(tr);
    });

    return table;
}

function savePermissions() {

    console.log(permissionsMap);

    var rolesDiv = document.getElementById("rolesTable");
    var table = rolesDiv.getElementsByTagName('table')[0];
    for (var i = 1, row; row = table.rows[i]; i++) {

        var module = row.cells[0].id;
        var page = row.cells[1].id;
        var readAllowed = row.cells[2].children[0].checked;
        var writeAllowed = row.cells[3].children[0].checked;
        var editAllowed = row.cells[4].children[0].checked;
        var deleteAllowed = row.cells[5].children[0].checked;
        var acceptAllowed = row.cells[6].children[0].checked;
        var rejectAllowed = row.cells[7].children[0].checked;

        var permission = permissionsMap[module + '-' + page];
        if (permission) {
            permission.readAllowed = readAllowed;
            permission.writeAllowed = writeAllowed;
            permission.editAllowed = editAllowed;
            permission.deleteAllowed = deleteAllowed;
            permission.acceptAllowed = acceptAllowed;
            permission.rejectAllowed = rejectAllowed;
        }
    }

    console.log(permissionsMap);


    var role = {};
    var permissions = [];

    Object.keys(permissionsMap).forEach(function (key) {
        permissions.push(permissionsMap[key]);
    });
    console.log(permissions)

    role.code = $('#roles').val();
    role.permissions = permissions;


    $.ajax({
        url: roleUrl + "assign-permission",
        type: "put",
        data: JSON.stringify(role),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            //alert("permission successfully saved");
            populateRoles();
        },
        beforeSend: function () {
            // Code to display spinner
            //$('#savePermission').show()
            waitingDialog.show('Please Wait.........');
        },
        complete: function () {
            // Code to hide spinner.
            // $('#savePermission').hide();
            waitingDialog.hide('Please Wait.........');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });

}

/*
 * Deleting Role by Code
 */
function deleteRole(code) {
    if (confirm("Are you sure want to delete this Role?")) {
        $.ajax({
            url: roleUrl + code,
            type: "delete",
            contentType: "application/json",
            success: function (data) {
                console.log("success");
                alert("Role Deleted Successfully");
                populateRolesNew();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("failure");
            }
        });
    }
}




/*
 * Add Role
 */
function addRole() {

	alert("asaa");
    $.ajax({
        url: "/eASI/easi/addrole/",
        type: "post",
        data: addRoleInfoJson(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            alert("Add Role successfully saved");
            //populateRolesNew();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}


function addRoleInfoJson() {
    return JSON.stringify({
        "role": $('#roles').val(),
        "module": $('#modules').val(),
        "accessLevel": $('#accessLevel').val(),
        "parent": $('#parent').val(),
        "allow": $('#allow').val()
    });
}

var staticUrl = "/eASI/easi/static/data/";

function populateDropDown(options, list, defaultValue) {
    options.children().remove();
    options.append($("<option />").val("").text(defaultValue));
    $.each(list, function (index) {
        var data = list[index];
        options.append($("<option />").val(data.id).text(data.value));
    });
}

function fetchCityPincode() {
    $.ajax({
        url: staticUrl + "pincode/" + $('#cities').val(),
        type: "get",
        success: function (data) {
            $("#pincode").text(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateCitiesByDistrict() {
    $.ajax({
        url: staticUrl + "cities/" + $('#districts').val(),
        type: "get",
        success: function (data) {
            var options = $("#cities");
            populateDropDown(options, data, "Select city");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateStates() {
    $.ajax({
        url: staticUrl + "states",
        type: "get",
        success: function (data) {
            var options = $("#states");
            populateDropDown(options, data, "Select state");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateDistrictsByState() {
    $.ajax({
        url: staticUrl + "districts/" + $('#states').val(),
        type: "get",
        success: function (data) {
            var options = $("#districts");
            populateDropDown(options, data, "Select district");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateDistrictsByState() {
    $.ajax({
        url: staticUrl + "districts/" + $('#states').val(),
        type: "get",
        success: function (data) {
            var options = $("#districts");
            populateDropDown(options, data, "Select district");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateRegions() {
    $.ajax({
        url: staticUrl + "regions",
        type: "get",
        success: function (data) {
            var options = $("#regions");
            populateDropDown(options, data, "Select region");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateSubcircleByRegion() {
    $.ajax({
        url: staticUrl + "subcircles/" + $('#regions').val(),
        type: "get",
        success: function (data) {
            var options = $("#subcircles");
            populateDropDown(options, data, "Select subcircle");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateMonumentsBySubcircle() {
    $.ajax({
        url: staticUrl + "monuments/" + $('#subcircles').val(),
        type: "get",
        success: function (data) {
            var options = $("#monuments");
            populateDropDown(options, data, "Select monument");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}
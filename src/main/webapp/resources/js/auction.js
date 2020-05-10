var auctionUrl = "/eASI/easi/auction/";
var committee = [];
var materials = []

function populateAuctionsInfo() {
    $.ajax({
        url: auctionUrl + "auctions",
        type: "get",
        success: function (data) {
            var auctions = data.payload;
            auctions.forEach(function (item, index) {
                console.log(item);
                var status = "Pending";
                if (item.isApproved == 1) {
                	status = "Approved";
                }
                else if (item.forwardStatus == 0) {
                	status = "Rejected";
                }
                else if(item.forwardStatus == 2 || item.forwardStatus == 3) {
                	status = "Pending";
                }
                var $tr1 = $('<tr>').append(
                    $('<td>').text(index + 1),
                    $('<td>').text(item.referenceNumber),
                    $('<td>').text(item.totalItems),
                    $('<td>').text(item.totalQuantity),
                    $('<td>').text(item.role + ' : ' +status),
                    $('<td>').append('<a href="auctionview-'+(item.id)+'" class="tooltip-top" data-tooltip="View"><i\n' +
                        '                                        class="fa fa-eye"></i></a>')
                );
                $tr1.appendTo('#auctionsInfo');
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function addMember() {

    var member = {};
    var role = {};
    role['code'] = $('#roles').val();
    member['name'] = $('#memberName').val();
    member['emailId'] = $('#memberEmailId').val();
    member['role'] = role;

    if (member.name
        && member.emailId) {
        committee.push(member);

        var $tr1 = $('<tr>').append(
            $('<td>').text(committee.length),
            $('<td>').text($('#roles  option:selected').text()),
            $('<td>').text(member.name),
            $('<td>').text(member.emailId)
        );
        $tr1.appendTo('#auction_committee');

        $('#memberName').val('');
        $('#memberEmailId').val('');
    }

}

function addProduct() {

    var product = {};
    product['name'] = $('#materialName').val();
    product['unit'] = $('#materialUnit').val();
    product['quantity'] = $('#materialQuantity').val();
    product['remarks'] = $('#materialRemarks').val();


    if (product.name
        && product.unit
        && product.quantity
        && product.remarks) {

        materials.push(product);
        var $tr1 = $('<tr>').append(
            $('<td>').text(materials.length),
            $('<td>').text(product.name),
            $('<td>').text(product.unit),
            $('<td>').text(product.quantity),
            $('<td>').text(product.remarks)
        );
        $tr1.appendTo('#auction_product');

        $('#materialName').val('');
        $('#materialUnit').val('');
        $('#materialQuantity').val('');
        $('#materialRemarks').val('');
    }

}

function auctionInfoJson(isSubmitted) {
    return JSON.stringify({
        "isSubmitted": isSubmitted,
        "auctionCommittees": committee,
        "auctionMaterials": materials
    });
}

function submitAuction() {
    $.ajax({
        url: auctionUrl,
        type: "post",
        data: auctionInfoJson(),
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            alert("auction successfully saved");
            window.location = auctionUrl + "view";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("failure");
        }
    });
}

function populateApprovedAuctionsInfo() {
	$.ajax({
		url: auctionUrl + "approvedAuctions",
		type: "get",
		success : function (data) {
			var auctions = data.payload;
			auctions.forEach(function (item, index) {
				console.log(item);
				var amount = item.totalAmount;
				if (amount == 0) {
					amount = '';
				}
				
				var $tr1 = $('<tr>').append(
					$('<td>').text(index + 1),
					$('<td>').text(item.referenceNumber),
					$('<td>').text(item.totalItems),
					$('<td>').text(item.totalQuantity),
					$('<td>').text(amount),
					$('<td>').append('<a href="auctionProcess-'+(item.id)+'" class="tooltip-top" data-tooltip="View"><i\n' +
                        '                                        class="fa fa-eye"></i></a>'))
                    $tr1.appendTo('#approvedAuctionInfo');
			});
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});
}
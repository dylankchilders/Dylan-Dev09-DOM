$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
  });

  $("#userFontInput").on("click", function(e) {
    var inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont);
    var finalOrder = inputFont;
  });

  $("#confirmOrder").on("click", function(e) {
    event.preventDefault();
    var previewMsg = $("#previewScreen").append(previewMsg);
    $("#previewScreen").animate({ right: "0px" }, 250);
  }); //close click event

  $("#cancelPreview").on("click", function(e) {
    event.preventDefault();

    $("#previewScreen").toggle();
  });
}); //close doc.ready
//update pricing

function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  if (fontUpgrade) {
    costPerTile = 10;
  } else {
    costPerTile = 5;
  }

  var subTotal = signLength * costPerTile;
  if (signLength > 0) {
    var shipping = 7;
  } else {
    var shipping = 0;
  }

  var grandTotal = subTotal + shipping;
  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);
  return grandTotal;
}

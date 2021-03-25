

order = JSON.parse(localStorage.getItem('orderDetails'));
theName = (order[0].productName);
thePrice = (order[0].price);
$('#cartPrice').text(thePrice);
theQuantity = (order[0].quantity);
$('#finQuan').text(theQuantity);
$('#siUnit').text(thePrice);
$('#subtotal2').text(thePrice);

total = parseFloat(thePrice) * parseInt(theQuantity);

var newTotal = localStorage.getItem('total');
if (total > 120) {

    // $('#toUnit').text(total - 12);
    $('#addition').text(newTotal - 12);
    $('#ship').text(12)
} else {
    
    $('#addition').text(newTotal);
    $('#ship').text(0)
}
$('#toUnit').text(newTotal);

function discount2() {
 
    if ($('#txt').val().length === 5) {
        total = parseFloat(total) / 2;
        $('#addition').text(total);
        alert(total);
    }
}
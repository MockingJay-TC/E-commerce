

order = JSON.parse(localStorage.getItem('orderDetails'));
theName = (order[0].productName);
thePrice = (order[0].price);
$('#cartPrice').text(thePrice);
theQuantity = (order[0].quantity);
$('#finQuan').text(theQuantity);
$('#siUnit').text(thePrice);
$('#subtotal2').text(thePrice);

total = parseFloat(thePrice) * parseInt(theQuantity);
if (total > 120) {

    // $('#toUnit').text(total - 12);
    $('#addition').text(total - 12);
    $('#ship').text(12)
} else {
    
    $('#addition').text(total);
    $('#ship').text(0)
}
$('#toUnit').text(total);

function discount2() {
 
    if ($('#txt').val().length === 5) {
        total = parseFloat(total) / 2;
        $('#addition').text(total);
        alert(total);
    }
}
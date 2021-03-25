order = JSON.parse(localStorage.getItem('orderDetails'));
theName = (order[0].productName);
thePrice = (order[0].price);
$('#cartPrice').text(thePrice);
theQuantity = (order[0].quantity);
$('#finQuan').text(theQuantity);
$('#siUnit').text(thePrice);
$('#subtotal2').text(thePrice);

total = parseFloat(thePrice) * parseInt(theQuantity);
alert(total);
$('#toUnit').text(total);
$('#addition').text(total);
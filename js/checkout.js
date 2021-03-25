$(document).ready(function () {



    $('#checkitin').on('click', () => {
        $('#me').text(theQuantity);
    })

    order = JSON.parse(localStorage.getItem('orderDetails'));
    theName = (order[0].productName);
    thePrice = (order[0].price);
    $('#cartPrice').text(thePrice);
    theQuantity = (order[0].quantity);
    $('#theQuantity').text(theQuantity);
    $('#siUnit').text(thePrice);
    $('#subtotal').text(thePrice);

    total = parseFloat(thePrice) * parseInt(theQuantity);

    $('#toUnit').text(total);
    $('#addition').text(total);


    $('#remove').on('click', () => {
        $('#goods').css('visibility', 'hidden');
        localStorage.clear();
        $('#theQuantity').text(0);
        $('#siUnit').text(0);
        $('#subtotal').text(0);
        $('#toUnit').text(0);
        $('#addition').text(0);
    })








})

function discount() {
    code = $('#txt').val();
    if (code.length === 5) {
        total = parseFloat(total) / 2;
        $('#addition').text(total);
        alert(total);

        localStorage.setItem('total', total)
    }
}
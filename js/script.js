// writing in javascript first then convert to jquery



$('#promoPop').fadeIn('slow');


let input = document.querySelector('#change');


$('#plu').on("click", () => {
    
    if (Number(input.innerText) <= 9) {
        console.log(input.innerText);
        input.innerText = parseInt(input.innerText) + 1;
        $('#me').text(input.innerText);
        // $('#me').text($('#change').text());
    }
});

$('#min').on("click", () => {
    if (input.innerText > 1) {
        input.innerText = parseInt(input.innerText) - 1;
        $('#me').text($('#change').text());
    } 
    else {
        input.innerText = 1;
    }
});

// **********************************************************************************8

let hoodie = document.querySelector("#hoodie");
let cute = document.querySelector("#cute");
let back = document.querySelector("#back");
let current = document.querySelector("#currentImg");

$('#hoodie').on("click", () => {
    current.src = "images/hoodie.jpg";
    $("#hoodie").css("border", "3px solid #002b5c");
    $("#cute").css("border", "3px solid #cecece");
    $("#back").css("border", "3px solid #cecece");
});

$('#cute').on("click", () => {
    current.src = "images/cutie.jpg";
    $("#cute").css("border", "3px solid #002b5c");
    $("#hoodie").css("border", "3px solid #cecece");
    $("#back").css("border", "3px solid #cecece");
});

$('#back').on("click", () => {
    current.src = "images/back.jpg";
    $("#back").css("border", "3px solid #002b5c");
    $("#cute").css("border", "3px solid #cecece");
    $("#hoodie").css("border", "3px solid #cecece");
});
// ********************************************************************************************************

// $("#currentImg").elevateZoom();

$(".wish").on("click", () => {
    $("#wish").css("color", "red");
});

$("#bagit").on("click", () => {
    $("#popup").slideDown("slow");
    $("#popup").css("top", "0");

    inputVal = parseInt($('#change').text())

});

$("#close").on("click", () => {
    $("#popup").fadeOut("slow");
    $("#popup").css("top", "-1000");

});

// test


// $('#checkitin').on('click', () => {
//     // setDetails();
//     order = JSON.parse(localStorage.getItem('orderDetails'));
//     theName = (order[0].productName);
//     alert(theName);
//     thePrice = (order[0].price);
//     alert(thePrice);
//     $('#cartPrice').text(thePrice);
//     theQuantity = (order[0].quantity);
//     $('#theQuantity').text(theQuantity);
//     $('#siUnit').text(thePrice);

// });
// ********************************************************************************************************

$('#closeme').on('click', () => {
    $('#promoPop').fadeOut('fast');
    $('#overlay').css('display', 'none')
    $('#overlay').slideUp('slow');
})

$('#unlock').on('click', () => {
    if ($('#unlockEmail').val() === "") {
        alert("Enter Email")
    } else {
        $('#promoPop').fadeOut('fast');
        $('#overlay').css('display', 'none')
        $('#overlay').slideUp('slow');
    }
})
// **************************************************************************************************************
// adding items to bag
// discount
inputVal = $('#change').text();

inputVal = parseInt(inputVal);

unitPrice = $('#unitPrice').text();
unitPrice = parseFloat(unitPrice);
thePrice = (unitPrice * parseInt($('#change').text()));

totalPrice = $('totalPrice').text();
console.log(totalPrice);
totalPrice = parseInt($('#change').text()) * parseFloat($('#unitPrice').text());
// console.log(total2);


$('#checkitin').on('click', () => {
    // localStorage.setItem('CartTotal', totalPrice);
  localStorage.setItem('total', $('#finP').text()) ;
});




function getValues() {
    amount = parseFloat($('#finP').text()).toFixed(2)
    // console.log("unitPrice: " + amount);
    quantity = parseInt($('#quan').text())
    // console.log("quantity: " + quantity);
    total = amount * quantity;
    // console.log("totalPrice: " + total);
    // second thing
    amount2 = parseFloat($('#unitPrice').text()).toFixed(2)
    // console.log("UnitPrice 2: " + amount2);
    quantity2 = parseInt($('#change').text())
    // console.log("Quantity 2: " + quantity2);
    total2 = amount2 * quantity2;
    total2 = parseFloat(total2).toFixed(2)
    // console.log("totalPrice 2: " + total2);
    // updating
    $('#finP').text(total2);
    $('#quan').text(quantity2);

    setDetails();

}

function sendValues() {




    window.open('http://127.0.0.1:5500/pages/checkout.html', '_top');
}

var numberOfItems;

if (localStorage.getItem('numberOfItems') == null) {
    numberOfItems = 0;
} else {
    numberOfItems = localStorage.getItem('numberOfItems');
}


function setDetails() {

    numberOfItems += 1;
    details = {

        productName: $('#pName').text(),
        price: $('#unitPrice').text(),
        quantity: $('#change').text(),
        size: $('#sizeNo').val(),
        color: $('#color').val(),
        id: numberOfItems
    }
    // var initialOrder;
    orderDetails = [details]

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // if (localStorage.getItem('orderDetails') != null) {
    //     initialOrder = JSON.parse(localStorage.getItem('orderDetails'));
    //     initialOrder.push(details);
    //     localStorage.setItem('orderDetails', JSON.stringify(initialOrder));
    // } else {
    //     localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    // }
    // goods.html(fetchOrders());
}

// function fetchOrders(){
//     let order = JSON.parse(localStorage.getItem('orderDetails'));
//     // console.log(order[0].productName);
// }



function removeCart() {

    $('#goodies').hide();
}

$('#qty').change(function () {
    $('#displayqty').text($(this).val());
})



// get values function
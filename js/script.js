// writing in javascript first then convert to jquery

$('#promoPop').fadeIn('slow');


let increment = document.querySelector("#plu");
let decrement = document.querySelector("#min");
let input = document.querySelector('#change');






increment.addEventListener("click", () => {
    if (input.innerText <= 9) {
        input.innerText = parseInt(input.innerText) + 1;
        // $('#me').text() = input.innerText;
        $('#me').text($('#change').text());

    }
});

decrement.addEventListener("click", () => {
    if (input.innerText > 1) {
        input.innerText = parseInt(input.innerText) - 1;
        $('#me').text($('#change').text());
    } else {
        input.innerText = 1;
    }
});

// **********************************************************************************8

let hoodie = document.querySelector("#hoodie");
let cute = document.querySelector("#cute");
let back = document.querySelector("#back");
let current = document.querySelector("#currentImg");

hoodie.addEventListener("click", () => {
    current.src = "images/hoodie.jpg";
    $("#hoodie").css("border", "3px solid #002b5c");
    $("#cute").css("border", "3px solid #cecece");
    $("#back").css("border", "3px solid #cecece");
});

cute.addEventListener("click", () => {
    current.src = "images/cutie.jpg";
    $("#cute").css("border", "3px solid #002b5c");
    $("#hoodie").css("border", "3px solid #cecece");
    $("#back").css("border", "3px solid #cecece");
});

back.addEventListener("click", () => {
    current.src = "images/back.jpg";
    $("#back").css("border", "3px solid #002b5c");
    $("#cute").css("border", "3px solid #cecece");
    $("#hoodie").css("border", "3px solid #cecece");
});

$("#currentImg").elevateZoom();

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
    alert(totalPrice);

});


$.get("./json/products.json", function (response) {
    response.forEach((product) => {
        console.log(product.name + ":" + product.price);
    });
});


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

totalPrice = parseInt($('#change').text()) * parseFloat($('#unitPrice').text())


function getValues() {
    amount = parseFloat($('#finP').text()).toFixed(2)
    console.log("unitPrice: " + amount);
    quantity = parseInt($('#quan').text())
    console.log("quantity: " + quantity);
    total = amount * quantity;
    console.log("totalPrice: " + total);

    // second thing

    amount2 = parseFloat($('#unitPrice').text()).toFixed(2)
    console.log("UnitPrice 2: " + amount2);
    quantity2 = parseInt($('#change').text())
    console.log("Quantity 2: " + quantity2);
    total2 = amount2 * quantity2;
    total2 = parseFloat(total2).toFixed(2)
    console.log("totalPrice 2: " + total2);

    // updating
    $('#finP').text(total2);
    $('#quan').text(quantity2);

}


function sendValues(){




    window.open('http://127.0.0.1:5500/pages/checkout.html', '_top');
}
function applyDiscount(){
    $('#txt').text();
}
function setDetails(){
    
    numberOfItems +=1;
    details = {
        
        productName: $('#pName').text(),
        price: $('#price').text(),
        quantity: $('#quantity').text(),
        size: $('#sizeNo').val(),
        color: $('#color').val(),
        id: numberOfItems 
}
    var initialOrder;
    orderDetails = [details]
    
    if(localStorage.getItem('orderDetails') != null){
        initialOrder = JSON.parse(localStorage.getItem('orderDetails'));
        initialOrder.push(details);
        localStorage.setItem('orderDetails', JSON.stringify(initialOrder));
    }
    else {
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    }
    goods.html(fetchOrders());
}



function removeCart(){

    $('#goodies').hide();
}

$('#qty').change(function(){
    $('#displayqty').text($(this).val());
})



// get values function
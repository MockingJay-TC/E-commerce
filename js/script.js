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
    alert(thePrice);
    
});


$.get("./json/products.json", function (response) {
    response.forEach((product) => {
        console.log(product.name + ":" + product.price);
    });
});


$('#closeme').on('click', ()=>{
    $('#promoPop').fadeOut('fast');
    $('#overlay').css('display', 'none')
    $('#overlay').slideUp('slow');
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
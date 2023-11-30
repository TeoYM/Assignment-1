function buyProduct() {
    var name = prompt("Name: ");
    var email = prompt("Email: ")
    var houseAdd = prompt("House address: ");
    var postalCode = prompt("Postal code: ");
    var unit = prompt("Unit Number: ");
    var creditCard = prompt("Credit Card Number:");

    alert("Product purchased! Thank you, " + name + ", for shopping with us. \n\nConfirmation has been sent to " + email + ".\n\nProduct will be shipped to " + houseAdd + ", " + postalCode + ", " + unit + ".\n\nCredit Card No: " + creditCard);
}
var buyButtons = document.querySelectorAll(".buybutton");

for (var button of buyButtons) {
    button.addEventListener("click", buyProduct);
}
        
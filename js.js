function buyProduct() {
    alert("Product purchased! Thank you for shopping with us.");
}

var buyButtons = document.querySelectorAll(".buybutton");

for (var button of buyButtons) {
    button.addEventListener("click", buyProduct);
}
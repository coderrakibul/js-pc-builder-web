function updatePrice(itemId, price) {
    const productCost = document.getElementById(itemId);
    productCost.innerText = price;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;

};

function onClick(buttonId, itemId, price) {
    document.getElementById(buttonId).addEventListener("click", function () {
        updatePrice(itemId, price);
    })
}

onClick("eightGB", "memory-cost", 200);
onClick("sixteenGB", "memory-cost", 350);
onClick("ssd1", "storage-cost", 250);
onClick("ssd2", "storage-cost", 400);
onClick("ssd3", "storage-cost", 700);
onClick("free-delivery", "delivery-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);


const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function () {
    const code = document.getElementById("promo-input").value;
    if (code === fakeCode) {
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
    } else {
    }
})

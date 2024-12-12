let orders = {};

const increaseEls = document.getElementsByClassName("increase");
for (const increaseEl of increaseEls) {
    increaseEl.addEventListener("click", (e) => {
        const quantity = e.target.previousElementSibling;
        if (Number(quantity.textContent) < 10) {
            quantity.textContent = Number(quantity.textContent) + 1;
        }
    })
}

const decreaseEls = document.getElementsByClassName("decrease");
for (const decreaseEl of decreaseEls) {
    decreaseEl.addEventListener("click", (e) => {
        const quantity = e.target.nextElementSibling;
        if (Number(quantity.textContent) > 0) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }
    })
}

let itemsAdded = document.getElementById("item-add");
const addBtns = document.getElementsByClassName("add-btn");

for (const addEl of addBtns) {
    addEl.addEventListener("click", (e) => {
        let name = e.target;
        for (let i = 0; i < 4; i++) {
            name = name.previousElementSibling;
        }
        name = name.textContent;
        let quantity = e.target.previousElementSibling.children[1].textContent;
        const items = [];
        for (const item of itemsAdded.children) {
            items.push(item.children[0].textContent);
        }
        if (!items.includes(name)) {
            orders[name] = Number(quantity);
            const normalName = name;
            name = name.toLowerCase().replaceAll(/\s/g,'');
            if (quantity > 0) {
                itemsAdded.innerHTML += `<li class="item-cart"><span id="${name}">${normalName}</span>: <span id="item-qty-${name}">${quantity}</span><i class="cart-remove fa-solid fa-x"></i></li>`;
            }
        } else {
            orders[name] = Number(quantity);
            name = name.toLowerCase().replaceAll(/\s/g,'');
            const itemQty = document.getElementById(`item-qty-${name}`);
            if (Number(quantity) === 0) {
                itemQty.parentElement.remove();
            }
            if (Number(quantity) <= 10) {
                itemQty.textContent = Number(quantity);
            }
        }
        for (const each of document.getElementsByClassName('cart-remove')) {
            each.addEventListener("click", (e) => {
                e.target.parentElement.remove();
                const finalName = e.target.previousElementSibling.previousElementSibling.textContent;
                delete orders[finalName];
            })
        }
    })
}
console.log(orders);


const checkoutBtn = document.getElementById("checkout-btn");
const checkoutDiv = document.getElementById("checkout");
let total = 0;
checkoutBtn.addEventListener("click", () => {
    for (const each of document.getElementsByClassName("qty")) {
        each.children[1].textContent = "0";
    }
    checkoutDiv.hidden = false;
    for (const [key, value] of Object.entries(orders)) {
        switch (key) {
            case "Seafood Plate":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $11.99 Each</li>`;
                total += Math.floor(11.99 * value);
                break;
            case "Hamburger Meal":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $10.99 each</li>`;
                total += Math.floor(10.99 * value);
                break;
            case "Fish and Rice":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $12.99 each</li>`;
                total += Math.floor(12.99 * value);
                break;
            case "Apple":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $1.99 each</li>`;
                total += Math.floor(1.99 * value);
                break;
            case "Orange":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $1.99 each</li>`;
                total += Math.floor(1.99 * value);
                break;
            case "Banana":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $1.99 each</li>`;
                total += Math.floor(1.99 * value);
                break;
            case "Soda":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $1.99 each</li>`;
                total += Math.floor(1.99 * value);
                break;
            case "Beer":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $5.99 each</li>`;
                total += Math.floor(5.99 * value);
                break;
            case "Juice":
                document.getElementById("orders").innerHTML += `<li>${key}: ${value}: $2.99 each</li>`;
                total += Math.floor(2.99 * value);
                break;
        }
    }
    if (total > 0) {
        document.getElementById("orders").innerHTML += `<li>Total: $${total}</li>`;
    }
})

document.getElementById("checkout-close-btn").addEventListener("click", () => {
    document.getElementById("orders").innerHTML = "";
    total = 0;
    checkoutDiv.hidden = true;
})

const form = document.getElementById("pay");
document.getElementById("payment-close-btn").addEventListener("click", () => {
    document.getElementById("orders").innerHTML = "";
    total = 0;
    form.hidden = true;
})


document.getElementById("payment").addEventListener("click", () => {
    checkoutDiv.hidden = true;
    form.hidden = false;
})

document.getElementById("thanks-close-btn").addEventListener("click", () => {
    document.getElementById("orders").innerHTML = "";
    total = 0;
    document.getElementById("thanks").hidden = true;
})

document.getElementById("submit-btn").addEventListener("click", () => {
    document.getElementById("orders").innerHTML = "";
    form.hidden = true;
    total = 0;
    document.getElementById("thanks").hidden = false;
})

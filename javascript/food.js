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

const itemsAdded = document.getElementById("item-add");
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
            const normalName = name;
            name = name.toLowerCase().replaceAll(/\s/g,'');
            if (quantity > 0) {
                itemsAdded.innerHTML += `<li class="item-cart"><span id="${name}">${normalName}</span>: <span id="item-qty-${name}">${quantity}</span><i class="cart-remove fa-solid fa-x"></i></li>`;
            }
        } else {
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
            })
        }
    })
}




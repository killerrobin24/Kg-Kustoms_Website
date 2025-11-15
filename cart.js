let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){
    const cartPage = document.getElementById("cart-page");

    if (cart.length ===0){
        cartPage.innerHTML = "<h2> Your cart is empty.<h2>";
        return;
    }
    let html = "";
    cart.forEach((item,index) => {
        html += `
        <div class="cart-item">
        
            <div class="cart-detials">
                <h3> ${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        
            <div class="cart-actions">
            <button class=quantity-btn" onclick=changeqty(${index}, -1)">-</button><span>${item.quantity}</span>
            <button class=quantity=btn" onclick="changeQty(${index}, 1)">+</button><span class="remove=btn" onclick="removeItem(${index})">Remove</span>
            </div>
        </div>
        `;
    });
    html += `
        <div class="total">
            total: $${calculateTotal().toFixed(2)}
        </div>
        `;

        cartPage.innerHTML = html;
}
function changeQty(index, amount){
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0){
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}

function calculateTotal(){
    return cart.reduce((Sum, item) => sum + item.price * item.quantity, 0);
}
displayCart();
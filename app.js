let cart = JSON.parse(localStorage.getItem("cart")) ||[];
updateCartCount();
document.querySelectorAll(".add-to-cart").forEach(button => 
    {button.addEventListener("click",() => {
    const product ={ 
        id: button.dataset.id,
        name:button.dataset.name
        price: Number(button.dataset.price),
        quantity: 1
    };
    addToCart(product);
    });
});

function addToCart(product){
    const existing = cart.find(item => item.id === product.id);

    if(existing){
        existing.quantity += 1;
    }else{
        cart.push(product);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    }
    function updateCartCount(){
        let count = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById("cart-count").textContent + count;
    }
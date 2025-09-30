function renderCart() {
    const ordersList = document.getElementById('orders-list');
    const ordersTotal = document.getElementById('orders-total');
    const paymentOptions = document.getElementById('payment-options');
    const checkoutBtn = document.getElementById('checkout-btn');
    const confirmation = document.getElementById('confirmation');
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!cart.length) {
        ordersList.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
        ordersTotal.textContent = '';
        paymentOptions.style.display = 'none';
        checkoutBtn.style.display = 'none';
        return;
    }

    let html = `<table>
        <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Action</th>
        </tr>`;
    let total = 0;
    cart.forEach((item, idx) => {
        const subtotal = item.qty * item.price;
        total += subtotal;
        html += `<tr>
            <td>${item.name}</td>
            <td>
                <button class="qty-btn" data-idx="${idx}" data-action="dec">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" data-idx="${idx}" data-action="inc">+</button>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button class="remove-btn" data-idx="${idx}">Remove</button>
            </td>
        </tr>`;
    });
    html += `</table>`;
    ordersList.innerHTML = html;
    ordersTotal.textContent = `Total: $${total.toFixed(2)}`;
    paymentOptions.style.display = 'block';
    checkoutBtn.style.display = 'block';

    // Add event listeners for qty and remove buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.idx, 10);
            const action = this.dataset.action;
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            if (action === 'inc') {
                cart[idx].qty += 1;
            } else if (action === 'dec') {
                cart[idx].qty = Math.max(1, cart[idx].qty - 1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.idx, 10);
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.splice(idx, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });
}

function clearCart() {
    localStorage.removeItem('cart');
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();

    const checkoutBtn = document.getElementById('checkout-btn');
    const confirmation = document.getElementById('confirmation');
    checkoutBtn && checkoutBtn.addEventListener('click', function() {
        const payment = document.querySelector('input[name="payment"]:checked').value;
        const date = new Date();
        confirmation.innerHTML = `
            <strong>Checkout Complete!</strong><br>
            <br>
            <strong>Payment Method:</strong> ${payment}<br>
            <strong>Date:</strong> ${date.toLocaleString()}<br>
            <br>
            Your order will be processed soon. Thank you!
        `;
        confirmation.style.display = 'block';
        clearCart();
        document.getElementById('orders-list').innerHTML = '';
        document.getElementById('orders-total').textContent = '';
        document.getElementById('payment-options').style.display = 'none';
        checkoutBtn.style.display = 'none';
    });
});

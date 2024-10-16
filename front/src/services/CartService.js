export async function addProductToCart(name, price) {
    await fetch('http://localhost/cart/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price }),
    });
}

export async function getCartTotal() {
    const response = await fetch('/cart/total');
    const data = await response.json();
    return data.total;
}

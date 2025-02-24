// Função para adicionar itens ao carrinho
function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para carregar o carrinho ao abrir a página
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxaElement = document.getElementById('taxa');
    const totalElement = document.getElementById('total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    // Limpa a lista de itens
    cartItems.innerHTML = '';

    // Adiciona os itens do carrinho à lista
    cart.forEach(({ item, price }) => {
        const li = document.createElement('li');
        li.textContent = `${item} - R$ ${price.toFixed(2)}`;
        cartItems.appendChild(li);
        subtotal += price;
    });

    // Calcula a taxa do garçom (5%)
    const taxa = subtotal * 0.05;
    const total = subtotal + taxa;

    // Atualiza os valores na tela
    subtotalElement.textContent = subtotal.toFixed(2);
    taxaElement.textContent = taxa.toFixed(2);
    totalElement.textContent = total.toFixed(2);
}

// Função para finalizar a compra
function checkout() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems.children.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
        return;
    }

    const mesa = prompt('Por favor, informe o número da sua mesa:');
    if (!mesa) {
        alert('Número da mesa é obrigatório!');
        return;
    }

    alert(`Compra finalizada!\nMesa: ${mesa}\nTotal: R$ ${document.getElementById('total').textContent}\nObrigado pela preferência!`);
    clearCart();
}

// Função para limpar o carrinho
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// Função para abrir o modal e carregar o modelo 3D
function view3DModel(modelPath) {
    const modal = document.getElementById('modal3D');
    const modelViewer = document.getElementById('3d-model');

    modelViewer.src = modelPath;
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal3D');
    modal.style.display = 'none';
}

// Carrega o carrinho ao abrir a página
if (window.location.pathname.includes('carrinho.html')) {
    loadCart();
}

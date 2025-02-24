let cart = [];
let total = 0;

// Função para adicionar itens ao carrinho
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - R$ ${cartItem.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

// Função para finalizar a compra
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
        return;
    }

    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}\nObrigado pela preferência!`);
    clearCart();
}

// Função para limpar o carrinho
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

// Função para abrir o modal e carregar o modelo 3D
function view3DModel(modelPath) {
    const modal = document.getElementById('modal3D');
    const modelViewer = document.getElementById('3d-model');
    
    // Define o caminho do modelo 3D
    modelViewer.src = modelPath;
    
    // Abre o modal
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal3D');
    modal.style.display = 'none';
}
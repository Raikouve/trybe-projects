const baseUrl = 'https://api.mercadolibre.com/sites/MLB';
const totalPrice = document.querySelector('.total-price');
const cartList = document.querySelector('.cart__items');
cartList.innerText = '';
const loading = document.querySelector('.loading');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function stopLoading() {
  loading.remove();
}

const addPrice = async () => {
  const cartItems = document.querySelectorAll('.cart__item');
  let totalCartPrice = 0;
  cartItems.forEach((item) => {
    const splitItem = item.innerText.split('$')[1];
    totalCartPrice += Number(splitItem);
    Math.floor(totalCartPrice);
  });
  totalPrice.innerText = totalCartPrice;
};

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function localStorageSetItem() {
  localStorage.setItem('cartItem', cartList.innerHTML);
  addPrice();
}

function localStorageGetItem() {
  cartList.innerHTML = localStorage.getItem('cartItem');
}

function cartItemClickListener(event) {
  event.target.remove();
  localStorageSetItem();
}

cartList.addEventListener('click', cartItemClickListener);

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getProduct = async () => {
  const response = await fetch(`${baseUrl}/search?q=computer`);
  const object = await response.json();
  return object;
};

const addItemToCart = async (event) => {
  const cart = document.getElementsByClassName('cart__items')[0];
  const id = await event.target.parentNode.firstChild.innerText;
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const object = await response.json();
  const cartItem = createCartItemElement(object);
  cart.appendChild(cartItem);
  localStorageSetItem();
};

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', addItemToCart);
  return section;
}

function removeItemFromCart() {
  cartList.addEventListener('click', cartItemClickListener);
}

function emptyCart() {
  cartList.innerHTML = '';
  localStorageSetItem();
}

function emptyCartItemClickListener() {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', emptyCart);
}

window.onload = async () => {
  const product = await getProduct();
  product.results.forEach((item) => {
    const element = createProductItemElement(item);
    const items = document.querySelector('.items');
    items.appendChild(element);
  });
  stopLoading();
  emptyCartItemClickListener();
  removeItemFromCart();
  localStorageGetItem();
};
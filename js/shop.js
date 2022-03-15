import product from "./data.js";
import { displayProduct } from "./data.js";

const shopContent = document.querySelector(".shop-content");
const btnContainer = document.querySelector(".btn-container");
// Loaded content
// window.addEventListener("DOMContentLoaded", () => {

// });

// display button
function displayMenuButtons() {
  const categories = product.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const displayProducts =
        category === "all"
          ? product
          : product.filter((menuItem) => menuItem.category === category);
      displayProduct(displayProducts);
      ready();
    });
  });
}

displayProduct(product);
displayMenuButtons();

// Cart
const openCart = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
// open  cart
openCart.addEventListener("click", () => {
  cart.classList.toggle("active");
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // remove cart
  const removeCartBtns = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartBtns.length; i++) {
    const button = removeCartBtns[i];
    button.addEventListener("click", removeCartItem);
  }
  // quantity change
  const quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  const addToCartButtons = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", purchaseClicked);
}

// function
// purchaseCLicked
function purchaseClicked() {
  alert("Thank you for your purchase");
  const cartItems = document.getElementsByClassName("cart-content")[0];
  // while (cartItems.hasChildNodes()) {
  //   cartItems.removeChild(cartItems.firstChild);
  // }
  cartItems.innerHTML = "";
  updateTotal();
}
// remove function
function removeCartItem(e) {
  console.log("remove");
  const clickBtn = e.target;
  clickBtn.parentElement.remove();
  updateTotal();
}
// quantity change function
function quantityChanged(e) {
  const input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
  console.log("quantityChanged");
}
// addToCartClicked function
function addToCartClicked(e) {
  console.log("add to cart");
  const button = e.target;
  const shopItem = button.parentElement;
  const title = shopItem.getElementsByClassName("product-title")[0].innerText;
  const price = shopItem.getElementsByClassName("price")[0].innerText;
  const img = shopItem.getElementsByClassName("product-img")[0].src;
  addItemToCart(title, price, img);
  updateTotal();
}
function addItemToCart(title, price, img) {
  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  const cartItems = document.getElementsByClassName("cart-content")[0];
  const cartItemNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This product is already added to the cart");
      return;
    }
  }
  const cartShopBoxContent = `
<img src=${img} alt="" class="cart-img" />
<div class="detail-box">
  <div class="cart-product-title product-title">${title}</div>
  <div class="cart-price price">${price}</div>
  <input type="number" value="1" class="cart-quantity" />
</div>
<i class="fa-solid fa-trash-can cart-remove"></i>
`;
  cartShopBox.innerHTML = cartShopBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// update total function

function updateTotal() {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName("price")[0];
    console.log(priceElement);
    const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total = total + price * quantity;
    console.log(price);
    console.log(quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

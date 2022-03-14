import product from "./product.js";

const shopContent = document.querySelector(".shop-content");
const btnContainer = document.querySelector(".btn-container");
// Loaded content
window.addEventListener("DOMContentLoaded", () => {
  displayProduct(product);
  displayMenuButtons();
});

function displayProduct(productItem) {
  const showItem = productItem
    .map((item) => {
      return `<div class="product-box">
      <img src=${item.img} alt="product " class="product-img" />
      <h2 class="product-title">${item.title}</h2>
      <span class="price">${item.price}</span>
      <i class="fa-solid fa-bag-shopping add-cart"></i>
    </div>`;
    })
    .join("");
  shopContent.innerHTML = showItem;
}
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
      const menuCategory = product.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayProduct(product);
      } else {
        displayProduct(menuCategory);
      }
    });
  });
}

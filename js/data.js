const product = [
  {
    title: "black-shirt",
    img: "../img/products/product1.jpg",
    price: 12.99,
    category: "clothes",
  },
  {
    title: "airpod",
    img: "../img/products/product2.jpg",
    price: 30.99,
    category: "accessories",
  },
  {
    title: "black-jacket",
    img: "../img/products/product3.jpg",
    price: 20.99,
    category: "clothes",
  },
  {
    title: "glasses",
    img: "../img/products/product4.jpg",
    price: 5.99,
    category: "accessories",
  },
  {
    title: "waterbottle",
    img: "../img/products/product5.jpg",
    price: 8.99,
    category: "accessories",
  },
  {
    title: "black-hat",
    img: "../img/products/product6.jpg",
    price: 20.99,
    category: "clothes",
  },
  {
    title: "bag",
    img: "../img/products/product7.jpg",
    price: 18.99,
    category: "accessories",
  },
  {
    title: "shoes",
    img: "../img/products/product8.jpg",
    price: 21.99,
    category: "shoes",
  },
];

export default product;
const shopContent = document.querySelector(".shop-content");
export function displayProduct(productItem) {
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

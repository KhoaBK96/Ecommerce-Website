const product = [
  {
    title: "black-shirt",
    img: "../img/product1.jpg",
    price: 12.99,
    category: "clothes",
  },
  {
    title: "airpod",
    img: "../img/product2.jpg",
    price: 30.99,
    category: "accessories",
  },
  {
    title: "black-jacket",
    img: "../img/product3.jpg",
    price: 20.99,
    category: "clothes",
  },
  {
    title: "glasses",
    img: "../img/product4.jpg",
    price: 5.99,
    category: "accessories",
  },
  {
    title: "waterbottle",
    img: "../img/product5.jpg",
    price: 8.99,
    category: "accessories",
  },
  {
    title: "black-hat",
    img: "../img/product6.jpg",
    price: 20.99,
    category: "clothes",
  },
  {
    title: "bag",
    img: "../img/product7.jpg",
    price: 18.99,
    category: "accessories",
  },
  {
    title: "shoes",
    img: "../img/product8.jpg",
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

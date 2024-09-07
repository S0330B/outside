document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation =
    "fadeInRight .3s linear";
  document.querySelector(".nav-items").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation = "unset";
  document.querySelector(".nav-items").style.display = "none";
});

const PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img1.png",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img2.png",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img3.png",
  },
];

const loadProductData = () => {
  document.querySelector(".products").innerHTML = PRODUCTS.map((product) => {
    return `
            <article class="product flex-1">
                <div class="product-img relative flex justify-center items-center">
                    <img src="${product.image}" alt="${product.title}" class="ratio-3-4 full-width"/>
                    <div class="play-button absolute">
                        <span class="material-icons">play_arrow</span>
                    </div>
                </div>
                <div class="product-content">
                    <div class="arrow-button">-></div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>
              </article>
    `;
  }).join("");
};

loadProductData();

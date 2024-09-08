document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation =
    "fadeInRight .3s linear";
  document.querySelector(".nav-items").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation = "unset";
  document.querySelector(".nav-items").style.display = "none";
});
const FEATURE = [
  {
    id: 1,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img1.png",
  },
  {
    id: 2,
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img2.png",
  },
  {
    id: 3,
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img3.png",
  },
];
const PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img1.png",
    logo: "./images/handshake.png",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img2.png",
    logo: "./images/stocks.png",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img3.png",
    logo: "./images/stocks.png",
  },
];

const loadFeatureData = () => {
  document.querySelector(".features").innerHTML = FEATURE.map((feature) => {
    return `
            
              <article class="feature flex-1">
            <div class="feature-content">
                <h2 class="text-primary">${feature.title}</h3>
                <p class="two-lines">
                    ${feature.description}
                    
                </p>
                <div class="arrow-button mb-sm">
                    <div class="material-icons text-primary">arrow_forward</div>
                </div>
              </div>
              <div class="feature-image"><img src="${feature.image}" alt="${feature.title}" class="ratio-3-4 full-width"/></div>
          </article>
    `;
  }).join("");
};
loadFeatureData();

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
                    <div class="arrow-button">
                        <img src="${product.logo}" alt="${product.title}" class="image-width ratio-1-1"/>
                    </div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>
              </article>
    `;
  }).join("");
};

loadProductData();

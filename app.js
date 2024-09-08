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
    video: "./images/featureVideo/video.mp4",
  },
  {
    id: 3,
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img3.png",
    video: "./images/featureVideo/video.mp4",
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
    video: "./images/featureVideo/video.mp4",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img2.png",
    logo: "./images/handshake.png",
    video: "./images/featureVideo/video.mp4",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "./images/img3.png",
    logo: "./images/handshake.png",
    video: "./images/featureVideo/video.mp4",
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
              <div class="feature-image"><img src="${feature.image}" alt="${feature.title}" class="ratio-3-4 full-width transform"/></div>
          </article>
    `;
  }).join("");
};
loadFeatureData();

const loadProductData = () => {
  document.querySelector(".products").innerHTML = PRODUCTS.map((product) => {
    return `
            <article class="product gap-md flex-1">
            <div class="product-img relative flex justify-center items-center">
            <div class="play-button absolute" onclick="playVideo('video-${product.id}')">
                    <video id="video-${product.id}" src="${product.video}" alt="${product.title}" class="ratio-3-4 full-width" preload="metadata"></video>
                        
                    </div>
                </div>
                <div class="product-content flex column gap-md mt-4xl">
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

const playVideo = (videoId) => {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    if (video.id === videoId) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      video.pause();
    }
  });
};

document.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "VIDEO") {
    const pauseButton = document.createElement("div");
    pauseButton.className = "pause-button absolute";
    pauseButton.innerHTML = '<span class="material-icons">pause</span>';
    event.target.parentElement.appendChild(pauseButton);

    pauseButton.onclick = () => {
      event.target.pause();
      pauseButton.remove();
    };

    event.target.onmouseleave = () => {
      pauseButton.remove();
    };
  }
});

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("pause", () => {
    const playButton = video.parentElement.querySelector(".play-button");
    playButton.style.display = "block";
  });

  video.addEventListener("play", () => {
    const playButton = video.parentElement.querySelector(".play-button");
    playButton.style.display = "none";
  });

  if (video.paused) {
    const playButton = video.parentElement.querySelector(".play-button");
    playButton.style.display = "block";
  }
});

loadProductData();

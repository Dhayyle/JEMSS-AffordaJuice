function countUp(element) {
  const target = +element.getAttribute("data-target");
  let current = 0;
  const increment = Math.ceil(target / 50);
  const duration = 1000;
  const interval = duration / (target / increment);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = current;
    }
  }, interval);
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      countUp(element);
      observer.unobserve(element);
    }
  });
}

const countUpObserver = new IntersectionObserver(handleIntersection, {
  threshold: 1.0,
});

document.addEventListener("DOMContentLoaded", () => {
  const countUpElements = document.querySelectorAll(".count-up");
  countUpElements.forEach((element) => countUpObserver.observe(element));
});

function handleAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (!element.classList.contains("triggered")) {
        element.classList.add("triggered");
        observer.unobserve(element);
      }
    }
  });
}

const animationObserver = new IntersectionObserver(handleAnimation, {
  threshold: 0.5,
});

document.addEventListener("DOMContentLoaded", () => {
  const animationElements = document.querySelectorAll(
    ".fadeInUp, .slideLeftIn, .slideRightIn, .zoomIn, .fadeIn"
  );
  animationElements.forEach((element) => animationObserver.observe(element));
});


const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", function () {
  const threshold = window.innerHeight * 3;

  if (window.scrollY > threshold) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fadeInUp");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top < windowHeight && position.bottom > 0) {
      if (!element.classList.contains("triggered")) {
        element.classList.add("triggered");
      }
    }
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".slideLeftIn, .slideRightIn, .zoomIn, .fadeIn");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top < windowHeight && position.bottom > 0) {
      if (!element.classList.contains("triggered")) {
        element.classList.add("triggered");
      }
    }
  });
});

function countUp(element) {
  const target = +element.getAttribute("data-target");
  let current = 0;
  const increment = Math.ceil(target / 50);
  const duration = 1000;
  const interval = duration / (target / increment);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = current;
    }
  }, interval);
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      countUp(element);
      observer.unobserve(element);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 1.0,
});

const countUpElements = document.querySelectorAll(".count-up");
countUpElements.forEach((element) => observer.observe(element));


document.addEventListener("DOMContentLoaded", function () {
  const flavors = {
    "Milk Tea": [
      { name: "Classic Pearl Milk Tea", price: "₱80 (M)  ₱100 (L)", description: "Traditional black tea with milk and chewy tapioca pearls. ", image: "img/Classic-Pearl-Milk-Tea.jpeg" },
      { name: "Wintermelon Milk Tea", price: "₱85 (M)  ₱105 (L)", description: "Sweet and refreshing with a caramel-like taste.", image: "img/Wintermelon-Milk-Tea.jpeg" },
      { name: "Taro Milk Tea", price: "₱90 (M)  ₱110 (L)", description: "Creamy, slightly nutty, and purple-colored from taro root. ", image: "img/Taro-Milk-Tea.jpeg" },
      { name: "Matcha Milk Tea", price: "₱95 (M)  ₱115 (L)", description: "Earthy and rich, made with Japanese matcha green tea. ", image: "img/Matcha-Milk-Tea.jpeg" },
      { name: "Hokkaido Milk Tea", price: "₱90 (M)  ₱110 (L)", description: "Creamy and caramel-flavored, made with special milk.", image: "img/Hokkaido-Milk-Tea.jpeg" },
      { name: "Strawberry Milk Tea", price: "₱85 (M)  ₱105 (L)", description: "A fruity and refreshing twist with real strawberry flavor. ", image: "img/Strawberry-Milk-Tea.jpeg" },
    ],
    "Pizza": [
      { name: "Hawaiian ", price: "₱180 (S)  ₱350 (M)  ₱500 (L)", description: "Ham, pineapple, and cheese on a classic crust.", image: "img/Hawaiian.jpeg" },
      { name: "Pepperoni ", price: "₱190 (S)  ₱360 (M)  ₱520 (L)", description: "Loaded with pepperoni and cheese for a classic taste.", image: "img/Pepperoni.jpeg" },
      { name: "All-Meat", price: "₱200 (S)  ₱380 (M)  ₱550 (L)", description: "Bacon, ham, sausage, pepperoni, and ground beef.", image: "img/All-Meat.jpeg" },
      { name: "Four Cheese", price: "₱210 (S)  ₱400 (M)  ₱580 (L)", description: "A cheesy blend of mozzarella, cheddar, parmesan, and cream cheese.", image: "img/Four-Cheese.jpeg" },
      { name: "Supreme", price: "₱220 (S)  ₱420 (M)  ₱600 (L)", description: "A mix of meats, bell peppers, onions, mushrooms, and olives.", image: "img/Supreme.jpeg" },
      { name: "Bacon & Mushroom", price: "₱200 (S)  ₱380 (M)  ₱550 (L)", description: "Savory bacon, mushrooms, and creamy cheese.", image: "img/Bacon-&-Mushroom.jpeg" },
    ],
    "Milk Shake": [
      { name: "Chocolate Milk Shake", price: "₱90 (M)  ₱110 (L)", description: "A rich and creamy blend of chocolate ice cream and fresh milk, topped with choco syrup.", image: "img/Chocolate-Milk-Shake.jpeg" },
      { name: "Strawberry Milk Shake", price: "₱90 (M)  ₱110 (L)", description: "A fruity and refreshing strawberry delight with real strawberry bits.", image: "img/Strawberry-Milk-Shake.jpeg" },
      { name: "Vanilla Milk Shake", price: "₱85 (M)  ₱105 (L)", description: "A smooth and classic vanilla blend for a simple yet satisfying taste.", image: "img/Vanilla-Milk-Shake.jpeg" },
      { name: "Mango Milk Shake", price: "₱95 (M)  ₱115 (L)", description: "A tropical favorite with fresh mangoes blended into a creamy shake.", image: "img/Mango-Milk-Shake.jpeg" },
      { name: "Cookies & Cream Shake", price: "₱100 (M)  ₱120 (L)", description: "A sweet mix of crushed cookies blended with vanilla ice cream and milk.", image: "img/Cookies-&-Cream-Milk-Shake.jpeg" },
      { name: "Caramel Coffee Shake", price: "₱105 (M)  ₱125 (L)", description: "A coffee-lover’s dream, blending espresso, milk, and caramel syrup.", image: "img/Caramel-Coffee-Milk-Shake.jpeg" },
    ]
  };

  const tabs = document.querySelectorAll(".nav-item a");
  const contentContainer = document.querySelector(".tab-pane .row");

  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      const selectedFlavor = this.querySelector("h6").textContent.trim();

      const selectedItems = flavors[selectedFlavor];

      if (selectedItems) {
        contentContainer.innerHTML = "";

        selectedItems.forEach(item => {
          const itemHtml = `
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <!-- Update this image for each item -->
                  <img src="${item.image}" class="w-25 flex-shrink-0 img-fluid rounded" alt="${item.name}">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2 gap-3">
                      <!-- Update this name for each item -->
                      <span class="text-danger fw-bold d-flex align-items-center">${item.name}</span>
                      <!-- Update this price for each item -->
                      <span class="fw-semi-bold def-color fs-6">${item.price}</span>
                    </h5>
                    <!-- Update this description for each item -->
                    <small class="fst-italic text-white">${item.description}</small>
                  </div>
                </div>
              </div>
            `;
          contentContainer.innerHTML += itemHtml;
        });
      }
    });
  });
});

function toggleInfo(id, show) {
  var extraInfo = document.getElementById("extra-info-" + id);
  var showMoreBtn = document.getElementById("show-more-btn-" + id);

  if (show) {
    extraInfo.classList.add("show");
    extraInfo.classList.remove("hide");
    showMoreBtn.style.display = "none";
  } else {
    extraInfo.classList.add("hide");
    setTimeout(() => extraInfo.classList.remove("show"), 400);
    showMoreBtn.style.display = "inline-block";
  }
}



// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.textContent = nav.classList.contains('open') ? '✖' : '☰';
  });
}

// Footer dates
const currentYear = document.querySelector('#currentYear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector('#lastModified');
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// Products array
const products = [
  {
    id: 1,
    name: "Bluetooth Earbuds",
    category: "bluetooth",
    price: 5000,
    description: "High quality wireless earbuds with noise cancellation.",
    image: "images/earbuds.jpg"
  },
  {
    id: 2,
    name: "Phone Case",
    category: "phones",
    price: 1500,
    description: "Protective case for all major phone brands.",
    image: "images/phonecase.jpg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "bluetooth",
    price: 8000,
    description: "Portable speaker with powerful bass and long battery life.",
    image: "images/speaker.jpg"
  },
  {
    id: 4,
    name: "Perfume Collection",
    category: "perfumes",
    price: 6000,
    description: "Premium fragrances for men and women.",
    image: "images/perfume.jpg"
  },
  {
    id: 5,
    name: "Phone Charger",
    category: "phones",
    price: 2000,
    description: "Fast charging adapter compatible with all devices.",
    image: "images/charger.jpg"
  },
  {
    id: 6,
    name: "Electric Fan",
    category: "appliances",
    price: 12000,
    description: "Energy efficient portable electric fan.",
    image: "images/fan.jpg"
  },
  {
    id: 7,
    name: "Screen Protector",
    category: "phones",
    price: 1000,
    description: "Tempered glass screen protector for all phone models.",
    image: "images/screenprotector.jpg"
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "bluetooth",
    price: 15000,
    description: "Multi-function smart watch with health tracking.",
    image: "images/smartwatch.jpg"
  },
  {
    id: 9,
    name: "Electric Kettle",
    category: "appliances",
    price: 9000,
    description: "Fast boiling electric kettle with auto shut-off.",
    image: "images/kettle.jpg"
  }
];

// Display products function
function displayProducts(productList) {
  const grid = document.querySelector('#products-grid') || document.querySelector('#featured-grid');
  if (!grid) return;

  grid.innerHTML = '';

  productList.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price.toLocaleString()} FCFA</p>
        <a href="contact.html" class="btn">Order Now</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Featured products on home page
const featuredGrid = document.querySelector('#featured-grid');
if (featuredGrid) {
  displayProducts(products.slice(0, 4));
}

// All products on products page
const productsGrid = document.querySelector('#products-grid');
if (productsGrid) {
  displayProducts(products);
}

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.dataset.category;
      if (category === 'all') {
        displayProducts(products);
      } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
      }
    });
  });
}

// Newsletter form
const newsletterForm = document.querySelector('#newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#newsletter-email').value;
    const message = document.querySelector('#newsletter-message');

    let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    if (subscribers.includes(email)) {
      message.textContent = 'You are already subscribed!';
      message.style.color = 'orange';
    } else {
      subscribers.push(email);
      localStorage.setItem('subscribers', JSON.stringify(subscribers));
      message.textContent = `Thank you! ${email} has been subscribed.`;
      message.style.color = '#F0C040';
    }
    newsletterForm.reset();
  });
}
const reservationForm = document.querySelector("#reservation form");
reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your table reservation has been received.");
});
const menuButtons = document.querySelectorAll(".menu-buttons button");
const menuItems = document.querySelectorAll(".menu-item");

menuButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;

        menuItems.forEach(function(item) {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


const reviews = [
    {
        text: "Amazing food and wonderful atmosphere!",
        author: "Sofia"
    },
    {
        text: "The pasta was delicious and the service was wonderful!",
        author: "Marco"
    },
    {
        text: "A cozy place with authentic Italian flavors.",
        author: "Elena"
    }
];

let currentReview = 0;

const reviewText = document.querySelector("#review-text");
const reviewAuthor = document.querySelector("#review-author");
const nextReview = document.querySelector("#next-review");

nextReview.addEventListener("click", function() {
    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    reviewText.textContent = `"${reviews[currentReview].text}"`;
    reviewAuthor.textContent = `— ${reviews[currentReview].author}`;
});


const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const navLinks = document.querySelectorAll("nav a");

mobileMenuToggle.addEventListener("click", function() {
    navLinks.forEach(function(link) {
        if (link.style.display === "block") {
            link.style.display = "none";
        } else {
            link.style.display = "block";
        }
    });
});


const addButtons = document.querySelectorAll(".add-to-order");
const orderList = document.querySelector("#order-list");
const orderTotal = document.querySelector("#order-total");

const order = {};

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        if (order[name]) {
            order[name].quantity++;
        } else {
            order[name] = {
                price: price,
                quantity: 1
            };
        }

        updateOrder();
    });
});

function updateOrder() {
    orderList.innerHTML = "";

    let total = 0;

    for (const name in order) {
        const item = order[name];

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-row");

        orderItem.innerHTML = `
            <span>${name}</span>
            <span>x${item.quantity}</span>
        `;

        orderList.appendChild(orderItem);

        total += item.price * item.quantity;
    }

    orderTotal.textContent = `Total: €${total}`;
}
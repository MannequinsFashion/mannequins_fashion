document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("🛍️ Product added to cart!\n\nThank you for shopping at Mannequin's Fashion 💖");
        });
    });
});

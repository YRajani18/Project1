document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    dropdownMenu.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            dropdownToggle.innerHTML = event.target.textContent + " <span>&#9662;</span>";
            dropdownMenu.style.display = "none";
        }
    });

    document.addEventListener("click", () => {
        dropdownMenu.style.display = "none";
    });
});

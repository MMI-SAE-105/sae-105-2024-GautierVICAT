const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    document.body.classList.toggle("menu-open", isClosed);
});
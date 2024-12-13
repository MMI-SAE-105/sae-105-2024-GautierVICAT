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
const carouselImages = document.getElementById('carouselImages');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const playButton = document.getElementById('playButton');

    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let autoPlay = null;

    function showImage(index) {
        const offset = -index * 400;
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }
    function toggleAutoPlay() {
        if (autoPlay) {
            clearInterval(autoPlay);
            autoPlay = null;
            playButton.textContent = 'Lire le carrousel';
        } else {
            autoPlay = setInterval(showNextImage, 2000);
            playButton.textContent = 'Arrêter le carrousel';
        }
    }
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    playButton.addEventListener('click', toggleAutoPlay);
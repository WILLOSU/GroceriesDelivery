// Array de objetos contendo informações para cada slide
const slides = [
    {
        image: "../static/img/shop-hero-3-product-slide-2.jpg",
        title: "GROCERIES DELIVERY",
        description: "We know how large objects will act, but things on a small scale just do not act that way."
    },
    {
        image: "../static/img/placeholder-2.jpg",
        title: "FRESH FOOD DAILY",
        description: "Quality ingredients delivered right to your doorstep"
    },
    {
        image: "../static/img/placeholder-3.jpg",
        title: "QUICK DELIVERY",
        description: "Fast and reliable delivery service you can count on"
    },
    {
        image: "../static/img/placeholder-4.jpg",
        title: "SPECIAL OFFERS",
        description: "Great deals and discounts on selected items"
    },
    {
        image: "../static/img/placeholder-5.jpg",
        title: "LOCAL PRODUCTS",
        description: "Supporting local farmers and producers"
    }
];

let currentSlide = 0;

// Função para criar os elementos HTML do carrossel
function createCarouselElements() {
    const carousel = document.querySelector('.carousel');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    slides.forEach((slide, index) => {
        // Cria o elemento do slide
        const slideElement = document.createElement('div');
        slideElement.classList.add('carousel-slide');
        if (index === 0) slideElement.classList.add('active');

        // Adiciona a imagem
        const img = document.createElement('img');
        img.src = slide.image;
        img.alt = slide.title;
        slideElement.appendChild(img);

        // Adiciona o overlay
        const overlay = document.createElement('div');
        overlay.classList.add('carousel-overlay');
        slideElement.appendChild(overlay);

        // Adiciona o conteúdo
        const content = document.createElement('div');
        content.classList.add('carousel-content');
        content.innerHTML = `
            <h1>${slide.title}</h1>
            <h4>${slide.description}</h4>
            <button>Start Now</button>
        `;
        slideElement.appendChild(content);

        carousel.appendChild(slideElement);

        // Cria o indicador
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
}

// Função para ir para um slide específico
function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Função para ir para o próximo slide
function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

// Função para ir para o slide anterior
function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Função para inicializar o carrossel
function initCarousel() {
    createCarouselElements();

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Inicia a transição automática
    setInterval(nextSlide, 5000);
}

// Inicializa o carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initCarousel);
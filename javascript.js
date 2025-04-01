
const sections = document.querySelectorAll('.section-fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});

const whatsappModal = new bootstrap.Modal(document.getElementById('whatsappModal'));
const buyButtons = document.querySelectorAll('.btn-whatsapp-buy');
const whatsappForm = document.getElementById('whatsappForm');
const productNameInput = document.getElementById('product');

buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.getAttribute('data-product');
        productNameInput.value = product;
        whatsappModal.show();
    });
});

whatsappForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;

    const message = encodeURIComponent(`Hola, estoy interesado en comprar la "${product}". Mi nombre es ${name}.`);
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappLink, '_blank');
    whatsappModal.hide();
    whatsappForm.reset();
});

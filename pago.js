document.addEventListener('DOMContentLoaded', function() {
    const mostrarPaypalBtn = document.getElementById('mostrar-paypal');
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    const cardForm = document.getElementById('card-form');
    const cashPaymentInfo = document.getElementById('cash-payment-info');
    const tarjetaRadio = document.getElementById('tarjeta');
    const efectivoRadio = document.getElementById('efectivo');

    mostrarPaypalBtn.addEventListener('click', function() {
        paymentModal.show();
        // Al mostrar el modal, asegúrate de que el formulario de tarjeta esté visible por defecto
        if (tarjetaRadio.checked) {
            cardForm.style.display = 'block';
            cashPaymentInfo.style.display = 'none';
        } else if (efectivoRadio.checked) {
            cardForm.style.display = 'none';
            cashPaymentInfo.style.display = 'block';
        }
    });

    tarjetaRadio.addEventListener('change', function() {
        cardForm.style.display = 'block';
        cashPaymentInfo.style.display = 'none';
    });

    efectivoRadio.addEventListener('change', function() {
        cardForm.style.display = 'none';
        cashPaymentInfo.style.display = 'block';
    });

    const confirmarPagoBtn = document.getElementById('confirmar-pago');
    if (confirmarPagoBtn) {
        confirmarPagoBtn.addEventListener('click', function() {
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            if (paymentMethod === 'tarjeta') {
                // Aquí deberías recolectar los datos de la tarjeta y enviarlos a tu backend
                const cardNumber = document.getElementById('cardNumber').value;
                const expiryDate = document.getElementById('expiryDate').value;
                const cvv = document.getElementById('cvv').value;
                const name = document.getElementById('name').value;
                const lastName = document.getElementById('lastName').value;
                const documentType = document.getElementById('documentType').value;
                const documentNumber = document.getElementById('documentNumber').value;
                const email = document.getElementById('email').value;

                console.log('Datos de la tarjeta:', { cardNumber, expiryDate, cvv, name, lastName, documentType, documentNumber, email });
                alert('¡Pago con tarjeta simulado! Los datos se han mostrado en la consola.');
                // En una aplicación real, enviarías estos datos de forma segura a tu backend
                // para procesar el pago a través de un proveedor como Stripe, etc.
            } else if (paymentMethod === 'efectivo') {
                alert('Instrucciones de pago en efectivo mostradas.');
                // Aquí podrías realizar alguna acción adicional si es necesario
            }
            paymentModal.hide(); // Cierra el modal después de la simulación
        });
    }
});
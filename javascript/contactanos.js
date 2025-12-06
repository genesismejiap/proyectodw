document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    function showError(input, message) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = '#fe0731';
    }

    function clearError(input) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.style.display = 'none';
        input.style.borderColor = '#eee';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showFormMessage(type, message) {
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'El nombre debe tener al menos 2 caracteres');
        } else {
            clearError(nameInput);
        }
    });

    emailInput.addEventListener('input', () => {
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor ingresa un email válido');
        } else {
            clearError(emailInput);
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'El mensaje debe tener al menos 10 caracteres');
        } else {
            clearError(messageInput);
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor ingresa un email válido');
            isValid = false;
        }

        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        }

        if (isValid) {
            showFormMessage('success', '¡Mensaje enviado con éxito! Te contactaremos pronto.');
            form.reset();
            
            setTimeout(() => {
                nameInput.style.borderColor = '#eee';
                emailInput.style.borderColor = '#eee';
                messageInput.style.borderColor = '#eee';
            }, 100);
        } else {
            showFormMessage('error-message', 'Por favor corrige los errores en el formulario.');
        }
    });

    const whatsappLink = document.querySelector('.whatsapp');
    whatsappLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirigiendo a WhatsApp de Quiá Tsojo');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('searchInput');
    
    // Función para alternar FAQ
    function toggleFAQ(item) {
        item.classList.toggle('active');
        
        const icon = item.querySelector('.faq-question i');
        const answer = item.querySelector('.faq-answer');
        
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        } else {
            answer.style.maxHeight = '0';
            icon.style.transform = 'rotate(0deg)';
        }
    }
    
    // Inicializar todos los FAQs cerrados excepto el primero de cada categoría
    faqItems.forEach((item, index) => {
        // Abrir solo el primer item de cada categoría por defecto
        const categoryFirstItems = document.querySelectorAll('.faq-category .faq-item:first-child');
        
        if (Array.from(categoryFirstItems).includes(item)) {
            toggleFAQ(item);
        }
        
        item.addEventListener('click', () => {
            toggleFAQ(item);
        });
    });
    
    // Función de búsqueda
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length === 0) {
            // Si no hay búsqueda, mostrar todos
            faqItems.forEach(item => {
                item.style.display = 'block';
                const category = item.closest('.faq-category');
                if (category) {
                    const visibleItems = Array.from(category.querySelectorAll('.faq-item')).filter(i => i.style.display !== 'none');
                    category.style.display = visibleItems.length > 0 ? 'block' : 'none';
                }
            });
            return;
        }
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                
                // Abrir el FAQ si coincide con la búsqueda
                if (!item.classList.contains('active')) {
                    toggleFAQ(item);
                }
            } else {
                item.style.display = 'none';
            }
            
            // Mostrar/ocultar categorías según si tienen items visibles
            const category = item.closest('.faq-category');
            if (category) {
                const visibleItems = Array.from(category.querySelectorAll('.faq-item')).filter(i => i.style.display !== 'none');
                category.style.display = visibleItems.length > 0 ? 'block' : 'none';
            }
        });
    });
    
    // Permitir abrir/cerrar con tecla Enter
    faqItems.forEach(item => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                toggleFAQ(item);
            }
        });
    });
    
    // Limpiar búsqueda al hacer clic en la X (si se añade)
    searchInput.addEventListener('search', function() {
        this.value = '';
        faqItems.forEach(item => {
            item.style.display = 'block';
            const category = item.closest('.faq-category');
            if (category) {
                category.style.display = 'block';
            }
        });
    });
    
    // Mejorar accesibilidad
    faqItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-expanded', 'false');
        
        item.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
});
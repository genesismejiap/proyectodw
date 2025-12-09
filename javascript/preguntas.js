document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('searchInput');
    
    
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
    
   
    faqItems.forEach((item, index) => {
       
        const categoryFirstItems = document.querySelectorAll('.faq-category .faq-item:first-child');
        
        if (Array.from(categoryFirstItems).includes(item)) {
            toggleFAQ(item);
        }
        
        item.addEventListener('click', () => {
            toggleFAQ(item);
        });
    });
    
   
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length === 0) {
          
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
                
               
                if (!item.classList.contains('active')) {
                    toggleFAQ(item);
                }
            } else {
                item.style.display = 'none';
            }
            
            
            const category = item.closest('.faq-category');
            if (category) {
                const visibleItems = Array.from(category.querySelectorAll('.faq-item')).filter(i => i.style.display !== 'none');
                category.style.display = visibleItems.length > 0 ? 'block' : 'none';
            }
        });
    });
    
 
    faqItems.forEach(item => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                toggleFAQ(item);
            }
        });
    });
    
    
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
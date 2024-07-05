// JavaScript to toggle accordion panels
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const button = accordion.querySelector('button');
        const panel = accordion.querySelector('.accordion-content');
        let h4 = accordion.querySelector('.accordion-header');

        button.addEventListener('click', () => {
            const isOpen = panel.classList.toggle('open');
            h4.classList.add('h3_chg');
            if (isOpen) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = null;
                h4.classList.remove('h3_chg');
            }

            // Close other panels
            accordions.forEach(item => {
                const content = item.querySelector('.accordion-content');
                if (item !== accordion && content.classList.contains('open')) {
                    content.classList.remove('open');
                    
                    content.style.maxHeight = null;
                }
            });
        });
    });
});

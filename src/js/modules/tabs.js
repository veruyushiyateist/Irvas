const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);
    
    const hideTabsContent = () => {
        contents.forEach(item => {
            item.style.display = 'none';
        });
        
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    };

    function showTabsContent(i) {
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }
    
    hideTabsContent();
    showTabsContent(0);
    
    header.addEventListener('click', (e) => {        
        const target = e.target;
        
        if (target && ( target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tabs.forEach((item, index) => {
               if (target == item || target.parentNode == item) {
                   hideTabsContent();
                   showTabsContent(index);
               } 
            });  
        }
        
        
    });
};

export default tabs;
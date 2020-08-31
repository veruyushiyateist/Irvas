const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tabs = header.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);
    
    const hideTabsContent = () => {
        contents.forEach(item => {
            item.style.display = 'none';
        });
        
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    };
    
    const showTabsContent = (i = 0) => {
        contents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    };
    
    hideTabsContent();
    showTabsContent();
    
    header.addEventListener('click', (e) => {        
        const target = e.target;
        
        if (target && ( target.classList.contains(tabSelector.replace(/\./, "")) ||               target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
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
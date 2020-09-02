const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();
        
		const closeAllWindows = () => windows.forEach(window => window.style.display = 'none');
		
        trigger.forEach(item => {
            item.addEventListener('click', event => {
                if (event.target) {
                    event.preventDefault();
                }
				
				closeAllWindows();
            
                modal.style.display = 'block'; // need to rewrite
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        
        close.addEventListener('click', () => {
		
			closeAllWindows();
			
            modal.style.display = 'none'; // need to rewrite
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

        });
        
        modal.addEventListener('click', (event) => {
            if (event.target == modal && closeClickOverlay) {
				closeAllWindows();
                modal.style.display = 'none'; // need to rewrite
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    };
    
    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            
            const modal = document.querySelector(modalSelector);
            
            modal.style.display = 'block';
            document.body.overflow = 'hidden';
        }, time);
    }
    
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    
    showModalByTime('.popup', 60000);
    
};

export default modals;
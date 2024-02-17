function headerMenu () {
    const button = document.querySelector('.header__right__burger-menu');
    button.addEventListener('click',function(){
    button.classList.toggle('open');
    document.querySelector('.header--popup').classList.toggle('open');
    });
    }
    headerMenu();



    function loadSelector(){
        const scrollElement = document.querySelector('.catalog-wrapper-selector>div');
        const selectorButtonsContainer = document.querySelector('.item-view-block>nav');
        const wrapperSelectorLeftButton = document.getElementById('wrapperSelectorLeft');
        const wrapperSelectorRightButton = document.getElementById('wrapperSelectorRight')
        wrapperSelectorLeftButton.addEventListener('click',function(e){e.preventDefault(); setSelectorValue(Math.max(selectorValue-1,0))});
        wrapperSelectorRightButton.addEventListener('click',function(e){e.preventDefault(); setSelectorValue(Math.min(selectorValue+1,7))});
        
        selectorButtonsContainer.querySelectorAll('div').forEach(elem=>elem.addEventListener('click',function(){
            let index = -1;
            for (
              let el = elem;
              el;
              index++, el = el.previousElementSibling
            ) ;
        setSelectorValue(index);
        }));
        var selectorValue = 0;
        
        function setSelectorValue(val){
            selectorValue=val;
            scrollElement.style.transform = 'translateX(-'+(204*selectorValue)+'px)';
        document.querySelector('.item-view-block>nav>.active').classList.remove('active')
            selectorButtonsContainer.querySelectorAll('div')[val].classList.add('active');
        
        
        }
        }
        loadSelector();
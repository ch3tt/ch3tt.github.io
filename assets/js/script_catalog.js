function loadTogglePopup(){
    const headers = document.querySelectorAll('.toggle-popup__item__header');
    headers.forEach(item=>item.addEventListener('click',function(e){
    e.target.parentElement.classList.toggle('open');
    console.log(123);
    e.preventDefault();
    }))
    }
    loadTogglePopup();

    function loadTogglers (){
        document.querySelectorAll('.toggle-header').forEach(elem=>elem.addEventListener('click',function(e){
            e.target.parentElement.classList.toggle('open-toggle');
        }));
    
    }
    loadTogglers();
    function headerMenu () {
    const button = document.querySelector('.header__right__burger-menu');
    button.addEventListener('click',function(){
    button.classList.toggle('open');
    document.querySelector('.header--popup').classList.toggle('open');
    });
    }
    headerMenu();

    function loadPagination(){
        var currentPageIndex = 0;
document.getElementById('pagination-container').querySelectorAll('p').forEach(elem=>elem.addEventListener('click',function(e){
    let index = -1;
    for (
      let el = e.target;
      el;
      index++, el = el.previousElementSibling
    ) ;
    currentPageIndex = index;
    document.getElementById('pagination-container').querySelector('.active-page').classList.remove('active-page');
    e.target.classList.add('active-page');
    loadPageData();

}));
function loadPageData (){
//currentPageIndex -> ...

}
    }
    loadPagination();
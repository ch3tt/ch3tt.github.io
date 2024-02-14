function initCitySelector () {
    const values = ['Москва', 'Брянск', 'Екатеринбург', 'Санкт-Петербург'];
const selectorList = document.getElementById('citySelectorList');
const currentValue = document.getElementById('headerCitySelectorValue');
function replaceData(){
    selectorList.innerHTML = '';
    for (var i = 0; i < values.length;i++){
        if (values[i] !== currentValue.textContent){
            var elemContainer = document.createElement('li');
    var elem = document.createElement('a');
  
    elem.classList.add('header__city-selector__list__item');
    elem.setAttribute('data-value',values[i]);
    elem.textContent =values[i];
    elemContainer.appendChild(elem)
    selectorList.appendChild(elemContainer);
        }else {
    currentValue.textContent = values[i];
        }
    }
}
replaceData();
const selector = document.getElementById('citySelector');
const toggleButton = document.getElementById('citySelectorToggle');
toggleButton.addEventListener('click',function(){
selector.classList.toggle('open');
});
selectorList.addEventListener('click',function(e){
   
    if (e.target.nodeName == 'A'){

        currentValue.textContent = e.target.getAttribute('data-value');
        replaceData();
        selector.classList.toggle('open');
    }

})
}

initCitySelector();
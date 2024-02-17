function loadTogglePopup(){
const headers = document.querySelectorAll('.toggle-popup__item__header');
headers.forEach(item=>item.addEventListener('click',function(e){
e.target.parentElement.classList.toggle('open');
console.log(123);
e.preventDefault();
}))
}
loadTogglePopup();
function loadSelector(){
const scrollElement = document.querySelector('.wrapper-selector>div');
const selectorButtonsContainer = document.querySelector('.third-screen>nav');
const wrapperSelectorLeftButton = document.getElementById('wrapperSelectorLeft');
const wrapperSelectorRightButton = document.getElementById('wrapperSelectorRight')
wrapperSelectorLeftButton.addEventListener('click',function(){setSelectorValue(Math.max(selectorValue-1,0))});
wrapperSelectorRightButton.addEventListener('click',function(){setSelectorValue(Math.min(selectorValue+1,3))});

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
    scrollElement.style.transform = 'translateX(-'+(256*selectorValue)+'px)';
document.querySelector('.third-screen>nav>.active').classList.remove('active')
    selectorButtonsContainer.querySelectorAll('div')[val].classList.add('active');


}
}
loadSelector();
function firstScreenSelector(){
    const headers = ['Спецодежда для сварщиков','Спецодежда для сварщиков1','Спецодежда для сварщиков2'];
    const body = ['из хлопчатобумажных тканей разной плотности <br>  из брезента<br>  из спилока','из хлопчатобумажных тканей разной плотности <br>  из брезента<br>  из спилока1','из хлопчатобумажных тканей разной плотности <br>  из брезента<br>  из спилока2'];

const buttons = document.querySelectorAll('.selector-fs__buttons>div');
buttons.forEach(elem=>elem.addEventListener('click',function(e){
    let index = -1;
    for (
      let el = elem;
      el;
      index++, el = el.previousElementSibling
    ) ;
document.querySelector('.selector-fs__title').textContent = headers[index];
document.querySelector('.selector-fs__body').innerHTML = body[index];
document.querySelector('.selector-fs__buttons>.active-fs').classList.remove('active-fs');
e.target.classList.add('active-fs');
}));
}
firstScreenSelector();
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
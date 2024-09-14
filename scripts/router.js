const PAGE_TITLE = `StarsApp`;

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
    console.log(event);
    
}   

const navigate = async (to) => {
   if (document.querySelector('.main')) document.querySelector('.main').scroll(0,0);
    if (!routes[to])return;
    const route = routes[to];
    const html = await fetch(route).then((data)=>data.text());
    document.body.innerHTML = html;
    loadScripts(to);
}
const loadScripts = (page) => {
if (page == '/clans/join'){
    const container = document.querySelector('.tabs__container');
    document.querySelectorAll('.tabs__item')[0].addEventListener('click',()=>{
      switchPage(0);
    })
    document.querySelectorAll('.tabs__item')[1].addEventListener('click',()=>{
      switchPage(1);
    })
    const switchPage = (page) => {
container.setAttribute('data-page',page);
    }
}
if (page == '/clan'){
    const container = document.querySelector('.tabs__container');
    document.querySelectorAll('.tabs__item')[0].addEventListener('click',()=>{
      switchPage(0);
    })
    document.querySelectorAll('.tabs__item')[1].addEventListener('click',()=>{
      switchPage(1);
    })
    const switchPage = (page) => {
container.setAttribute('data-page',page);
    }
}
if (page == '/check') {
      
const s = document.querySelectorAll('.main-check-steps>div');
setTimeout(()=>{
  s[0].classList.add('progress');

},10)
setTimeout(()=>{
  s[0].classList.add('full');
  s[1].classList.add('progress');
},4000)
setTimeout(()=>{
  s[1].classList.add('full');
  s[2].classList.add('progress');
},8000)
setTimeout(()=>{
  s[2].classList.add('full');
  s[3].classList.add('progress');
},12000);
setTimeout(()=>{

  s[3].classList.add('full');
},16000)
  
  
     
   
}
if (page == '/clan'){
    document.querySelector('#clan_status button').addEventListener('click',()=>{
        document.querySelector('#clan_status').classList.add('in');
      })
}
if (page == '/leaders'){
    document.querySelectorAll('.popup--screen').forEach((el)=>{
        el.addEventListener('click',(e)=>{
          e.target.classList.remove('open');
        })
        el.querySelector('.popup').addEventListener('click',(e)=>{
          e.stopPropagation();
          e.preventDefault();
        })
      }
      );


        document.querySelectorAll('.close-button').forEach((el)=>{
        console.log(el);
          el.addEventListener('click',(e)=>{
         console.log(e.target);
            e.target.parentElement.parentElement.classList.remove('open');
          })
        
      
      })
      const container = document.querySelector('.tabs__container');
      document.querySelectorAll('.tabs__item')[0].addEventListener('click',()=>{
        switchPage(0);
      })
      document.querySelectorAll('.tabs__item')[1].addEventListener('click',()=>{
        switchPage(1);
      })
      const switchPage = (page) => {
  container.setAttribute('data-page',page);
      }
}
if (page == '/earns'){
    let spinned = false;

    const button = document.querySelector('#spin-button');
const wrapper = document.querySelector('.spin-wheel-wrapper');
const spinTimeoutPopup = document.getElementById('spinTimeoutPopup');
const spinResultPopup = document.getElementById('spinResultPopup');

button.addEventListener('click',()=>{
      if (spinned == true){
        spinTimeoutPopup.classList.add('open');
        return;
      }
wrapper.style.transform = 'translateY(-459px)';
setTimeout(()=>{
spinResultPopup.classList.add('open');
},2000);
spinned = true;

    });
    document.querySelectorAll('.popup--screen').forEach((el)=>{
      el.addEventListener('click',(e)=>{
        e.target.classList.remove('open');
      })
      el.querySelector('.popup').addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
      })
    }
    );


      document.querySelectorAll('.close-button').forEach((el)=>{
      console.log(el);
        el.addEventListener('click',(e)=>{
       console.log(e.target);
          e.target.parentElement.parentElement.classList.remove('open');
        })
      
    
    })
    let timer = document.getElementById('nextSpinTimer');
    setInterval(()=>{
        let seconds = 86400 - Math.floor(new Date()/1000) % 86400;
        var hours = Math.floor(seconds / 3600);
var minutes = Math.floor(seconds % 3600 / 60);
seconds = seconds % 60;
        if (timer){
timer.textContent = hours+':'+minutes+':'+seconds;
        }
    },1000);
}
}
const routes = {
    "/": "/index.html",
    "/check": "/check.html",
    "/step1": "/step1.html",
    "/step2": "/step2.html",
    "/step3": "/step3.html",
    "/home": "/home.html",
    "/earns": "/earns.html",
    "/daily": "/daily.html",
    "/friends": "/friends.html",
    "/leaders": "/leaders.html",
    "/clan": "/clan.html",
    "/clans/join": "/clans_join.html",
    "/clans/search": "clans_search.html"
}

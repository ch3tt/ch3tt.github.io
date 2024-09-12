const PAGE_TITLE = `StarsApp`;

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
    console.log(event);
    
}   

const navigate = async (to) => {
    if (!routes[to])return;
    const route = routes[to];
    const html = await fetch(route).then((data)=>data.text());
    document.body.innerHTML = html;
}
const routes = {
    "/": "/index.html",
    "/check": "/check.html",
    "/step1": "/step1.html",
    "/step2": "/step2.html",
    "/step3": "/step3.html",
    "/home": "/home.html",
    "/earns": "/earns.html",
    "/friends": "/friends.html",
    "/leaders": "/leaders.html",
    "/clans": "/clans.html",
    "/clans/join": "/clans_join.html",
    "/clans/search": "clans_search.html"
}

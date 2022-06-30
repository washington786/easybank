const navMenuCon=document.getElementById('nav-menu-open');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');

navMenuCon.setAttribute('style','display: none;');

openBtn.addEventListener('click', ()=>{
    navMenuCon.setAttribute('style','display: inline;'); 
    openBtn.setAttribute('style','display: none;');
    closeBtn.setAttribute('style','display: inline;');

    closeBtn.addEventListener('click', ()=>{
        navMenuCon.setAttribute('style','display:none');
        closeBtn.setAttribute('style','display: none;');
        openBtn.setAttribute('style','display: inline;');
    })
})
// header collapsible
const toggle = document.querySelector(".menu-bar");
const close = document.querySelector(".close-bar");
const collapsible = document.querySelector(".collapsible");
toggle.addEventListener('click',()=>{
    collapsible.classList.toggle("hide");
});
close.addEventListener('click',()=>{
    collapsible.classList.toggle('hide')
})



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
 
const navItem = document.querySelectorAll(".nav-link");
navItem.forEach(link => {
    link.addEventListener("click", ()=>{
    collapsible.classList.toggle('hide')
    })
});

// connect wallet
const connectWallet = document.querySelector(".connect-btn");
const walletOption = document.querySelector("#connect-wallet");
const closeOpt = document.querySelector(".close-opt");
const walletLink = document.querySelectorAll(".wallet-link");
connectWallet.addEventListener("click",() => {
  walletOption.style.display = "initial"
})
closeOpt.addEventListener("click",() => {
  walletOption.style.display = "none"
})
walletLink.forEach(wallet => {
    wallet.addEventListener("click", ()=>{
    walletOption.style.display = "none"
    collapsible.classList.toggle('hide')
    })
});

// connect wallet



// Hafsah's Slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





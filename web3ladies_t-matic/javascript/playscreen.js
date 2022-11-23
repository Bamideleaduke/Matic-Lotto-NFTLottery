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

// play game event
  const inputBox = document.querySelectorAll(".num-input")
  const numBtn = document.querySelectorAll(".num");
  console.log(inputBox);
 
  // select number
  let number;
  numBtn.forEach(num => {
      num.addEventListener("click",(e) => {
      number =  e.target.textContent
      console.log(number);
    })
  });
    // get value
    let value ;
    inputBox.forEach(ele=> {
         value = [...ele.innerHTML]
      // console.log(ele.textContent);
    });
    console.log(value);
// Game section
const gameCard = document.querySelector(".game-num");
let firstTouch;
let lastTouch;
function swipeDirection(){
    let touchDiff = firstTouch - lastTouch;
    if(touchDiff > 100) gameCard.style.marginLeft = "-60%"
    if(touchDiff < -100) gameCard.style.marginLeft = "0%"
}
  
gameCard.addEventListener("touchstart", (ev) => {
    firstTouch = ev.touches[0].screenX
})
gameCard.addEventListener("touchmove", (ev) => {
  lastTouch = ev.touches[0].screenX
  console.log(lastTouch);

  swipeDirection()

})
// Game section
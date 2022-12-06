const connect = document.getElementById('connect')
const claimReward = document.querySelector(".eth-reward")
claimReward.addEventListener("click",() => {
    alert(`1Eth has been added to your wallet
    Thank You
    `)
})

function myFunction() {
    document.querySelectorAll('.connect-container')[0].style.display= 'block';
}


function nextConnect() {
    document.querySelectorAll('.connect-container')[0].style.display= 'none';
    document.querySelectorAll('.connect-container')[1].style.display= 'block';
    
}


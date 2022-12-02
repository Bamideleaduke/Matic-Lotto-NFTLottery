  // connect metamask
  const connectMetamask = async () =>{
    let accArea = document.getElementById("accountArea");
    let walletOption = document.getElementById("connect-wallet")
    if(window.ethereum !== "undefined"){
        let account;
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
         account = accounts[0];  
         let cc =   account.slice(0,account.length-37)
           accArea.innerHTML = `${cc}...${account.slice(36)}`
           walletOption.style.display = "none"
        //  document.getElementById("accountArea").innerHTML = account;
    }
}

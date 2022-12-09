let accArea = document.getElementById("accountArea");

let provider = new ethers.providers.Web3Provider(window.ethereum)


let isMetaMaskConnected = () => ethereum.isConnected()
// Connect Metamask with Dapp
const connectMetamask = async () => {
    try {
        let account = await ethereum.request({method: 'eth_requestAccounts'})
        const signer = provider.getSigner();
        accArea.innerHTML = account
        return account
    }catch (error) {
        alert('Error Connecting to metamask account:/n',error)
        return error
    }
}

  




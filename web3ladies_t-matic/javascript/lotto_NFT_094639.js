import { providers, Contract, utils } from "ethers";

try {
	const connectAddress = async () => {
		const provider = new providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);  
		const signer = provider.getSigner();
	}
	
} catch (error) {
	console.log(error)
}

const lotteryAddress = "0x311686cf48d67ce5e41ef17c778d590bae532459";
const lotteryABI = [
	{
		"inputs": [],
		"name": "claimPrize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "completePlayers",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_round",
				"type": "uint256"
			}
		],
		"name": "createRound",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "newParticipant",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "round",
				"type": "uint256"
			}
		],
		"name": "newRound",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_firstNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_secondNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_thirdNum",
				"type": "uint256"
			}
		],
		"name": "participate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selectWinner",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "firstNum",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "secondNum",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "thirdNum",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "pla_yer",
						"type": "address"
					}
				],
				"internalType": "struct MATICLOTTO.player_",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "winnerSelected",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winningWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addresstoPlayer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "firstNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "secondNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "thirdNum",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "pla_yer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfPlayers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "round",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "firstNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "secondNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "thirdNum",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "pla_yer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningAddress",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const lotteryContract = new Contract(lotteryAddress, lotteryABI, providers);

const lotteryWithSigner = Contract.connect(signer);

const participate = async() => {
	const provider = new providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const lotteryWithSigner = contract.connect(signer);
	let participating = await lotteryContract.participate(_firtNum,_secondNum,_thirdNum, {value: utils.parseEther(1)});
}
const roundCreation = async() => {
	const provider = new providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const lotteryWithSigner = contract.connect(signer);
	let _roundCreate = await lotteryContract.createRound(_round);
}

const pickwinner = async() => {
	const provider = new providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const lotteryWithSigner = contract.connect(signer);
	let selectWinner = await lotteryContract.selectWinner();
}

const claimPrize = async() => {
	const provider = new providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const lotteryWithSigner = contract.connect(signer);
	let prizeClaim = await lotteryContract.claimPrize();
} 
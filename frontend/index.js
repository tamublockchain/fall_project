const { ethers } = require("ethers");

// Replace with your provider (e.g., Infura, Alchemy, etc.)
const provider = new ethers.providers.JsonRpcProvider("YOUR_PROVIDER_URL");

// Replace with your contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS";

// Replace with your contract's ABI
const contractABI = [
    // Example ABI
    [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_unlockTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "when",
              "type": "uint256"
            }
          ],
          "name": "Withdrawal",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "owner",
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
          "name": "unlockTime",
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
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function main() {
    // Call a function from the contract
    const result = await contract.yourFunctionName();
    console.log(result);
}

main().catch(console.error);
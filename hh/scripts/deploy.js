// async function main() {
//     const [deployer] = await ethers.getSigners(); // talks to hardhat to get the address
//     console.log('Deploying contract with account:', deployer.address);
 
//     const Lock = await ethers.getContractFactory('Lock');
//     const lock = await Lock.deploy(Math.floor(Date.now() / 1000) + 3600); // 1 hour unlock time
 
//     console.log('Lock deployed to:', lock.address);
//  }
 
//  main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//        console.error(error);
//        process.exit(1);
//     });


// // Version 2


const { ethers } = require("ethers");

// Replace with your provider (e.g., Infura, Alchemy, etc.)
const provider = new ethers.providers.JsonRpcProvider("YOUR_PROVIDER_URL");

// Replace with your contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS";

// Replace with your contract's ABI
const contractABI = [
    // Example ABI
    "function yourFunctionName() view returns (uint256)",
    // Add more function signatures as needed
];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function main() {
    // Call a function from the contract
    const result = await contract.yourFunctionName();
    console.log(result);
}

main().catch(console.error);
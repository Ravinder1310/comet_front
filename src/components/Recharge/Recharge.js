import React, { useState } from 'react';
import Web3 from 'web3';

function Recharge() {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [status, setStatus] = useState('');
  const contractAddress = '0xF3c68B926Dd275b6Fa7870A68A34230a2E20Bdd9';
  const usdtAddress = '0x55d398326f99059fF775485246999027B3197955';

  const usdtAbi = [
    {
      constant: false,
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ name: '', type: 'bool' }],
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: 'sender', type: 'address' },
        { name: 'recipient', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ name: '', type: 'bool' }],
      type: 'function',
    },
    { constant: true, inputs: [], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], type: 'function' },
  ];

  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setStatus('Wallet connected');
      } else {
        setStatus('MetaMask not found. Please install MetaMask.');
      }
    } catch (error) {
      setStatus('Error connecting wallet');
    }
  };

  const handleTransfer = async () => {
    try {
      if (!window.ethereum) {
        setStatus('MetaMask not found. Please install MetaMask.');
        return;
      }

      if (!amount || parseFloat(amount) <= 0) {
        setStatus('Please enter a valid amount');
        return;
      }

      const web3 = new Web3(window.ethereum);
      const usdtContract = new web3.eth.Contract(usdtAbi, usdtAddress);

      // Approve the contract to spend the USDT
      const amountInWei = web3.utils.toWei(amount, 'ether');
      await usdtContract.methods.approve(contractAddress, amountInWei).send({ from: account });

      // Call sendUSDTToDeployer function on the contract
      const contractAbi = [
        {
          inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
          name: 'sendUSDTToDeployer',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ];
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      const transactionResponse=await contract.methods.sendUSDTToDeployer(amountInWei).send({ from: account });
      console.log("response of transaction==>",transactionResponse)

      const log = transactionResponse.logs.find(
        (log) => log.address.toLowerCase() === usdtAddress.toLowerCase()
      );
      if (log) {
        const transferredAmountHex = log.data;
        const transferredAmount = web3.utils.fromWei(transferredAmountHex, 'ether');
        console.log(`Transferred Amount: ${transferredAmount} USDT`);

        

      } else {
        console.log("No transfer log found");
      }
  
      setStatus('Transfer successful!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">USDT Transfer to Deployer Wallet</h1>

      <button
        onClick={handleConnectWallet}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {account ? `Connected: ${account.substring(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
      </button>

      <input
        type="number"
        placeholder="Enter USDT Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-2 border rounded w-64"
      />

      <button
        onClick={handleTransfer}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Transfer USDT
      </button>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
  );
}

export default Recharge;

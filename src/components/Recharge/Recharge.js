// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { useAuth } from '../context/auth';



// const AnimatedBorderBox = ({ children }) => (
//   <div className="relative p-[3px] w-[100%] m-auto rounded-lg overflow-hidden mt-2 mb-10">
//     {/* Rotating Background */}
//     <motion.div
//       className="absolute inset-0 z-10"
//       animate={{ rotate: 360 }} // Only the background rotates
//       transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//       style={{
//         background: "white",
//         backgroundSize: "200% 200%", // Smooth transition of colors
//         borderRadius: "inherit", // Matches parent border radius
//       }}
//     />

//     {/* Inner Content with Corner Borders */}
//     <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-600  to-yellow-800 text-white rounded-lg z-10">
//       {children}
//     </div>
//   </div>
// );




// function Recharge() {
//   const [amount, setAmount] = useState('');
//   const [account, setAccount] = useState('');
//   const [status, setStatus] = useState('');
//   const [auth, setAuth] = useAuth();
//   const contractAddress = '0xF3c68B926Dd275b6Fa7870A68A34230a2E20Bdd9';
//   const usdtAddress = '0x55d398326f99059fF775485246999027B3197955';

//   const usdtAbi = [
//     {
//       constant: false,
//       inputs: [
//         { name: 'spender', type: 'address' },
//         { name: 'amount', type: 'uint256' },
//       ],
//       name: 'approve',
//       outputs: [{ name: '', type: 'bool' }],
//       type: 'function',
//     },
//     {
//       constant: false,
//       inputs: [
//         { name: 'sender', type: 'address' },
//         { name: 'recipient', type: 'address' },
//         { name: 'amount', type: 'uint256' },
//       ],
//       name: 'transferFrom',
//       outputs: [{ name: '', type: 'bool' }],
//       type: 'function',
//     },
//     { constant: true, inputs: [], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], type: 'function' },
//   ];

//   const handleConnectWallet = async () => {
//     try {
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const accounts = await web3.eth.getAccounts();
//         setAccount(accounts[0]);
//         setStatus('Wallet connected');
//       } else {
//         setStatus('MetaMask not found. Please install MetaMask.');
//       }
//     } catch (error) {
//       setStatus('Error connecting wallet');
//     }
//   };

//   const handleTransfer = async () => {
//     try {
//       if (!window.ethereum) {
//         setStatus('MetaMask not found. Please install MetaMask.');
//         return;
//       }

//       if (!amount || parseFloat(amount) <= 0) {
//         setStatus('Please enter a valid amount');
//         return;
//       }

//       const web3 = new Web3(window.ethereum);
//       const usdtContract = new web3.eth.Contract(usdtAbi, usdtAddress);

//       // Approve the contract to spend the USDT
//       const amountInWei = web3.utils.toWei(amount, 'ether');
//       await usdtContract.methods.approve(contractAddress, amountInWei).send({ from: account });

//       // Call sendUSDTToDeployer function on the contract
//       const contractAbi = [
//         {
//           inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
//           name: 'sendUSDTToDeployer',
//           outputs: [],
//           stateMutability: 'nonpayable',
//           type: 'function',
//         },
//       ];
//       const contract = new web3.eth.Contract(contractAbi, contractAddress);
//       const transactionResponse=await contract.methods.sendUSDTToDeployer(amountInWei).send({ from: account });
//       console.log("response of transaction==>",transactionResponse)

//       const log = transactionResponse.logs.find(
//         (log) => log.address.toLowerCase() === usdtAddress.toLowerCase()
//       );
//       if (log) {
//         const transferredAmountHex = log.data;
//         const transferredAmount = web3.utils.fromWei(transferredAmountHex, 'ether');
//         console.log(`Transferred Amount: ${transferredAmount} USDT`);

//         try {
//           let res = await axios.post(
//             `${process.env.REACT_APP_API_URL}/user/recharge/${
//               auth?.user?._id
//             }/${transferredAmount}`
//           );
//           console.log(res.data.message);
//         } catch (error) {
//           console.log(error.message);
//         }

//       } else {
//         console.log("No transfer log found");
//       }
  
//       setStatus('Transfer successful!');
//     } catch (error) {
//       setStatus(`Error: ${error.message}`);
//     }
//   };


//   useEffect(() => {
//     handleConnectWallet();
//   },[])

//   return (
//     <AnimatedBorderBox>

//     <div className="flex flex-col items-center justify-center bg-slate-800 p-4 text-center rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">USDT Transfer to Deployer Wallet</h1>

//       <button
//   // onClick={handleConnectWallet}
//   className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 break-words text-center"
//   style={{
//     wordBreak: 'break-word',
//     whiteSpace: 'normal',
//     textAlign: 'center',
//   }}
// >
//   {`${account}`}
// </button>

//       <input
//         type="number"
//         placeholder="Enter USDT Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="mb-4 p-2 border rounded w-64"
//       />

//       <button
//         onClick={handleTransfer}
//         className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//       >
//         Transfer USDT
//       </button>

//       {status && <p className="mt-4 text-xl font-bold text-yellow-500">{status}</p>}
//     </div>
//     </AnimatedBorderBox>

//   );
// }

// export default Recharge;
















import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { motion } from "framer-motion";
import axios from 'axios';
import { useAuth } from '../context/auth';

const AnimatedBorderBox = ({ children }) => (
  <div className="relative p-[3px] w-[100%] m-auto rounded-lg overflow-hidden mt-2 mb-10">
    <motion.div
      className="absolute inset-0 z-10"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{
        background: "white",
        backgroundSize: "200% 200%",
        borderRadius: "inherit",
      }}
    />
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-600  to-yellow-800 text-white rounded-lg z-10">
      {children}
    </div>
  </div>
);

function Recharge() {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [status, setStatus] = useState('');
  const [bnbKombat, setBnbKombat] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);
  const [auth, setAuth] = useAuth();
  const contractAddress = '0xF3c68B926Dd275b6Fa7870A68A34230a2E20Bdd9';
  const usdtAddress = '0x55d398326f99059fF775485246999027B3197955';
  let deductbnbKombat =0;
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
        // fetchUserDetails();
      } else {
        setStatus('MetaMask not found. Please install MetaMask.');
      }
    } catch (error) {
      setStatus('Error connecting wallet');
    }
  };

  // const fetchUserDetails = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${auth?.user?._id}`);
  //     setBnbKombat(response.data.bnbKombat || 0);
  //   } catch (error) {
  //     console.error('Error fetching user details:', error.message);
  //   }
  // };

  const calculatePayableAmount = (inputAmount) => {
    const total = parseFloat(inputAmount) || 0;
    const bnbPortion = Math.min(auth?.user?.bnbKombat, total * 0.4); // Max bnbKombat used is 40%
    deductbnbKombat = bnbPortion;
    const userPortion = total - bnbPortion; // User pays the remaining
    setPayableAmount(userPortion.toFixed(2));
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    calculatePayableAmount(inputAmount);
  };

  const handleTransfer = async () => {
    try {
      if (!window.ethereum) {
        setStatus('MetaMask not found. Please install MetaMask.');
        return;
      }

      if (!payableAmount || parseFloat(payableAmount) <= 0) {
        setStatus('Please enter a valid amount');
        return;
      }

      const web3 = new Web3(window.ethereum);
      const usdtContract = new web3.eth.Contract(usdtAbi, usdtAddress);
      const amountInWei = web3.utils.toWei(payableAmount, 'ether');

      // Approve the contract to spend the USDT
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
      const transactionResponse = await contract.methods.sendUSDTToDeployer(amountInWei).send({ from: account });

      console.log('Transaction Response:', transactionResponse);
      setStatus('Transfer successful!');

      // Update the backend
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/user/recharge/${auth?.user?.referralCode}/${payableAmount}`,{deductbnbKombat});
        console.log('Recharge updated on backend');
      } catch (error) {
        console.error('Error updating recharge on backend:', error.message);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    handleConnectWallet();
    setBnbKombat(auth?.user?.bnbKombat);
  }, []);

  return (
    <AnimatedBorderBox>
      <div className="flex flex-col items-center justify-center bg-slate-800 p-4 text-center rounded-lg">
        {/* <h1 className="text-2xl font-bold mb-4">USDT Transfer to Deployer Wallet</h1> */}
        <button
          className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 break-words text-center"
          style={{ wordBreak: 'break-word', whiteSpace: 'normal', textAlign: 'center' }}
        >
          {account || 'Connect Wallet'}
        </button>
        <p className="text-yellow-500 mb-2">Your BNB Kombat: {auth?.user?.bnbKombat}</p>
        <input
          type="number"
          placeholder="Enter USDT Amount"
          value={amount}
          onChange={handleAmountChange}
          className="mb-4 p-2 border rounded w-64 text-black"
        />
        <p className="text-yellow-500 mb-2">Payable Amount: {payableAmount} USDT</p>
        <button
          onClick={handleTransfer}
          className="bg-green-500 text-white py-2 px-4 rounded font-semibold hover:bg-green-600"
        >
          Deposite Now
        </button>
        {status && <p className="mt-4 text-xl font-bold text-yellow-500">{status}</p>}
      </div>
    </AnimatedBorderBox>
  );
}

export default Recharge;


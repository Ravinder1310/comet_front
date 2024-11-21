import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kombat = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <button
        className=""
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        🔙{" "}
      </button>
      <div className="flex w-[40%] m-auto mt-10  items-center">
        <img className="w-18 m-auto" src="/images/xyz.png" alt="error" />
      </div>
      <p className="text-left mt-10">
        (BNB ) -{" "}
        <span className="text-gray-400">
          one of the largest blockchain-based operating systems in the world,
          The world needs a decentralized, secure, and scalable blockchain at
          BNB 
        </span>
      </p>
      <h1 className="font-bold mt-10">
        {" "}
        <span className="text-purple-400 text-xl">|</span> How to get BNB ?
      </h1>
      <p className="text-left text-gray-500">
        You can easily get BNB  on every popular exchangers like Binance,
        Matic, Bitfinex, OKX and many others. After exchange send BNB  on
        your personal wallet and after that send it to our smart-contract
        address.
      </p>
      <p className="text-gray-500 text-left mt-8">
        <span className="text-white">⚠️ IMPORTANT! {"  "}</span>
        We are working only with personal wallets. Dont make deposits form
        exchangers accounts, you will lose funds, because payouts will come to
        exchanger address, not yours!
      </p>
      <p className="text-left font-semibold mt-8">
        <span className="text-purple-400 text-xl font-bold">| </span>
        What BNB  personal wallets to use?
      </p>
      <p className="text-left mt-3 text-gray-500">
        You can use two types of wallets: - <span className="text-white text-bold">Browser extensions</span> . For example
        <span className="text-white text-bold"> MetaMask / TokenPocket</span>
       . Just install extension on your favorite browser
        and create personal wallet address.
      </p>
    </div>
  );
};

export default Kombat;

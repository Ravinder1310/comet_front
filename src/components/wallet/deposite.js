import React from "react";
import { useNavigate } from "react-router-dom";

const WalletDeposite = () => {

    const navigate = useNavigate();

  return (
    <div class="bg-[#161c2d] text-white p-6 px-3 w-full mx-auto">
      {/* <!-- Header --> */}
      <button className="" onClick={() => {navigate(-1)}}> 🔙 </button>
      <div class="text-center mb-4 mt-2">
        <h2 class="text-xl font-bold">MAKE NEW DEPOSIT</h2>
        <p class="text-sm text-gray-400 mt-3">
          Specify deposit |
          <span class="inline-flex items-center ml-1 text-purple-400">
            POL amount here:
          </span>
        </p>
      </div>

      {/* <!-- Input Fields --> */}
      <div class="space-y-4">
        <input
          type="text"
          placeholder="1000"
          class="w-full bg-[#0b1122] border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none"
        />
        <input
          type="text"
          placeholder="User address"
          class="w-full bg-[#0b1122] border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Security Pin"
          class="w-full bg-[#0b1122] border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none"
        />
      </div>

      {/* <!-- Deposit Button --> */}
      <button class="mt-4 w-full border-b-4 border-green-500 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full">
        DEPOSIT NOW
      </button>

      {/* <!-- Divider --> */}
      <div class="border-t border-gray-700 my-6"></div>

      {/* <!-- Wallet Sections --> */}
      <div class="space-y-6">
        {/* <!-- Split Wallet --> */}
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold">My Investment:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-purple-600 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button class="mt-2 border-b-4 border-green-500 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            VIEW HISTORY
          </button>
        </div>

 



        {/* <!-- Left Free POL --> */}
      
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold">Total Withdrawl:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-purple-600 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button class="mt-2 border-b-4 border-green-500 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            VIEW HISTORY
          </button>
        </div>
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold">Balance:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-purple-600 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Request Withdraw:</p>
          <button class="mt-2 border-b-4 border-green-500 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            WITHDRAW
          </button>
          <p className="text-gray-400 mt-3 font-sans">
            "*In the event of an unsuccessful withdrawl resulting in a zero
            balance display, re-initate the withdrawl process , disregarding the
            current balance state. This will re-trigger the pending withdrawl
            request, facilitating the successful transfer of funds to your
            designated wallet address."
          </p>
        </div>
        <div class="bg-[#161c2d] text-white rounded-lg shadow-lg w-[90%] mx-auto mt-6">
          {/* <!-- Referral Link Header --> */}
          <div class="text-center mb-2">
            <p class="text-sm font-semibold text-gray-400">
              Your referral link:
            </p>
          </div>

          {/* <!-- Referral Link Input --> */}
          <div class="bg-[#0b1122] border border-gray-600 rounded-md text-white px-4 py-2 mb-4 text-center">
            https://bnbkombet.com?ref=0x7D3F380
          </div>

          {/* <!-- Buttons --> */}
          <div class="flex flex-col gap-2">
            <button class="w-full border-b-4 border-green-500 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full">
              COPY REFERRAL LINK
            </button>
            <button class="w-full border-b-4 border-green-500    bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full">
              PROMO MATERIALS
            </button>
          </div>

          {/* <!-- Divider --> */}
          <div class="border-t border-gray-700 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default WalletDeposite;
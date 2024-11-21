import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Recharge from "../Recharge/Recharge";

const WalletDeposite = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const [invitationLink, setInvitationLink] = useState("");


    const generateInvitationLink = () => {
    const link = `${window.location.origin}/register?referral=${user?.referralCode}`;
      setInvitationLink(link);
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(invitationLink);
      setIsLinkCopied(true);
      toast("Invitation link copied to clipboard!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
        icon: "👏",
      });
  
      setTimeout(() => {
        setIsLinkCopied(false);
      }, 2000);
    };


    useEffect(() => {
      let userSign = localStorage.getItem("user");
      setUser(userSign);
    generateInvitationLink();
    },[])


  return (
    <div class="bg-[#161c2d] text-white p-6 px-3 w-full mx-auto">
      <Toaster/>
      {/* <!-- Header --> */}
      <button className="" onClick={() => {navigate(-1)}}> 🔙 </button>
      <div class="text-center mb-4 mt-2">
        <h2 class="text-xl font-bold">MAKE NEW DEPOSIT</h2>
        <p class="text-sm text-gray-400 mt-3">
          Specify deposit |
          <span class="inline-flex items-center ml-1 text-yellow-500">
            POL amount here:
          </span>
        </p>
      </div>

      {/* <!-- Input Fields --> */}
     <Recharge/>
      {/* <!-- Divider --> */}
      <div class="border-t border-gray-700 my-6"></div>

      {/* <!-- Wallet Sections --> */}
      <div class="space-y-6">
        {/* <!-- Split Wallet --> */}
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold text-left text-white">My Investment:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button onClick={() => {navigate('/recharge')}} class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            VIEW HISTORY
          </button>
        </div>

 



        {/* <!-- Left Free POL --> */}
      
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold text-left text-white">Total Withdrawl:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button onClick={() => {navigate('/withdrawl')}} class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            VIEW HISTORY
          </button>
        </div>
        <div class=" bg-slate-800 p-4 border-l-4 border-purple-600">
          <p class="text-sm font-semibold text-left text-white">Balance:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Request Withdraw:</p>
          <input 
        type="number"
        placeholder="Enter amount"
        className="w-full h-10 rounded-full text-center text-black font-bold mt-4"
        />
          <button class="mt-4 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full">
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
            {invitationLink}
          </div>

          {/* <!-- Buttons --> */}
          <div class="flex flex-col gap-2">
            <button className={`w-full border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full
              ${isLinkCopied ? "opacity-50 cursor-not-allowed" : ""}
              `}
              onClick={copyToClipboard}
            disabled={isLinkCopied}
              >
              {isLinkCopied ? "Copied!" : "Copy Referral Link"}
            </button>
            <button class="w-full border-b-4 border-green-500    bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full">
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

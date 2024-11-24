import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";

const WalletDetails = () => {
  const navigate = useNavigate();
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [auth, setAuth] = useAuth();
  const [invitationLink, setInvitationLink] = useState("");
  const [airTotal, setAirTotal] = useState(0);
  const [f100Total, setF100Total] = useState(0);
  const [backTotal, setBackTotal] = useState(0);
  const [magicTotal, setMagicTotal] = useState(0);
  const [uplineTotal, setUplineTotal] = useState(0);
  const [withdrawlUplineTotal, setWithdrawlUplineTotal] = useState(0);
  const [globalTotal, setGlobalTotal] = useState(0);
  

  const generateInvitationLink = () => {
    const link = `${window.location.origin}/register/${auth?.user?.referralCode}`;
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



  const getAirDropIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/activate-history/${
          auth?.user?._id
        }`
      );
      console.log(res.data.data);
      // setAirdropIncomeHistory(res.data.data);
      let air = 0;

      for(let i=0;i<res.data.data.length;i++){
          air ++;
      }

      setAirTotal(air*10);
    } catch (error) {
      console.log(error.message);
    }
  };




  const getF50IncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/f100/${
          auth?.user?._id
        }`
      );
      // console.log(res.data.data);
      let f100 = 0;

      for(let i=0;i<res.data.data.length;i++){
        f100 += res.data.data[i].amount;
      }

      setF100Total(f100);
    } catch (error) {
      console.log(error.message);
    }
  };



  const getDirectIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/back-amount/${
          auth?.user?._id
        }`
      );
      // console.log(res.data.data);
      let back = 0;

      for(let i=0;i<res.data.data.length;i++){
        back += res.data.data[i].amount;
      }

      setBackTotal(back);
    } catch (error) {
      console.log(error.message); 
    }
  };




  const getMagicIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/magic/${
          auth?.user?._id
        }`
      );
      // console.log(res.data.data);
      let magic = 0;

      for(let i=0;i<res.data.data.length;i++){
        magic += res.data.data[i].amount;
      }

      setMagicTotal(magic);
    } catch (error) {
      console.log(error.message);
    }
  };




  const getUplineIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/level/${
          auth?.user?._id
        }`
      );
      // console.log(res.data.data);
      let upline = 0;

      for(let i=0;i<res.data.data.length;i++){
        upline += res.data.data[i].amount;
      }

      setUplineTotal(upline);
    } catch (error) {
      console.log(error.message);
    }
  };





  const getWithdrawlUplineIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/withdrawl-upline/${
          auth?.user?._id
        }`
      );
      // console.log(res);
      let up = 0;

      for(let i=0;i<res.data.data.length;i++){
        up += res.data.data[i].amount;
      }

      setWithdrawlUplineTotal(up);
    } catch (error) {
      console.log(error.message);
    }
  };



  const getGlobalIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/global/${
          auth?.user?._id
        }`
      );
      // console.log(res);
      let global = 0;

      for(let i=0;i<res.data.data.length;i++){
        global += res.data.data[i].amount;
      }

      setGlobalTotal(global);
    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    // let userSign = localStorage.getItem("user");
    // setUser(userSign);
    console.log(auth?.user?.teamSize.length);
    getAirDropIncomeHistory();
    getF50IncomeHistory();
    getDirectIncomeHistory();
    getMagicIncomeHistory();
    getUplineIncomeHistory();
    generateInvitationLink();
    getWithdrawlUplineIncomeHistory();
    getGlobalIncomeHistory();
  }, []);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
    toast.success("Logout successfully");
  };

  return (
    <div class="bg-[#161c2d] text-white p-6 px-3 w-full mx-auto">
      <Toaster />
      {/* <!-- Header --> */}
      <button
        className=""
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        🔙{" "}
      </button>
      <div className="bg-gray-800 rounded-lg shadow-lg m-auto p-6 px-2 mt-4 w-full text-white relative">
        <h2 className="text-center text-xl font-bold mb-4 text-white">
          WALLET STATISTIC
        </h2>
        <div className="flex items-center justify-center bg-gray-900 rounded-lg p-3 mb-4">
          <span className="text-yellow-500 font-bold mr-2">⚡</span>
          <p className="text-sm truncate text-white font-semibold">
            {auth?.user?.walletAddress}
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-center">
            <span className="text-gray-300 font-bold mr-2">🔗</span>
            <p className="text-sm break-all">
              <a
                href={invitationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 underline"
              >
                {invitationLink}
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Share this link with your partners to get free BNB Kombat
        </p>
      </div>

      {/* <!-- Divider --> */}
      <div class="border-t border-gray-700 my-6"></div>

      {/* <!-- Wallet Sections --> */}
      <div class="space-y-6">
        {/* <!-- Split Wallet --> */}

        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500 text-left text-white">
          <p class="text-sm font-semibold text-left text-white">
            Total Income :
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">$ {parseFloat(auth?.user?.totalEarning).toFixed(2) || 0}</p>
          </div>
        </div>

        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            Direct Business :
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(auth?.user?.directBussiness).toFixed(2) || 0}</p>
          </div>
        </div>

        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            Team Business :
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className= "text-yellow-500 font-bold text-2xl" >${ parseFloat(auth?.user?.teamBusiness).toFixed(2) || 0}</p>
          </div>
        </div>

        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">My Team:</p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">{ auth?.user?.teamSize.length || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3"> Click to View: </p>
          <button
           onClick={() => {
            navigate("/users/user/myteam");
          }}
          class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full">
            VIEW TEAM
          </button>
        </div>


        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
          Free Airdrop Income:
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(uplineTotal).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/upline-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>
        

        {/* <!-- Left Free POL --> */}
       


       


        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            F50 Program Income:
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(f100Total).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/f50-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>


        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            100% Direct Income :
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(backTotal).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/direct-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>


        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            Magic Income:
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(magicTotal).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/magic-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>
        {/* <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
           100% Direct Income:
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">$0</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/direct-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div> */}
        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            Upline Bonus:
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(withdrawlUplineTotal).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/withdrawl-upline-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>


        <div class=" bg-slate-800 p-4 border-l-4 border-yellow-500">
          <p class="text-sm font-semibold text-left text-white">
            Global Income :
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <img src="/images/pl.png" className="w-8" alt="error" />
            <p className="text-yellow-500 font-bold text-2xl">${ parseFloat(globalTotal).toFixed(2) || 0}</p>
          </div>
          <hr className="mt-3" />
          <p class="text-sm  text-gray-400 text-left mt-3">Click to View:</p>
          <button
            onClick={() => {
              navigate("/users/user/global-income");
            }}
            class="mt-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full w-full"
          >
            VIEW HISTORY
          </button>
        </div>



        <div class="bg-[#161c2d] text-white rounded-lg shadow-lg w-[90%] mx-auto mt-6">
          {/* <!-- Referral Link Header --> */}
          <div class="text-center mb-2">
            <p class="text-sm font-semibold text-gray-400">
              Your referral link:
            </p>
          </div>

          {/* <!-- Referral Link Input --> */}
          <div className="bg-[#0b1122] border border-gray-600 rounded-md text-white px-4 py-2 mb-4 text-center whitespace-normal break-words">
            {invitationLink}
          </div>

          {/* <!-- Buttons --> */}
          <div class="flex flex-col gap-2">
            <button
              className={`w-full border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full
              ${isLinkCopied ? "opacity-50 cursor-not-allowed" : ""}
              `}
              onClick={copyToClipboard}
              disabled={isLinkCopied}
            >
              {isLinkCopied ? "Copied!" : "Copy Referral Link"}
            </button>
            <button
              onClick={handleLogout}
              class="w-full border-b-4 border-green-500    bg-yellow-600 hover:bg-yellow-5700 text-white font-semibold py-2 rounded-full"
            >
              LOGOUT
            </button>
          </div>

          {/* <!-- Divider --> */}
          <div class="border-t border-gray-700 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;

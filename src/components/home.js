import React, { useEffect } from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import back_logo from "./images/back_logo.png";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className=" min-h-screen pb-10 bg-black text-white"
      style={{
        backgroundImage: `url(require('./images/back_logo.png'))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar Icons */}
      <div className="fixed right-0 top-32 z-50 flex flex-col space-y-2">
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-blue-500"
        >
          <FaGlobe />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-green-500"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-red-600"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-blue-300"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-blue-500"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-red-500"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-xl bg-white p-1 rounded-l-full text-yellow-400"
        >
          <FaReddit />
        </a>
        {/* <a href="#" className="text-2xl bg-white p-1 rounded-l-lg text-black"><FaTiktok /></a> */}
      </div>

      {/* Main Content */}
      <div className="bg-purple-600 p-10 py-4">
      <div className="flex w-[70%] m-auto  items-center">
          <img className="w-[100px] m-auto" src="/images/bnb1.png" alt="error" />
        </div>
        <div className="flex justify-between text-yellow-300 font-semibold">
           <h1 onClick={() => {navigate('/wallet-deposite')}}>Make Deposite</h1>
           <h1 onClick={() => {navigate('/wallet-details')}}>Wallet Statitics</h1>
        </div>
      </div>
      <div
        className="w-full m-auto max-w-md px-4 py-8 rounded-lg text-center space-y-4"
        style={{
          backgroundImage: `url(require('./images/back_logo.png'))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        

        {/* Main Heading */}
        <h1 className="text-lg mt-6">RELIABLE INVESTMENTS WITH</h1>
        <div className="flex w-[70%] m-auto  items-center">
          <img className="w-18 m-auto" src="/images/xyz.png" alt="error" />
        </div>

        {/* Promotion Text */}
        <p className="text-[12px] w-[75%] m-auto font-semibold mt-4 leading-5">
          GET FREE 10 BNB Kombat REWARDS BY FREE REGISTRATION AND ALSO GET BENEFIT
          FREE REFERRAL PROGRAM UP TO 11 LEVELS
        </p>

        <hr className="border border-yellow-400" />

        {/* Features List */}
        <ul className="text-sm space-y-2 mt-4 text-left">
          <li className="flex">
            <span className="mr-2">✅</span> Blockchain decentralized and
            anonymous platform
          </li>
          <li className="flex">
            <span className="mr-2">✅</span> Totally secure income based on
            BNB Kombat smart-contract
          </li>
          <li className="flex">
            <span className="mr-2">✅</span> Smart-contract verified and audited
            by independent company
          </li>
        </ul>

        {/* Buttons */}
        <div className="space-y-3 mt-6">


         <Register/>
          <Login/>


          <div className="w-full py-2 text-white font-bold underline">
            Check Current State BNB Kombet smart-contract
          </div>
          <button className="w-full py-2 border-b-4 border-green-500 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">
            RESCAN
          </button>
          <p>
            If matic is deducted and id not registered, PLEASE DONT MAKE THE
            PAYMENT AGAIN and rescan you transaction Here
          </p>
        </div>
      </div>
      <div class=" text-white py-8 px-4 text-center w-full sm:w-96 mx-auto">
        <h2 class="text-2xl font-bold uppercase mb-4">
          We Will Multiply Your Funds Unlimited
        </h2>
        <p class="uppercase text-gray-400  mb-6">Without Any Risks</p>
        <div class="border-t border-gray-600 mb-6"></div>
        <ul class="space-y-4">
          <li>
            <a href="#" class="text-purple-600 font-semibold hover:underline">
              Maticverious Scan
            </a>
          </li>
          <li>
            <a href="#" class="text-purple-600 font-semibold hover:underline">
              See POL Coin at Coin Market Cap
            </a>
          </li>
          <li class="text-sm">
            Reliability of BNB Kombat smart-contract. <br />
            <span class="font-semibold">Scam is impossible!</span>
          </li>
        </ul>
        <p class="text-sm mt-6">
          Smart-contract technology ensures full safety of all participants'
          funds. <br />
          Nobody can steal funds, or change contract functions.
        </p>
      </div>
      <div data-aos="flip-right" className="w-[85%] m-auto p-5 bg-gradient-to-r from-gray-800 via-gray-600  to-purple-800 text-white rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-lg font-bold flex items-center">
            Worldwide legal company with professional team
          </h3>
        </div>
        <p className="text-sm">
          We are the officially registered company with team of trusted
          professionals on blockchain market. We are working 24/7 to increase
          platform popularity and make it truly worldwide.
        </p>
        <p className="font-semibold">Join us and get your profit!</p>{" "}
      </div>

      <hr className="border-t-2 mt-10 border-dashed w-[90%] m-auto" />
      <div className="mt-6 w-[80%] m-auto text-center">
        <p className="text-[29px] font-semibold leading-8">
          HOW TO WORK WITH PLATFORM
        </p>

        <p className="text-[14px] text-gray-400 font-semibold leading-8">
          SIMPLE 3 STEPS TO GET EARNINGS
        </p>
      </div>

      <div className="mt-6">
        <h1 className="text-center mb-4 text-xl text-gray-400">
          {" "}
          Step #1: Sign Up
        </h1>
        <div data-aos="flip-left" className="w-[85%] m-auto p-5 bg-gradient-to-r from-gray-800 via-gray-600  to-purple-800 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* BNB Kombat Icon - Replace with an actual icon if available */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              GET (BNB Kombat)
            </h3>
          </div>
          <p className="text-sm mb-4">
            We recommend to use:{" "}
            <span className="font-semibold">Token Pocket</span> /{" "}
            <span className="font-semibold">MetaMask</span> browser extensions.
            You can get BNB Kombat coins via popular exchangers.
          </p>
          <button className="w-full py-2 mt-4 border-b-4 border-green-500 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            HOW TO GET BNB Kombat
          </button>
        </div>

        <div data-aos="flip-right" className="w-[85%] m-auto mt-10 p-5 bg-gradient-to-r from-gray-800 via-gray-600 to-purple-800 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* BNB Kombat Icon - Replace with an actual icon if available */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              MUST HAVE SOME BNB Kombat FOR FEE
            </h3>
          </div>
          <p className="text-sm mb-4">
            Empowering users through decentralized design, distribution, and
            direction. <span className="font-semibold">#BNB Kombat</span>
            is the 3D blockchain that is changing the way you interact with
            crypto.
          </p>
          <button className="w-full py-2 mt-4 border-b-4 border-green-500 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            SIGN UP NOW
          </button>
        </div>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-gray-400">
          Step #2: Get BNB Kombat earnings
        </h1>
        <div data-aos="flip-left" className="w-[85%] m-auto p-5 bg-gradient-to-r from-gray-800 via-gray-600 to-purple-800 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* BNB Kombat Icon - Replace with an actual icon if available */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              GET YOUR BNB Kombat EVERY MOMENT
            </h3>
          </div>
          <p className="text-sm mb-4">
            Free Refferal BNB Kombat Rewards Programme . Get free 10 BNB Kombat Coin
            Reward just by free ragistration and also get benifit free refferal
            program up to 11 Levels
            <span className="font-semibold">
              Additional earnings with this program:
            </span>{" "}
            Direct team's Reward: You will get benifit of 1 BNB Kombat from every
            level up to 11 Levels Self - 10 BNB Kombat Each Level = 1 BNB Kombat
          </p>
          <button className="w-full py-2 border-b-4 border-green-500 mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            YOUR WALLET STATISTICS
          </button>
        </div>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-gray-400">
          Step #3: Get Benifits of M50
        </h1>
        <div data-aos="flip-right" className="w-[85%] m-auto max-w-xl p-5 bg-gradient-to-r from-gray-800 via-gray-600 to-purple-600 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* Replace with an actual icon or SVG for the "M50" logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              REQUEST M50 PROGRAM
            </h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                Get a Huge Team in{" "}
                <span className="font-semibold">M50 Program</span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                M50 Program is Designed and Developed by a Unique and Smart Way
                from which You will get a Huge Team
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                You will Receive again and again Earnings from the Team up to{" "}
                <span className="font-semibold">3.33% Daily</span> of your
                investment
              </p>
            </li>
          </ul>
        </div>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-gray-400">
          Step #4: Get Benifits of Magic Income
        </h1>

        <div data-aos="flip-left" className="w-[85%] m-auto max-w-xl p-5 bg-gradient-to-r from-gray-800 via-gray-600 to-purple-600 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* Replace with an actual icon or SVG for the "M50" logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              MAGIC INCOME PROGRAM
            </h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                Magic Income will be distributed Weekly Basis according of your
                front Business Legs.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>From first leg 0%</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>From second leg 5%</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>From third leg 10%</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>From 4th leg 15%</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>From 5th and above Legs 20%.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>There is no caping in magic income.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>It will be distributed up to unlimited Depth of Levels.</p>
            </li>
          </ul>
        </div>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-gray-400">
          Step #5: Get Benifits of Pre Launching Bonanza
        </h1>

        <div data-aos="flip-right" className="w-[85%] m-auto max-w-xl p-5 bg-gradient-to-r from-gray-800 via-gray-600 to-purple-600 text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center">
              <span className="mr-2">
                {/* Replace with an actual icon or SVG for the "M50" logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11l-6-6m0 0l-6 6m6-6v12"
                  />
                </svg>
              </span>
              Pre Launching Program
            </h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                Get 100% Direct income from your Active Direct's Upgraded
                Package.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>Offer valid for 30 days from your TOP-UP Day.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                1 month from ID activation date. 100% direct sponsor income will
                be received..
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                40% direct sponsor income will be received in the 2nd month from
                ID activation date.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                30% direct sponsor income will be received in the 3rd month from
                ID activation date.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                20% direct sponsor income will be received in the 4th month from
                ID activation date.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">
                {/* Checkmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p>
                10% direct sponsor income will be received in the 5th month from
                ID activation date.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class=" text-white py-8 px-8 mt-10 w-full sm:w-96 mx-auto">
        <div class="text-sm">
          <p>Copyrights:</p>
          <p>
            BNB Kombet LTD |{" "}
            <a href="#" class="text-blue-400 hover:underline">
              https://BnbKombet.com/
            </a>
          </p>
          <p>Blockchain investment platform</p>
          <p>2024 © All Rights Reserved</p>
          <p>Smart-contract address: #</p>
        </div>

        <div class="text-sm mb-6">
          <p>
            Powered by{" "}
            <span class="text-purple-400 font-bold">⚛ BNB Kombat blockchain</span>
          </p>
        </div>

        <div class="space-y-4">
          <button class="bg-purple-700 border-b-4 border-green-500 w-full text-white uppercase text-lg font-semibold py-2 px-6 rounded-full hover:bg-purple-800">
            Make Deposit
          </button>
          <button class="bg-purple-700 border-b-4 border-green-500 w-full text-white uppercase text-lg font-semibold py-2 px-6 rounded-full hover:bg-purple-800">
            Wallet Statistic
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

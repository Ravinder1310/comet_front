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
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import back_logo from "./images/back_logo.png";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { useNavigate } from "react-router-dom";

const AnimatedBorderBox = ({ children }) => (
  <div className="relative p-[3px] w-[90%] m-auto rounded-lg overflow-hidden mt-2 mb-10">
    {/* Rotating Background */}
    <motion.div
      className="absolute inset-0 z-10"
      animate={{ rotate: 360 }} // Only the background rotates
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{
        background: "white",
        backgroundSize: "200% 200%", // Smooth transition of colors
        borderRadius: "inherit", // Matches parent border radius
      }}
    />

    {/* Inner Content with Corner Borders */}
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-600  to-yellow-800 text-black rounded-lg z-10">
      {children}
    </div>
  </div>
);

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
      <div className="fixed right-0 top-44 z-50 flex flex-col space-y-2">
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
      <div className="bg-yellow-500 p-10 py-4 fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-50">
        {/* Logo Section */}
        <div className="flex w-[70%] m-auto items-center">
          <img className="w-[100px] m-auto" src="/images/bnb1.png" alt="Logo" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between text-white font-semibold mt-2">
          <h1
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/wallet-deposite");
            }}
          >
            Make Deposit
          </h1>
          <h1
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/wallet-details");
            }}
          >
            Wallet Statistics
          </h1>
        </div>
      </div>

      <div
        className="w-full m-auto max-w-md px-4  py-8 pt-44 rounded-lg text-center space-y-4"
        style={{
          backgroundImage: `url(require('./images/back_logo.png'))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Heading */}
        <h1 className="text-lg mt-8">RELIABLE INVESTMENTS WITH</h1>
        <div className="flex w-[70%] m-auto  items-center">
          <img className="w-18 m-auto" src="/images/xyz.png" alt="error" />
        </div>

        {/* Promotion Text */}
        <p className="text-[12px] w-[75%] m-auto font-semibold mt-4 leading-5 text-white">
          GET FREE 10 BNB Kombat REWARDS BY FREE REGISTRATION AND ALSO GET
          BENEFIT FREE REFERRAL PROGRAM UP TO 11 LEVELS
        </p>

        <hr className="border border-yellow-400" />

        {/* Features List */}
        <ul className="text-sm space-y-2 mt-4 text-left">
          <li className="flex">
            <span className="mr-2">✅</span> Blockchain decentralized and
            anonymous platform
          </li>
          <li className="flex">
            <span className="mr-2">✅</span> Totally secure income based on BNB
            Kombat smart-contract
          </li>
          <li className="flex">
            <span className="mr-2">✅</span> Smart-contract verified and audited
            by independent company
          </li>
        </ul>

        {/* Buttons */}
        <div className="space-y-3 mt-6">
          {/* <Register /> */}
          {/* <Login /> */}

          <div className="w-full py-2 text-white font-bold underline">
            Check Current State BNB Kombet smart-contract
          </div>
          <button className="w-full py-2 border-b-4 border-green-500 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-semibold">
            RESCAN
          </button>
          <p className="text-white">
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
            <a href="#" class="text-yellow-500 font-semibold hover:underline">
              BNB Kombat Scan
            </a>
          </li>
          <li>
            <a href="#" class="text-yellow-500 font-semibold hover:underline">
              See POL Coin at Coin Market Cap
            </a>
          </li>
          <li class="text-sm">
            Reliability of BNB Kombat smart-contract. <br />
            <span class="font-semibold">Scam is impossible!</span>
          </li>
        </ul>
        <p class="text-sm mt-6 text-white">
          Smart-contract technology ensures full safety of all participants'
          funds. <br />
          Nobody can steal funds, or change contract functions.
        </p>
      </div>
      <AnimatedBorderBox>
        <div
          data-aos="flip-right"
          className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <h3 className="text-lg text-left font-bold flex items-center">
              Worldwide legal company with professional team
            </h3>
          </div>
          <p className="text-sm text-left">
            We are the officially registered company with team of trusted
            professionals on blockchain market. We are working 24/7 to increase
            platform popularity and make it truly worldwide.
          </p>
          <p className="font-semibold text-left">Join us and get your profit!</p>{" "}
        </div>
      </AnimatedBorderBox>

      <hr className="border-t-2 mt-10 border-dashed w-[90%] m-auto" />
      <div className="mt-6 w-[80%] m-auto text-center">
        <p className="text-[29px] font-semibold leading-8 text-white">
          HOW TO WORK WITH PLATFORM
        </p>

        <p className="text-[14px] text-gray-400 font-semibold leading-8">
          SIMPLE 3 STEPS TO GET EARNINGS
        </p>
      </div>

      <div className="mt-6">
        <h1 className="text-center mb-4 text-xl text-white">
          {" "}
          Step #1: Sign Up
        </h1>
        <AnimatedBorderBox>
          <div
            data-aos="flip-left"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
            <p className="text-sm mb-4 text-left">
              We recommend to use:{" "}
              <span className="font-semibold">Token Pocket</span> /{" "}
              <span className="font-semibold">MetaMask</span> browser
              extensions. You can get BNB Kombat coins via popular exchangers.
            </p>
            <button className="w-full py-2 mt-4 border-b-4 border-red-500 bg-black hover:bg-gray-700 text-white font-semibold rounded-full shadow-md transition duration-300">
              HOW TO GET BNB Kombat
            </button>
          </div>
        </AnimatedBorderBox>

        <AnimatedBorderBox>
          <div
            data-aos="flip-right"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
            <p className="text-sm mb-4 text-left">
              Empowering users through decentralized design, distribution, and
              direction. <span className="font-semibold">#BNB Kombat</span>
              is the 3D blockchain that is changing the way you interact with
              crypto.
            </p>
            <button className="w-full py-2 mt-4 border-b-4 border-red-500 bg-black hover:bg-gray-700 text-white rounded-full font-semibold shadow-md transition duration-300">
              SIGN UP NOW
            </button>
          </div>
        </AnimatedBorderBox>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-white">
          Step #2: Get BNB Kombat earnings
        </h1>

        <AnimatedBorderBox>
          <div
            data-aos="flip-left"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
            <p className="text-sm mb-4 text-left">
              Free Refferal BNB Kombat Rewards Programme . Get free 10 BNB
              Kombat Coin Reward just by free ragistration and also get benifit
              free refferal program up to 11 Levels
              <span className="font-semibold">
                Additional earnings with this program:
              </span>{" "}
              Direct team's Reward: You will get benifit of 1 BNB Kombat from
              every level up to 11 Levels Self - 10 BNB Kombat Each Level = 1
              BNB Kombat
            </p>
            <button
            onClick={() => {
              navigate("/wallet-details");
            }}
            className="w-full py-2 border-b-4  mt-4 border-red-500 bg-black hover:bg-gray-700 text-white rounded-full font-semibold shadow-md transition duration-300">
              YOUR WALLET STATISTICS
            </button>
          </div>
        </AnimatedBorderBox>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-white">
          Step #3: Get Benifits of M50
        </h1>
        <AnimatedBorderBox>
          <div
            data-aos="flip-right"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  Get a Huge Team in{" "}
                  <span className="font-semibold">M50 Program</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className="text-left mt-0">
                  M50 Program is Designed and Developed by a Unique and Smart
                  Way from which You will get a Huge Team
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className="text-left mt-0">
                  You will Receive again and again Earnings from the Team up to{" "}
                  <span className="font-semibold">3.33% Daily</span> of your
                  investment
                </p>
              </li>
            </ul>
          </div>
        </AnimatedBorderBox>

        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-white">
          Step #4: Get Benifits of Magic Income
        </h1>
        <AnimatedBorderBox>
          <div
            data-aos="flip-left"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  Magic Income will be distributed Weekly Basis according of
                  your front Business Legs.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">From first leg 0%</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">From second leg 5%</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">From third leg 10%</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">From 4th leg 15%</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">From 5th and above Legs 20%.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">There is no caping in magic income.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">It will be distributed up to unlimited Depth of Levels.</p>
              </li>
            </ul>
          </div>
        </AnimatedBorderBox>
        <h1 className="text-center w-[70%] m-auto mt-10 mb-4 text-xl text-white">
          Step #5: Get Benifits of Pre Launching Bonanza
        </h1>
        <AnimatedBorderBox>
          <div
            data-aos="flip-right"
            className="w-full m-auto p-5 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-black rounded-lg shadow-lg"
          >
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
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  Get 100% Direct income from your Active Direct's Upgraded
                  Package.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">Offer valid for 30 days from your TOP-UP Day.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  1 month from ID activation date. 100% direct sponsor income
                  will be received..
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  40% direct sponsor income will be received in the 2nd month
                  from ID activation date.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  30% direct sponsor income will be received in the 3rd month
                  from ID activation date.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  20% direct sponsor income will be received in the 4th month
                  from ID activation date.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  {/* Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
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
                <p className=" text-left mt-0">
                  10% direct sponsor income will be received in the 5th month
                  from ID activation date.
                </p>
              </li>
            </ul>
          </div>
        </AnimatedBorderBox>
      </div>
      <div class=" text-white py-8 px-8 mt-10 w-full sm:w-96 mx-auto">
        <div class="text-sm">
          <p className="text-white text-left">Copyrights:</p>
          <p className="text-white text-left">
            BNB Kombet LTD |{" "}
            <a
              href="https://bnbkombat.live"
              class="text-yellow-400 hover:underline"
            >
              https://bnbkombat.live
            </a>
          </p>
          <p className="text-white text-left">Blockchain investment platform</p>
          <p className="text-white text-left">2024 © All Rights Reserved</p>
          <p className="text-white text-left">Smart-contract address: #</p>
        </div>

        <div className="text-sm mb-6 ">
          <p className="text-white text-left">
            Powered by{" "}
            <span class="text-yellow-400 font-bold">
              {" "}
              BNB Kombat blockchain
            </span>
          </p>
        </div>

        <div class="space-y-4">
          <button
          onClick={() => {
            navigate("/wallet-deposite");
          }}
          class="bg-yellow-600 hover:bg-yellow-700  border-b-4 border-green-500 w-full text-white uppercase text-lg font-semibold py-2 px-6 rounded-full ">
            Make Deposit
          </button>
          <button
          onClick={() => {
            navigate("/wallet-details");
          }}
          class="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-semibold border-b-4 border-green-500 w-full  uppercase text-lg py-2 px-6 ">
            Wallet Statistic
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

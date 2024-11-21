import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";

function Register() {
  const [walletDetected, setWalletDetected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [referredBy, setReferredBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchReferralAndWallet = async () => {
      // Extract referral code from the URL path
      const referralCodeFromPath = location.pathname.split("/register/")[1];
      if (referralCodeFromPath) {
        setReferredBy(referralCodeFromPath);
      } else {
        showPopup("Referral code is required to register.", "error");
      }

      // Detect wallet
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
          setWalletDetected(true);
        } catch (err) {
          showPopup("Wallet connection is required.", "error");
        }
      } else {
        showPopup("MetaMask or Trust Wallet not detected.", "error");
      }
    };

    fetchReferralAndWallet();
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!referredBy) {
      showPopup("Referral code is required to register.", "error");
      setLoading(false);
      return;
    }

    if (!walletAddress) {
      showPopup("Wallet address is required.", "error");
      setLoading(false);
      return;
    }

    const formData = {
      walletAddress,
      referredBy,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/register`,
        formData
      );

      if (response.status === 201) {
        showPopup("User registered successfully", "success");
        navigate("/login");
      } else {
        showPopup(response.data.message || "Signup failed", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showPopup(
        error.response?.data?.message || "Something went wrong",
        "error"
      );
    }

    setLoading(false);
  };

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen p-3">
      <button
        className=""
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        🔙{" "}
      </button>
      <div className="w-full m-auto mt-44 p-5 px-2 bg-gradient-to-r from-yellow-500 via-yellow-600  to-yellow-600 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        {referredBy && walletAddress ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-white">
              Wallet Address:{" "}
              <span className="font-semibold">{walletAddress}</span>
            </p>
            <p className="text-sm text-white">
              Referral Code: <span className="font-bold">{referredBy}</span>
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-4 border-b-4 border-red-500 bg-black hover:bg-gray-700 text-white rounded-full font-semibold shadow-md transition duration-300"
            >
              {loading ? "Registering..." : "REGISTER NOW!"}
            </button>
          </form>
        ) : (
          <p className="text-red-600 text-center mt-4">
            Registration is not possible without a referral code.
          </p>
        )}
        {popupVisible && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              popupMessage.includes("success")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {popupMessage}
          </div>
        )}
        <p>
          Already have an account?{" "}
          <a className="text-purple-800" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;

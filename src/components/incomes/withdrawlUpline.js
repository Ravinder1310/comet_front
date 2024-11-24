// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";

const WithdrawlUplineIncome = () => {
//   const { user } = useSelector((store) => store.auth);
  const [withdrawlUplineIncomeHistory, setWithdrawlUplineIncomeHistory] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  



  const getWithdrawlUplineIncomeHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/all-incomes/withdrawl-upline/${
          auth?.user?._id
        }`
      );
      console.log(res.data.data);
      setWithdrawlUplineIncomeHistory(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWithdrawlUplineIncomeHistory();
  }, []);

  return (
    <div className="p-4 bg-[#161c2d] min-h-screen text-whitepb-28">
         <button className="" onClick={() => {navigate(-1)}}> 🔙 </button>
      <h1 className="text-center text-2xl font-mono text-white mt-10">Upline Bonus History</h1>
      <div className="teamTable mx-auto mt-8 text-black w-full">
        <div className="overflow-x-auto bg-gray-600 shadow-lg shadow-white p-2 rounded-lg">
          <table className="w-full table-fixed font-medium bg-gray-600 p-2 text-white">
            <thead>
              <tr className="headTeamTH text-center font-medium text-sm text-white p-2">
                <th className="w-20 whitespace-nowrap p-2">Sr No.</th>
                <th className="w-32 whitespace-nowrap p-2">From</th>
                <th className="w-32 whitespace-nowrap p-2">Withdrawl</th>
                <th className="w-32 whitespace-nowrap p-2">Amount</th>
                {/* <th className="w-32 whitespace-nowrap p-2">Direct Business</th> */}
                <th className="w-32 whitespace-nowrap p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {withdrawlUplineIncomeHistory?.length !== 0 ? (
                withdrawlUplineIncomeHistory?.map((daily, index) => (
                  <tr
                    className="thteamInvite border-b text-center border-white text-white"
                    key={daily._id}
                  >
                    <td className=" p-2">{index + 1}</td>
                    <td className=" p-2">{daily.from}</td>
                    <td className=" p-2">$ {parseFloat(daily.withdrawl).toFixed(2)}</td>
                    <td className=" p-2">
                      $ {parseFloat(daily.amount).toFixed(2)}
                    </td>
                    <td className=" p-2">
                      {moment(daily.createdAt).format("YYYY-MM-DD")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="thteamInvite border-b text-center border-gray-400 text-white">
                  <td colSpan="4" className="py-4 px-2 text-center">
                    No Upline bonus yet 
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawlUplineIncome;

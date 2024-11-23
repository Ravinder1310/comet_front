import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";

const RechargeHistory = () => {
//   const { user } = useSelector((store) => store.auth);
const [auth, setAuth] = useAuth();
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const navigate = useNavigate();

  const getWithdrawlHistory = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/recharge-history/${
          auth?.user?._id
        }`
      );
      console.log(res.data.data);
      setRechargeHistory(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWithdrawlHistory();
  }, []);

  return (
    <div className="p-4 pb-28 bg-[#161c2d] min-h-screen text-white">
      <button className="" onClick={() => {navigate(-1)}}> 🔙 </button>
      <h1 className="text-center text-2xl font-mono mt-14">Recharge History</h1>
      <div className="teamTable mx-auto mt-4 text-black w-full">
        <div className="overflow-x-auto bg-gray-600 shadow-lg shadow-white p-2 rounded-lg">
          <table className="w-full table-fixed font-medium bg-gray-600 p-2 text-white">
            <thead>
              <tr className="headTeamTH text-center font-medium text-sm text-white p-2">
                <th className="w-20 whitespace-nowrap p-2">Sr No.</th>
                <th className="w-32 whitespace-nowrap p-2">Amount</th>
                <th className="w-32 whitespace-nowrap p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {rechargeHistory.length !== 0 ? (
                rechargeHistory?.map((history, index) => (
                  <tr
                    className="thteamInvite border-b text-center border-gray-400 text-white"
                    key={history._id}
                  >
                    <td className=" p-2">{index + 1}</td>
                    <td className=" p-2">{parseFloat(history.amount).toFixed(2)}</td>
                    <td className=" p-2">
                      {moment(history.createdAt).format("YYYY-MM-DD")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="thteamInvite border-b text-center border-gray-400 text-white">
                  <td colSpan="4" className="py-4 px-2 text-center">
                    No recharge yet
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

export default RechargeHistory;

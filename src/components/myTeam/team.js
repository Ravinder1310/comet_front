import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../context/auth";

const MyTeam = () => {
  const [levelMembers, setLevelMembers] = useState([]);
  const [activeMember, setActiveMember] = useState(true);
  const [inputLevel, setInputLevel] = useState(1); // Input for level
  const [loading, setLoading] = useState(false); // Loading state
  const [auth] = useAuth();
  const navigate = useNavigate();

  const filterText = activeMember ? "Active Members" : "Unrecharged Members";

  // Function to get members for a specific level
  const getLevelMembers = async (level) => {
    if (!auth?.user?._id) return;
    setLoading(true); // Set loading to true before fetching data
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/team-members/${
          auth?.user?._id
        }/${level}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setLevelMembers(result.data);
    } catch (error) {
      console.error("Error while fetching team members for level", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched or error occurs
    }
  };

  useEffect(() => {
    if (auth?.user) {
      getLevelMembers(inputLevel); // Fetch members for default level
    }
  }, [auth?.user, inputLevel]);

  const filteredTeamMembers = levelMembers.filter(
    (member) => member.isActive === activeMember
  );

  const handleLevelChange = (e) => {
    const level = parseInt(e.target.value);
    setInputLevel(level);
  };

  return (
    <div className="py-10 pb-32 px-4 sm:w-2/5 bg-[#1d3347] min-h-screen text-white mx-auto">
      <button
        className="text-lg mb-4"
        onClick={() => {
          navigate(-1);
        }}
      >
        🔙
      </button>
      <h1 className="font-serif text-2xl mb-16 text-center">My All Team</h1>
      <div className="mb-8">
        <label
          htmlFor="levelInput"
          className="block text-left text-white font-bold text-xl mb-2"
        >
          Status
        </label>
        <select
          value={activeMember ? "active" : "unrecharged"}
          onChange={(e) => setActiveMember(e.target.value === "active")}
          className="w-full p-3 text-xl border-2 border-[#0d355b] text-black rounded-xl"
        >
          <option value="active">Active Members</option>
          <option value="unrecharged">Unrecharged Members</option>
        </select>
      </div>

      <div className="mb-8">
        <label
          htmlFor="levelInput"
          className="block text-left text-white font-bold text-xl mb-2"
        >
          Select Level (1-50)
        </label>
        <select
          id="levelInput"
          value={inputLevel}
          onChange={handleLevelChange}
          className="w-full p-3 text-xl border-2 border-black text-black rounded-xl text-center"
        >
          {Array.from({ length: 50 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              Level {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="py-2 px-4 w-[80%] mx-auto rounded-lg flex flex-col justify-center items-center border border-[#0d355b] text-xl font-semibold text-gray-500">
        <h2>Total Members: {levelMembers.length}</h2>
        <h2 className="text-center">
          {filterText}: {filteredTeamMembers.length}
        </h2>
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-8">
          <p className="text-xl font-semibold text-gray-500">Loading...</p>
        </div>
      )}

      {!loading && filteredTeamMembers.length === 0 && (
        <div className="text-center mt-8 text-xl font-semibold text-gray-500">
          No users in this level.
        </div>
      )}

      {!loading && filteredTeamMembers.length > 0 && (
        <div className="mt-8">
          <div className="overflow-x-auto bg-yellow-600 p-2 rounded-lg">
            <table className="w-full table-fixed font-medium bg-yellow-600 text-white">
              <thead>
                <tr className="text-center font-medium text-sm text-white p-2">
                  <th className="w-20 whitespace-nowrap p-2">Sr No.</th>
                  <th className="w-32 whitespace-nowrap p-2">Direct Sponsor</th>
                  <th className="w-32 whitespace-nowrap p-2">Package</th>
                  <th className="w-32 whitespace-nowrap p-2">Team Size</th>
                  <th className="w-32 whitespace-nowrap p-2">Team Business</th>
                  <th className="w-32 whitespace-nowrap p-2">Registered At</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeamMembers.map((member, index) => (
                  <tr
                    className="border-b border-gray-400 text-white text-center"
                    key={member._id}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{member?.referralCode}</td>
                    <td className="p-2">$ {member?.rechargeWallet}</td>
                    <td className="p-2">{member?.teamSize?.length || 0}</td>
                    <td className="p-2">$ {member?.teamBusiness || 0}</td>
                    <td className="p-2">
                      {moment(member.createdAt).format("YYYY-MM-DD")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTeam;

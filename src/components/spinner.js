import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();
  const location = useLocation("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevVal) => --prevVal);
    }, 3000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <div className="bg-[#082537] h-screen pt-44" style={{ textAlign:"center",width:"100%", margin:"auto",}}>
        {" "}
        <img
        className="m-auto "
          width={"300px"}
          height={"300px"}
          src="/images/spinner.gif"
        />
      </div>
    </>
  );
};

export default Spinner;

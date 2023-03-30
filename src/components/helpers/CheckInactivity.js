import { useNavigate } from "react-router-dom";
import {useEffect,useCallback} from "react";

const CheckInactivity=()=>{
    const navigate = useNavigate();
    const checkInactivity = useCallback(() => {
      const sessionExpiry = localStorage.getItem("sessionExpiry");
      if (sessionExpiry < Date.now()) {
        localStorage.clear();
        navigate("/login");
      }
    }, [navigate]);

  const updateExpireTime = () => {
    const expireTime = Date.now() + 1800000;
    localStorage.setItem("sessionExpiry", expireTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkInactivity();
    }, 300000);

    return () => clearInterval(interval);
  }, [checkInactivity]);

  useEffect(() => {
    updateExpireTime();

    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mouseover", updateExpireTime);

    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mouseover", updateExpireTime);
    };
  }, []);
}

export default CheckInactivity;
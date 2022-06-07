import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoggedUser } from "../../../context";
import { BACKEND_URL } from "../../../data";
import "./styles.css";
export const AuthItem = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(LoggedUser);

  const logoutHandle = () => {
    fetch(`${BACKEND_URL}/user/sign-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwt: localStorage.getItem("key"),
      }),
    });
    localStorage.removeItem("key");
    setIsUserLoggedIn(null);
  };

  return (
    <div className="auth-link">
      <Link to={isUserLoggedIn ? "/" : "auth"}>
        {isUserLoggedIn ? (
          <i className="bx bx-log-out" onClick={logoutHandle}></i>
        ) : (
          <i className="bx bx-log-in"></i>
        )}
      </Link>
    </div>
  );
};

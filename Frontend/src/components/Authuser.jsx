import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthHandler = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      fetch("https://king-hub-1.onrender.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub: user.sub,
          name: user.name,
          email: user.email,
          picture: user.picture,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("User saved:", data))
        .catch((error) => console.error("Error saving user:", error));
    }
  }, [isAuthenticated, user]);

  return null; // This component only handles authentication logic
};

export default AuthHandler;

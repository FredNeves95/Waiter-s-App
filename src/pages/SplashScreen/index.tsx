import { useEffect } from "react";
import { SplashScreenContainer } from "./styles";
import logo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  }, []);

  return (
    <SplashScreenContainer>
      <img src={logo} alt="Waiter's App logo" />
    </SplashScreenContainer>
  );
};

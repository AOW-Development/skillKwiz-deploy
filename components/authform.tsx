import { useState } from "react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <LoginForm
          onLogin={(type) => console.log("Logged in as", type)}
          onSwitchToSignup={() => setIsLogin(false)}
        />
      ) : (
        <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

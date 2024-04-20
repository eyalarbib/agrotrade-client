"use client";
import { useState } from "react";
import Signup from "@/src/shared/Auth/Signup";
import Verification from "@/src/shared/Auth/Verification";
import ForgotPassword from "@/src/shared/Auth/ForgotPassword";
import Login from "@/src/shared/Auth/Login";

const Page = () => {
  const [activeState, setActiveState] = useState("Login");
  const [open, setOpen] = useState(true)

  return (
    <div
      className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center bg-[#00000027]"
      id="screen">
      <div className="w-[500px] bg-slate-900 rounded shadow-sm p-3">
        {activeState === "Login" && (
          <Login setActiveState={setActiveState} setOpen={setOpen} />
        )}
        {activeState === "Signup" && <Signup setActiveState={setActiveState} />}
        {activeState === "Verification" && (
          <Verification setActiveState={setActiveState} />
        )}
        {activeState === "Forgot-Password" && (
          <ForgotPassword setActiveState={setActiveState} />
        )}
      </div>
    </div>
  );
};

export default Page;
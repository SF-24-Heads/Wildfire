'use client';
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useRegisterForEvent, useEventRegData } from "@/context/registerForEventContext";
import { useConfirmModalDereg, useConfirmModalLogout } from "@/context/confirmModal";
import Event from "../Event/Event";
import Deregister from "../Deregister/deregister";
import useLoginStore from "@/context/logincontext";
import Logout from "../Logout/logout";
import Login from "../Login/Login";
const About = () => {

  const EventModalSate = useRegisterForEvent();
  const EventState = useEventRegData();
  const ConfirmModalDeregState = useConfirmModalDereg();
  const ConfirmModalLogoutState = useConfirmModalLogout();
  const LoginState = useLoginStore();
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [])


  return (

    <div id="About" className="box-border min-h-[100vh] relative background-about flex justify-center items-start !overflow-hidden">
      <div className="max-[500px]:gap-8 px-10 flex flex-col gap-10">
        <div className="max-[600px]:text-4xl max-[600px]:mt-6 mt-10 text-white text-5xl font-semibold">About</div>
        <div className="flex justify-between items-center flex-1 gap-8">
          <div className="max-[500px]:text-[16px] max-[600px]:text-lg text-white text-xl leading-8 w-full">
            Wildfire is India's oldest and most prestigious rock band competition. With prizes worth lakhs of rupees and your prestige at stake, wildfire has been the launch pad for many contemporary bands including - Underground Authority, parikrama, Kryptos, Zygnema, Cassini's division, and many more. So be ready to fulfill your love for rock at the wildfire finals at Kharagpur! Wildfire is a western and eastern rock band competition, open to any college or semi-professional band from India and abroad
          </div>

        </div>
        <div className="max-[500px]:mb-6 mb-10 flex justify-start gap-5">
          <Button className="md:w-40 md:!h-14 w-32 !h-10" ghost onClick={() => {
            if (!LoginState.isLoggedIn) {
              LoginState.toggleOpen();
            }
            else {
              if (!EventState.registered) {
                EventModalSate.toggleOpen();
              }
              else {
                ConfirmModalDeregState.toggleOpen();
              }
            }
          }}>{LoginState.isLoggedIn ? (EventState.registered ? "Deregister" : "Register") : "Login"}</Button>
          {LoginState.isLoggedIn && <Button className="md:w-40 md:!h-14 w-32 !h-10" ghost onClick={() => {
            ConfirmModalLogoutState.toggleOpen();
          }}>Logout</Button>}
        </div>
      </div>
      {!isMobile && <div className="">
        <div className="about-container ml-5 h-full m-auto">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
        </div>
      </div>}

      {LoginState.isLoggedIn && <Event />}
      {LoginState.isLoggedIn && <Deregister />}
      {LoginState.isLoggedIn && <Logout />}
      {!LoginState.isLoggedIn && <Login />}

    </div>

  );
};

export default About;

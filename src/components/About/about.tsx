'use client';
import { Button } from "antd";
import React, { useEffect,useState } from "react";
import { useRegisterForEvent, useEventRegData } from "@/context/registerForEventContext";
import useConfirmModal from "@/context/confirmModal";
import Event from "../Event/Event";
import Deregister from "../Deregister/deregister";
import useLoginStore from "@/context/logincontext";
import Logout from "../Logout/logout";
const About = () => {

  const EventModalSate = useRegisterForEvent();
  const EventState = useEventRegData();
  const ConfirmModalState = useConfirmModal();
  const LoginState = useLoginStore();
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })


  return (
    <div className="background-about h-[fit-content] min-h-screen bg-gray-800 w-[100vw]">
      <div className="flex md:justify-start justify-center mt-8 md:m-12 md:ml-24 items-center text-white gap-4"><h1 className="text-6xl font-semibold">About Us</h1></div>
      <div className="flex overflow-hidden">
        <div>
          <p className="md:w-[80%] w-[100%] md:text-left text-justify p-8 md:p-0 md:ml-[85px] text-white md:leading-[40px]  md:text-2xl text-base  mt-[44px]">Wildfire is India’s oldest and most prestigious rock band competition. With prizes worth
            lakhs of rupees and your prestige at stake, wildfire has been the launch pad for many
            contemporary bands including - Underground Authority, parikrama, Kryptos, Zygnema,
            Cassini’s division, and many more. So be ready to fulfill your love for rock at the wildfire
            finals at Kharagpur! Wildfire is a western and eastern rock band competition, open to any
            college or semi-professional band from India and abroad.</p>
          <div className="md:ml-[85px] md:mt-14 flex gap-4 justify-center md:justify-start md:items-start">
            <Button className="md:w-40 md:!h-14 w-32 !h-10" ghost onClick={() => {
              if (!LoginState.isLoggedIn) {
                LoginState.toggleOpen();
              }
              else {
                if (!EventState.registered) {
                  EventModalSate.toggleOpen();
                }
                else {
                  ConfirmModalState.toggleOpen();
                }
              }
            }}>{LoginState.isLoggedIn ? (EventState.registered ? "Deregister" : "Register") : "Login"}</Button>

            {LoginState.isLoggedIn ? (<Button className=" md:w-40 md:!h-14 w-32 !h-10" ghost onClick={() => {
              ConfirmModalState.toggleOpen();
            }}>Logout</Button>) : null}
          </div>
        </div>
       {!isMobile && <div >
          <div className="about-container h-full">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
          </div>
        </div>}
      </div>
      {LoginState.isLoggedIn && <Event />}
      {LoginState.isLoggedIn && <Deregister />}
      {!LoginState.isLoggedIn && <Logout />}
    </div>
  );
};

export default About;

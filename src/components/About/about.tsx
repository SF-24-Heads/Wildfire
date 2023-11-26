"use client";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import {
	useRegisterForEvent,
	useEventRegData,
} from "@/context/registerForEventContext";
import {
	useConfirmModalDereg,
	useConfirmModalLogout,
	useConfirmModalProfile,
} from "@/context/confirmModal";
import Event from "../Event/Event";
import Deregister from "../Deregister/deregister";
import useLoginStore from "@/context/logincontext";
import Logout from "../Logout/logout";
import Login from "../Login/Login";
import Footer from "../footer/footer";
import Profile from "../Profile/profile";
const About = () => {
	const EventModalSate = useRegisterForEvent();
	const EventState = useEventRegData();
	const ConfirmModalDeregState = useConfirmModalDereg();
	const ConfirmModalLogoutState = useConfirmModalLogout();
	const ConfirmModalProifleState = useConfirmModalProfile();
	const LoginState = useLoginStore();
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 1100) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
	}, []);

	return (
		<div
			id="About"
			className="relative background-about h-[fit-content] min-h-screen bg-gray-800 w-[100vw]"
		>
			<div className="flex md:justify-start justify-center mt-8 md:m-6 md:ml-24 items-center text-white gap-4">
				<h1 className="text-6xl font-semibold">About Us</h1>
			</div>
			<div className="flex overflow-hidden">
				<div>
					<p className="md:w-[80%] w-[100%] md:text-left text-justify p-8 pb-6 md:p-0 md:ml-[85px] text-white md:leading-[40px]  md:text-2xl text-base md:mt-[44px] mt-[10px]">
						Spring Fest is the annual Social and Cultural festival of IIT Kharagpur, a pioneer in elite institutions. It marks three days of absolute ecstasy and is presently approaching its 65th edition in January 2024.
						<br />
						Wildfire is one of the biggest, oldest and most prestigious rock band competitions in India. With the promotion and honoring of good music being the only mission of this national rock event while giving out prizes worth lakhs of rupees, it is the most anticipated event of Spring Fest and a launch pad for many contemporary bands like Parikrama, Underground Authority, Agnee, Kryptos, Pineapple Express, Zygnema and many more.
					</p>
					<div className="md:ml-[85px] md:mt-14 flex gap-4 justify-center md:justify-start md:items-start">
						{(!LoginState.isLoggedIn || !EventState.registered) && (
							<Button
								className="md:w-40 md:!h-14 w-32 !h-10"
								ghost
								onClick={() => {
									if (!LoginState.isLoggedIn) {
										LoginState.toggleOpen();
									} else {
										if (!EventState.registered) {
											EventModalSate.toggleOpen();
										} else {
											ConfirmModalDeregState.toggleOpen();
										}
									}
								}}
							>
								{LoginState.isLoggedIn
									? EventState.registered
										? "Deregister"
										: "Register"
									: "Login"}
							</Button>
						)}
						{LoginState.isLoggedIn && EventState.registered && (
							<Button
								className="md:w-40 md:!h-14 w-32 !h-10"
								ghost
								onClick={() => {
									ConfirmModalProifleState.toggleOpen();
								}}
							>
								Profile
							</Button>
						)}
						{LoginState.isLoggedIn && (
							<Button
								className="md:w-40 md:!h-14 w-32 !h-10"
								ghost
								onClick={() => {
									ConfirmModalLogoutState.toggleOpen();
								}}
							>
								Logout
							</Button>
						)}
					</div>
				</div>
				{!isMobile && (
					<div>
						<div className="about-container h-full">
							<div className="circle c1"></div>
							<div className="circle c2"></div>
						</div>
					</div>
				)}
				{/* <Footer /> */}
			</div>
			<section
				id="contactDrop"
				className="section07 absolute bottom-0 left-[50%]"
				onClick={(e) => {
					const contactContainer = document.getElementById("contactContainer");
					contactContainer!.style.display = "block";
					contactContainer!.style.height = "100%";
					document.getElementById("contactDrop")!.style.display = "none";
				}}
			>
				<a href="#contactContainer">
					<span></span>
					<span></span>
					<span></span>
				</a>
			</section>
			{LoginState.isLoggedIn && <Event />}
			{LoginState.isLoggedIn && <Deregister />}
			{LoginState.isLoggedIn && <Logout />}
			{LoginState.isLoggedIn && <Profile />}
			{!LoginState.isLoggedIn && <Login />}
		</div>
	);
};

export default About;

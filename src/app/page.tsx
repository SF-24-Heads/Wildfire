"use client";
import { Button } from "antd";
import useLoginStore from "@/context/logincontext";
import Login from "@/components/Login/Login";
import Event from "@/components/Event/Event";
import useRegisterForEvent from "@/context/registerForEventContext";

import LandingPage from "@/components/LandingPage/LandingPage";

import About from "@/components/About/about";
export default function Home() {
	const toggleOpen = useLoginStore((state) => state.toggleOpen);
	const toggleEventOpen = useRegisterForEvent((state) => state.toggleOpen);
	return (

		<>
		<main>
			<div className="flex min-h-screen flex-col items-center justify-between p-24">
				<LandingPage />
	
			<div>
				<Button onClick={toggleOpen} danger>Login</Button>
			</div>
			<div>
				<Button onClick={toggleEventOpen} danger>Event</Button>
			</div>
			<Login />
			<Event/>
			<About/>
		</div>
		</main>
		</>
	);
}

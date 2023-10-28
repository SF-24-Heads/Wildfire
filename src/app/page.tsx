"use client";
import { Button } from "antd";
import useLoginStore from "@/context/logincontext";
import Login from "@/components/Login/Login";
import Event from "@/components/Event/Event";
import useRegisterForEvent from "@/context/registerForEventContext";
import useDeregForEvent from "@/context/deRegContext";

import LandingPage from "@/components/LandingPage/LandingPage";

import About from "@/components/About/about";
import Deregister from "@/components/Deregister/deregister";
export default function Home() {
	const toggleOpen = useLoginStore((state) => state.toggleOpen);
	const toggleEventOpen = useRegisterForEvent((state) => state.toggleOpen);
	const toggleDeregOpen = useDeregForEvent((state)=>state.toggleOpen);
	return (

		<>
			<main>
				<div className="flex min-h-screen flex-col items-center justify-between py-5">
					{/* <LandingPage /> */}
					<div>
						<Button onClick={toggleOpen} danger>Login</Button>
					</div>
					<div>
						<Button onClick={toggleEventOpen} danger>Event</Button>
					</div>
					<div>
						<Button onClick={toggleDeregOpen} danger>Deregister</Button>
					</div>
					<Login />
					<Deregister/>
					<Event />
					{/* <About /> */}
				</div>
			</main>
		</>
	);
}

"use client";
import { useEffect } from "react";
import { HTTP } from "@/utils/HTTP";
import { useEventRegData } from "@/context/registerForEventContext";
import toast from "react-hot-toast";
import LandingPage from "@/components/LandingPage/LandingPage";
import About from "@/components/About/about";
import useLoginStore from "@/context/logincontext";
import ContacUs from "@/components/Contact-Us/contactUs"


export default function Home() {
	const EventState = useEventRegData();
	const LoginState = useLoginStore();

	//function to get the registered Event Data
	useEffect(() => {
		if (localStorage.getItem('user')) {
			try {
				const data = {
					token: JSON.parse(localStorage.getItem("user")!).token
				};
				HTTP.post("/api/user/get_registered_events", data)
					.then((res) => {
						if (res.data.code === 0) {
							let WildFireEventData="Not Registered";
							res.data.message.group.forEach((element : any) => {
								if(element?.event_id===85){
									WildFireEventData = element;
								}
							});
							localStorage.setItem("eventData",JSON.stringify(WildFireEventData));
							EventState.setEventRegData(WildFireEventData);
							if(WildFireEventData==="Not Registered"){
								EventState.setRegistrationStatus(false);
							}
							else{
								EventState.setRegistrationStatus(true);
							}
						} else {
							toast.error(res.data.message);
						}
					})
					.catch((err) => {
						toast.error(err.message);
					});
			} catch (error: any) {
				toast.error("Something went wrong");
				console.log(error.message);
			}
		}
	}, [EventState.runFuncState])

	useEffect(() => {
		if(localStorage.getItem("user")){
			LoginState.setLoggedIn(true);
		}
		else{
			LoginState.setLoggedIn(false);
		}
	}, [LoginState.isLoggedIn])
	
	return (

		<>
			<main>
				<div className="flex min-h-screen flex-col items-center justify-between">
					<LandingPage/>
					<About/>
					{/* <ContacUs/> */}
				</div>
			</main>
		</>
	);
}

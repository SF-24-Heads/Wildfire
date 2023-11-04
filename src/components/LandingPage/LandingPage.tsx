import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import useLoginStore from "@/context/logincontext";
import useConfirmModal from "@/context/confirmModal";
import Login from "../Login/Login";
import Logout from "../Logout/logout";
const LandingPage = () => {

	const LoginState = useLoginStore();
	const ConfirmModalState = useConfirmModal();
	return (
		<div className="landing-page">
			<div className="flex justify-between">
				<div className="landing-page-logos">
					<div className="landing-page-logo">
						<a href="https://springfest.in/" target="_blank">
							<img
								src={
									"https://wldfire-new.vercel.app/static/media/sf_logo.bea788dbe4b626510928.png"
								}
								alt="Sprin Fest"
							/>
						</a>
					</div>
					<div className="landing-page-logo">
						<a href="http://www.iitkgp.ac.in/" target="_blank">
							<img
								src={
									"https://wldfire-new.vercel.app/static/media/kgp_logo.d22fc195ade8a030bd91.png"
								}
								alt="IIT KGP"
							/>
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center m-4 ">
					<Button onClick={() => {
						if(!LoginState.isLoggedIn){
							LoginState.toggleOpen();
						}
						else{
							ConfirmModalState.toggleOpen();
						}
					}} size="large" className="w-[100px]" ghost>{LoginState.isLoggedIn ? "Logout" : "Login"}</Button>
				</div>
			</div>
			<div className="landing-page-content flex flex-col items-center justify-center">
				<img
					className="content-logo"
					src={
						"https://wldfire-new.vercel.app/static/media/SFlogo1.9152ea0868d1b9e03454.png"
					}
					alt="Spring Fest"
				/>
				<p className="content-span">presents</p>
				<img
					className="content-img"
					src={
						"https://wldfire-new.vercel.app/static/media/Wildfire.6dac175f71c744e61504.png"
					}
					alt="Wildfire"
				/>
			</div>
			<Login />
			<Logout/>
		</div>
	);
};

export default LandingPage;

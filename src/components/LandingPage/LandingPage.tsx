// import { MenuOutlined } from "@ant-design/icons";
// import { Button } from "antd";
import React from "react";
import Login from "../Login/Login";
import Logout from "../Logout/logout";
const LandingPage = () => {

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
			<section id="section07">
				<a href="#About"><span></span><span></span><span></span></a>
			</section>
		</div>
	);
};

export default LandingPage;

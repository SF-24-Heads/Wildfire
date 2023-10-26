"use client";

import ModalProvider from "@/Providers/ModalProvider";
import React, { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import useLoginStore from "@/context/logincontext";

const Login = () => {
	const [loginForm, setLoginForm] = useState(true);
	const toggleOpen = useLoginStore((state) => state.toggleOpen);
	const open = useLoginStore((state) => state.open);
	return (
		<>
			<ModalProvider
				open={open}
				footer={false}
				handleCancel={() => {
					toggleOpen();
				}}
			>
				<div id="login-form">
					{loginForm ? (
						<SigninForm loginForm={loginForm} setLoginForm={setLoginForm} />
					) : (
						<SignupForm loginForm={loginForm} setLoginForm={setLoginForm} />
					)}
				</div>
			</ModalProvider>
		</>
	);
};

export default Login;

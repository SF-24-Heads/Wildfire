"use client";

import ModalProvider from "@/Providers/ModalProvider";
import { Form, Button, Input } from "antd";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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

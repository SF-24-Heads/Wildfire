import { Form, Button, Input } from "antd";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { HTTP } from "@/utils/HTTP";
import toast from "react-hot-toast";
import useLoginStore from "@/context/logincontext";
import { useEventRegData } from "@/context/registerForEventContext";
const SigninForm = ({
	setLoginForm,
	loginForm,
}: {
	setLoginForm: (loginform: boolean) => void;
	loginForm: boolean;
}) => {
	const toggleOpen = useLoginStore((state) => state.toggleOpen);
	const EventState = useEventRegData();
	const LoginState = useLoginStore();

	const onFinish = (values: any) => {
		try {
			const data = {
				email: values?.signin_email,
				password: values?.signin_password,
			};
			HTTP.post("/api/user/login/password", data)
				.then((res) => {
					if (res.data.code === 0) {
						toast.success("Successfully Signed In");
						localStorage.setItem("user", JSON.stringify(res.data.message));
						toggleOpen();
						EventState.getRegistrationStatus(!EventState.runFuncState);
						LoginState.setLoggedIn(true);
					} else {
						toast.error(res.data.message);
					}
				})
				.catch((err) => {
					toast.error(err.message);
					localStorage.setItem("user", JSON.stringify(null));
				});
		} catch (error) {
			toast.error("Something went wrong");
			localStorage.setItem("user", JSON.stringify(null));
		}
	};
	return (
		<>
			<h1 className="text-center text-4xl font-serif">Sign In</h1>
			<Form
				name="normal_login"
				className="login-form"
				style={{ marginTop: 25 }}
				size="large"
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					name="signin_email"
					rules={[
						{ required: true, message: "Email is Required" },
						{ type: "email", message: "Enter a valid Email" },
					]}
					hasFeedback
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Email"
					/>
				</Form.Item>
				<Form.Item
					name="signin_password"
					hasFeedback
					rules={[
						{ required: true, message: "Password is Required" },
						{ min: 8, message: "Password must have 8 character" },
					]}
				>
					<Input.Password
						prefix={<LockOutlined className="site-form-item-icon" />}
						placeholder="Password"
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
					Or{" "}
					<p
						className="text-blue-500 inline-block cursor-pointer"
						onClick={() => {
							setLoginForm(!loginForm);
						}}
					>
						register now!
					</p>
				</Form.Item>
			</Form>
		</>
	);
};

export default SigninForm;

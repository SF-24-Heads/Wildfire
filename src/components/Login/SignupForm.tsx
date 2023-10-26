import { Form, Button, Input } from "antd";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const SignupForm = ({
	setLoginForm,
	loginForm,
}: {
	setLoginForm: (loginform: boolean) => void;
	loginForm: boolean;
}) => {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};
	return (
		<>
			<h1 className="text-center text-4xl font-serif">Sign Up</h1>
			<Form
				name="normal_sign_up"
				className="login-form"
				style={{ marginTop: 25 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				size="large"
				autoComplete="off"
			>
				<Form.Item
					name="signup_email"
					rules={[
						{ required: true, message: "Please input your Username!" },

						{ type: "email", message: "Enter a valid email" },
					]}
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Email"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password!" }]}
					hasFeedback
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
						Sign Up
					</Button>
					Or{" "}
					<p
						className="text-blue-500 inline-block cursor-pointer"
						onClick={() => {
							setLoginForm(!loginForm);
						}}
					>
						login now!
					</p>
				</Form.Item>
			</Form>
		</>
	);
};

export default SignupForm;

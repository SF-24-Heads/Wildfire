import { Form, Button, Input, DatePicker, Select } from "antd";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import data from "./city.json";
const SignupForm = ({
	setLoginForm,
	loginForm,
}: {
	setLoginForm: (loginform: boolean) => void;
	loginForm: boolean;
}) => {
	const [city, setCity] = useState([]);
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};
	const state_city = data.states;
	return (
		<>
			<h1 className="text-center text-4xl font-serif">Sign Up</h1>
			<Form
				name="normal_sign_up"
				className="login-form"
				style={{ marginTop: 25 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				size="middle"
				autoComplete="off"
				requiredMark={false}
			>
				<Form.Item
					name="signup_name"
					rules={[{ required: true, message: "Name is Required" }]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								Name
							</div>
						}
						placeholder="Name"
					/>
				</Form.Item>
				<Form.Item
					name="signup_email"
					rules={[
						{ required: true, message: "Email is Required" },

						{ type: "email", message: "Enter a valid email" },
					]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								Email
							</div>
						}
						placeholder="Email"
					/>
				</Form.Item>
				<Form.Item
					name="signup_phone"
					rules={[
						{ required: true, message: "Mobile Number is Required" },
						{
							transform(value) {
								return parseInt(value);
							},
							min: 1000000000,
							max: 9999999999,
							type: "number",
							message: "Enter a valid Mobile Number",
						},
					]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								Mobile
							</div>
						}
						placeholder="Mobile Number"
					/>
				</Form.Item>
				<Form.Item
					name="signup_dob"
					style={{
						border: "1px solid #d9d9d9",
						borderRadius: 8,
					}}
					rules={[{ required: true, message: "Date of birth is Required" }]}
					hasFeedback
					colon={false}
					label={
						<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20 inline-block text-base">
							DOB
						</div>
					}
					labelAlign="left"
				>
					<DatePicker
						bordered={false}
						className="min-w-full"
						disabledDate={(current) => {
							return current && current > dayjs().subtract(18, "year");
						}}
					/>
				</Form.Item>
				<Form.Item
					name="signup_gender"
					rules={[{ required: true, message: "Gender is Required" }]}
					colon={false}
					style={{
						border: "1px solid #d9d9d9",
						borderRadius: 8,
					}}
					hasFeedback
					label={
						<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20 inline-block text-base">
							Gender
						</div>
					}
					labelAlign="left"
				>
					<Select placeholder="Select your gender" bordered={false}>
						<Select.Option value="M">Male</Select.Option>
						<Select.Option value="F">Female</Select.Option>
						<Select.Option value="O">Other</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="signup_yop"
					rules={[{ required: true, message: "Year of Passing is Required" }]}
					colon={false}
					style={{
						border: "1px solid #d9d9d9",
						borderRadius: 8,
					}}
					hasFeedback
					label={
						<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20 inline-block text-base">
							YOP
						</div>
					}
					labelAlign="left"
				>
					<Select placeholder="Select your Year Of Passing" bordered={false}>
						<Select.Option value="2024">2024</Select.Option>
						<Select.Option value="2025">2025</Select.Option>
						<Select.Option value="2026">2026</Select.Option>
						<Select.Option value="2027">2027</Select.Option>
						<Select.Option value="2028">2028</Select.Option>
						<Select.Option value="2029">2029</Select.Option>
						<Select.Option value="2030">2030</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item
					name="signup_college"
					rules={[{ required: true, message: "College is Required" }]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								College
							</div>
						}
						placeholder="College"
					/>
				</Form.Item>
				<Form.Item style={{ marginBottom: 0 }}>
					<Form.Item
						name="State"
						rules={[
							{ required: true, message: "State is Required" },
							({ setFieldValue, getFieldValue }) => ({
								validator(_, value) {
									if (JSON.parse(value)?.[0] !== city[0]) {
										setFieldValue("City", null);
										setCity(JSON.parse(getFieldValue("State")));
										return Promise.resolve();
									}
									return Promise.resolve();
								},
							}),
						]}
						style={{
							display: "inline-block",
							width: "calc(50% - 8px)",
							border: "1px solid #d9d9d9",
							borderRadius: 8,
							marginRight: 5,
						}}
						colon={false}
						hasFeedback
						label={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20 inline-block text-base">
								State
							</div>
						}
						labelAlign="left"
					>
						<Select placeholder="Select your State" bordered={false}>
							{state_city.map((state) => (
								<Select.Option
									value={JSON.stringify(state.districts)}
									key={state.state}
								>
									{state.state}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						name="City"
						rules={[
							{
								required: true,
								message: "City is Required",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!getFieldValue("State")) {
										return Promise.reject(new Error("Select State First"));
									}
									return Promise.resolve();
								},
							}),
						]}
						style={{
							display: "inline-block",
							width: "calc(50% - 8px)",
							border: "1px solid #d9d9d9",
							borderRadius: 8,
						}}
						dependencies={["State"]}
						colon={false}
						hasFeedback
						label={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20 inline-block text-base">
								City
							</div>
						}
						labelAlign="left"
					>
						<Select placeholder="Select your City" bordered={false}>
							{city.map((ele) => (
								<Select.Option value={ele} key={ele}>
									{ele}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Password is Required" }]}
					hasFeedback
				>
					<Input.Password
						style={{ padding: 0, paddingRight: 11, fontSize: 14 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								Password
							</div>
						}
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item
					name="confirm"
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("The new password that you entered do not match!")
								);
							},
						}),
					]}
				>
					<Input.Password
						style={{ padding: 0, paddingRight: 11, fontSize: 12 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								CPassword
							</div>
						}
						placeholder="Confirm Password"
					/>
				</Form.Item>
				<Form.Item
					name="security_q"
					rules={[{ required: true, message: "Security Question is Required" }]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11, fontSize: 14 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								SecurityQ
							</div>
						}
						placeholder="Security Question"
					/>
				</Form.Item>
				<Form.Item
					name="security_a"
					rules={[{ required: true, message: "Security Answer is Required" }]}
					hasFeedback
				>
					<Input
						style={{ padding: 0, paddingRight: 11, fontSize: 14 }}
						prefix={
							<div className="border-r-2 p-2 border-[#d9d9d9] mr-2 w-20">
								SecurityA
							</div>
						}
						placeholder="Security Answer"
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
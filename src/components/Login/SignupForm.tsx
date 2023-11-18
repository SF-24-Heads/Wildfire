import { Form, Button, Input, DatePicker, Select } from "antd";
import React, { useState } from "react";
import locale from "antd/es/date-picker/locale/kn_IN";
import dayjs from "dayjs";
import data from "./city.json";
import { HTTP } from "@/utils/HTTP";
import toast from "react-hot-toast";
import Recaptcha from "react-google-recaptcha";
import useLoginStore from "@/context/logincontext";
import { useEventRegData } from "@/context/registerForEventContext";
const SignupForm = ({
	setLoginForm,
	loginForm,
}: {
	setLoginForm: (loginform: boolean) => void;
	loginForm: boolean;
}) => {
	const [city, setCity] = useState([]);
	const toggleOpen = useLoginStore((state) => state.toggleOpen);
	const EventState = useEventRegData();
	const LoginSate= useLoginStore();

	const onFinish = (values: any) => {
		console.log("Success:", values);
		try {
			const data = {
				name: values.signup_name,
				email: values.signup_email,
				password: values.password,
				mobile: values.signup_mobile,
				college: values.signup_college,
				city: values.City,
				state: JSON.parse(values.State).state,
				dob: values.signup_dob.format("YYYY-MM-DD"),
				gender: values.signup_gender,
				yop: values.signup_yop,
				security_qn: values.security_q,
				security_ans: values.security_a,
				captcha: values.captcha,
			};
			HTTP.post("/api/user/register_user", data)
				.then((res) => {
					if (res.data.code === 0) {
						toast.success("Successfully Signed In");
						localStorage.setItem("user", JSON.stringify(res.data.message));
						toggleOpen();
						EventState.getRegistrationStatus(!EventState.runFuncState);
						LoginSate.setLoggedIn(true);
					} else if (res.data.code === -1) {
						for (const key in res.data.message) {
							toast.error(res.data.message[key][0]);
						}
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
	const state_city = data.states;
	return (
		<>
			<h1 className="text-center text-4xl font-serif text-white">Sign Up</h1>
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
					name="signup_mobile"
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
						color:"white"
					}}
					rules={[{ required: true, message: "Date of birth is Required" }]}
					hasFeedback
					colon={false}
					label={
						<div className="border-r-2 p-2 border-[#d9d9d9] text-white placeholder-white mr-2 w-20 inline-block text-base">
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
						<div className="border-r-2 p-2 border-[#d9d9d9] text-white placeholder-white mr-2 w-20 inline-block text-base">
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
						<div className="border-r-2 p-2 text-white border-[#d9d9d9] mr-2 w-20 inline-block text-base">
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
									if (JSON.parse(value).districts?.[0] !== city[0]) {
										setFieldValue("City", null);
										setCity(JSON.parse(getFieldValue("State")).districts);
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
							{state_city.map((state: { districts: any; state: string }) => (
								<Select.Option value={JSON.stringify(state)} key={state.state}>
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
				<Form.Item
					name="captcha"
					rules={[{ required: true, message: "Captcha is Required" }]}
					hasFeedback
				>
					<Recaptcha
						sitekey="6Ldpbz0UAAAAAHWONmYJCv8nbMwG4w-htCr8iC1p"
						onChange={(e) => console.log("e", e)}
						theme="light"
						className="flex justify-center"
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
					<span className="text-white">Or</span>{" "}
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

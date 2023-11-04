import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ModalProvider({
	children,
	open,
	confirmLoading = false,
	handleOk = () => {},
	handleCancel,
	footer,
	closeIcon = true,
	footerElement = [
		<Button key="back" onClick={handleCancel}>
			Cancel
		</Button>,
		<Button
			key="submit"
			type="primary"
			loading={confirmLoading}
			onClick={handleOk}
		>
			OK
		</Button>,
	],
}: {
	children: React.ReactNode;
	open: boolean;
	closeIcon? : boolean;
	confirmLoading?: boolean;
	handleOk?: () => void;
	handleCancel: () => void;
	footer: boolean;
	footerElement?: any[];
}) {
	return (
		<>
			<Modal
				centered
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				closeIcon = {closeIcon}
				footer={footer ? footerElement : null}
			>
				<div>{children}</div>
			</Modal>
		</>
	);
}

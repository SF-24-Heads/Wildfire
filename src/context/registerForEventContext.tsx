import { create } from "zustand";

type registerForEvent = {
	open: boolean;
	toggleOpen: () => void;
};

type EventRegData = {
	registered: boolean;
	regData: {
		event_id: number;
		event_name: string;
		group_id: number;
		is_cert: number;
		leader_id: number;
		members: [
			{
				group_id: number;
				member_name: string;
				member_sfid: string;
				reg_id: number;
			}
		];
	};
	runFuncState: boolean;
	getRegistrationStatus: (value: boolean) => void;
	setEventRegData: (data: any) => void;
	setRegistrationStatus: (value: boolean) => void;
};
const useRegisterForEvent = create<registerForEvent>()((set) => ({
	open: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),
}));

const useEventRegData = create<EventRegData>()((set) => ({
	registered: false,
	runFuncState: false,
	regData: {
		event_id: 0,
		event_name: "",
		group_id: 0,
		is_cert: 0,
		leader_id: 0,
		members: [
			{
				group_id: 0,
				member_name: "",
				member_sfid: "",
				reg_id: 0,
			},
		],
	},
	getRegistrationStatus: (value: boolean) =>
		set((state) => ({ runFuncState: value })),
	setEventRegData: (data: any) => set((state) => ({ regData: data })),
	setRegistrationStatus: (value: boolean) =>
		set((state) => ({ registered: value })),
}));

export { useRegisterForEvent, useEventRegData };

import { create } from "zustand";

type registerForEvent = {
	open: boolean;
	toggleOpen: () => void;
};

type EventRegData = {
	registered : boolean;
	regData: object;
	runFuncState: boolean;
	getRegistrationStatus: (value : boolean) => void;
	setEventRegData: (data : any) => void;
	setRegistrationStatus : (value : boolean) => void;
}
const useRegisterForEvent = create<registerForEvent>()((set) => ({
	open: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),
}));

const useEventRegData = create<EventRegData>()((set) => ({
	registered : false,
	runFuncState: false,
	regData: {},
	getRegistrationStatus: (value : boolean) => set((state) => ({ runFuncState: value })),
	setEventRegData: (data : any) => set((state) => ({ regData: data })),
	setRegistrationStatus : (value : boolean )=> set((state)=>({registered : value}))
}));

export { useRegisterForEvent, useEventRegData };
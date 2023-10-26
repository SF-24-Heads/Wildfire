import { create } from "zustand";

type registerForEvent = {
	open: boolean;
	toggleOpen: () => void;
};

const  useRegisterForEvent = create<registerForEvent>()((set)=>({
	open : false,
	toggleOpen : () => set((state) => ({open : !state.open})),
}));


export default useRegisterForEvent;
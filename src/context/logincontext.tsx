import { create } from "zustand";

type loginStore = {
	isLoggedIn: boolean;
	setLoggedIn: (value: boolean) => void;
	open: boolean;
	toggleOpen: () => void;
};

const useLoginStore = create<loginStore>()((set) => ({
	isLoggedIn : false,
	setLoggedIn : (value : boolean)=>set((state)=>({isLoggedIn : value})),
	open: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export default useLoginStore;

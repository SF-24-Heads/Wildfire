import { create } from "zustand";

type loginStore = {
	open: boolean;
	toggleOpen: () => void;
};

const useLoginStore = create<loginStore>()((set) => ({
	open: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),
}));
export default useLoginStore;

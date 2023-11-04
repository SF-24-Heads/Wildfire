import { create } from "zustand";

type confirmModal = {
	open: boolean;
	toggleOpen: () => void;
};

const  useConfirmModal = create<confirmModal>()((set)=>({
	open : false,
	toggleOpen : () => set((state) => ({open : !state.open})),
}));


export default useConfirmModal;
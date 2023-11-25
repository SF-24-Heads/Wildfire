import { create } from "zustand";

type confirmModal = {
	open: boolean;
	toggleOpen: () => void;
};

const  useConfirmModalDereg = create<confirmModal>()((set)=>({
	open : false,
	toggleOpen : () => set((state) => ({open : !state.open})),
}));
const  useConfirmModalLogout = create<confirmModal>()((set)=>({
	open : false,
	toggleOpen : () => {set((state) => ({open : !state.open}))},
}));
const  useConfirmModalProfile = create<confirmModal>()((set)=>({
	open : false,
	toggleOpen : () => {set((state) => ({open : !state.open}))},
}));


export  {useConfirmModalDereg,useConfirmModalLogout,useConfirmModalProfile};
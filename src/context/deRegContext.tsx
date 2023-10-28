import { create } from "zustand";

type deRegFromEvent = {
	open: boolean;
	toggleOpen: () => void;
};

const  useDeregForEvent = create<deRegFromEvent>()((set)=>({
	open : false,
	toggleOpen : () => set((state) => ({open : !state.open})),
}));


export default useDeregForEvent;
import ModalProvider from '@/Providers/ModalProvider'
import React from 'react'
import { Button } from 'antd';
import useLoginStore from '@/context/logincontext';
import {useConfirmModalLogout} from '@/context/confirmModal';
import toast from 'react-hot-toast';
const Logout = () => {
    const LoginState = useLoginStore();
    const confirmModalState = useConfirmModalLogout();

    const handleLogout=()=>{
        LoginState.setLoggedIn(false);
        localStorage.clear();
        confirmModalState.toggleOpen();
        toast.success("Logged Out Successfully");
    }

    return (
        <>
            <ModalProvider
                open={confirmModalState.open}
                footer={false}
                handleCancel={() => {
                    confirmModalState.toggleOpen();
                }}
            >
                <div className='flex justify-center items-center flex-col p-6 gap-8'>
                    <p className='text-lg font-bold text-white'>Are you sure you want to Logout?</p>
                    <div className='flex justify-center items-center gap-8'>
                        <Button onClick={()=>{handleLogout()}}>Confirm</Button>
                        <Button onClick={()=>{confirmModalState.toggleOpen()}}>Cancel</Button>
                    </div>
                </div>
            </ModalProvider>
        </>
    )
}

export default Logout
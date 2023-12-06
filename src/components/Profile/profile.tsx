import ModalProvider from '@/Providers/ModalProvider'
import React from 'react'
import { Button } from 'antd';
import useLoginStore from '@/context/logincontext';
import { useConfirmModalProfile, useConfirmModalDereg } from '@/context/confirmModal';
import toast from 'react-hot-toast';
import { useEventRegData, useRegisterForEvent } from "@/context/registerForEventContext";
const Profile = () => {
    const LoginState = useLoginStore();
    const EventModalSate = useRegisterForEvent();
    const confirmModalState = useConfirmModalProfile();
    const ConfirmModalDeregState = useConfirmModalDereg();
    const EventState = useEventRegData();
    const handleLogout = () => {
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
                    <p className='text-2xl font-bold text-white'>Profile</p>
                    <div className='flex flex-col justify-center items-start gap-8'>
                        <div className="font-bold text-xl text-white">Name : {JSON.parse(localStorage.getItem("user")!).name}</div>
                        <div className="font-bold text-xl text-white">Band Name : {JSON.parse(localStorage.getItem("user")!).college}</div>
                        <div className="font-bold text-xl text-white">Email : {JSON.parse(localStorage.getItem("user")!).email}</div>
                        <div className="font-bold text-xl text-white">Phone : {JSON.parse(localStorage.getItem("user")!).mobile}</div>
                        {!EventState.registered && <div className='font-bold text-xl text-white mb-3'>You are not registered for the Event</div>}
                        <div className="">
                            {EventState.registered && <div className='font-bold text-xl text-white mb-3'>Team Members : </div>}
                            <ul>
                                {EventState.registered && EventState.regData?.members.map((member: any) => {
                                    return (
                                        <li className="font-bold text-xl text-white ml-8 my-2">{member.member_name} <span className='ml-1'> - {member.member_sfid}</span></li>
                                    )
                                })}</ul>
                        </div>
                        {EventState.registered &&
                            <Button className="md:w-40 md:!h-14 w-32 !h-10" ghost onClick={() => {
                                if (!LoginState.isLoggedIn) {
                                    LoginState.toggleOpen();
                                }
                                else {
                                    confirmModalState.toggleOpen();
                                    if (!EventState.registered) {
                                        EventModalSate.toggleOpen();                                       
                                    }
                                    else {
                                        ConfirmModalDeregState.toggleOpen();
                                    }
                                }
                                
                            }}>{LoginState.isLoggedIn ? (EventState.registered ? "Deregister" : "Register") : "Login"}</Button>
                        }

                    </div>
                </div>
            </ModalProvider>
        </>
    )
}

export default Profile
'use client';

import ModalProvider from '@/Providers/ModalProvider'
import React from 'react'
import useDeregForEvent from '@/context/deRegContext'
import { Button } from 'antd';
import toast from 'react-hot-toast';
import { HTTP } from '@/utils/HTTP';

const Deregister = () => {

    const toggleOpen = useDeregForEvent((state) => state.toggleOpen);
    const open = useDeregForEvent((state) => state.open);

    const handleDereg = () => {
        try {
            const data = {
                event_id  : 85,
                token : JSON.parse(localStorage.getItem('user')!).token,
            };
            HTTP.post("/api/event/deregister_team", data)
                .then((res) => {
                    if (res.data.code === 0) {
                        toast.success("Successfully Deregistered From the Event");
                        toggleOpen();
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        } catch (error: any) {
            toast.error("Something went wrong");
            console.log(error.message);
        }
    }
    return (
        <>
            <ModalProvider
                open={open}
                footer={false}
                handleCancel={() => {
                    toggleOpen();
                }}
            >
                <div className='flex justify-center items-center flex-col p-6 gap-8'>
                    <p className='text-lg font-bold'>Are you sure you want to deregister from event?</p>
                    <div className='flex justify-center items-center gap-8'>
                        <Button>Confirm</Button>
                        <Button onClick={()=>{toggleOpen()}}>Cancel</Button>
                    </div>
                </div>
            </ModalProvider>
        </>
    )
}

export default Deregister
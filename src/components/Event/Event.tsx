'use client';
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import ModalProvider from "@/Providers/ModalProvider";
import {useRegisterForEvent} from '@/context/registerForEventContext';
import { HTTP } from "@/utils/HTTP";
import toast from 'react-hot-toast';
import { useEventRegData } from '@/context/registerForEventContext';
const Event = () => {
    const { Option } = Select;

    const [city, setCity] = React.useState("");
    const leaderId = JSON.parse(localStorage.getItem('user')!) ? JSON.parse(localStorage.getItem('user')!).sf_id : null
    const toggleOpen = useRegisterForEvent((state) => state.toggleOpen);
    const open = useRegisterForEvent((state) => state.open);
    const EventState = useEventRegData();
    const onFinish = (values: any) => {
        try {
            if(city===""){
                toast.error("Please enter the city");
                return;
            }

            const participants = [{ sf_id: leaderId, email: "test@test.test" }];
            (values.sfId ? values.sfId : []).map((SfId: string) => {
                participants.push({
                    sf_id: SfId,
                    email: "test@test.test"
                });
            })
            const data = {
                token: JSON.parse(localStorage.getItem('user')!).token,
                event_id: 85,
                event_city: city,
                event_reg: participants
            };
            HTTP.post("/api/event/register", data)
                .then((res) => {
                    if (res.data.code === 0) {
                        toast.success("Successfully Registered For the Event");
                        EventState.getRegistrationStatus(!EventState.runFuncState);
                        toggleOpen();
                    } else if(res.data.code === -4) {
                        toast.error(res.data.message.stmt);
                    }
                    else {
                        toast.error(res.data.message)
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
                <h1 className="text-center text-4xl font-serif mb-4">Register</h1>
                <Select
                    placeholder="Select the city where you will perform"
                    allowClear
                    onChange={(value) => {
                        setCity(value);
                    }}
                    className='w-[90%] my-2 mb-3'
                >
                    <Option value="">Select The City</Option>
                    <Option value="Delhi">Delhi</Option>
                    <Option value="Mumbai">Mumbai</Option>
                    <Option value="Banglore">Banglore</Option>
                    <Option value="Shillong">Shillong</Option>
                    <Option value="Kolkata">Kolkata</Option>
                </Select>
                <Input placeholder="Participants SF ID" className='w-[90%] my-2 mb-5' value={`Your SF_Id : ${leaderId}`} />
                <Form
                    name="dynamic_form_item"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                >
                    <Form.List
                        name="sfId"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        required={false}
                                        key={field.key}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "Please enter participants's SF ID",
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input placeholder="Participants SF ID" style={{ width: '90%' }} />
                                        </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                                className="ml-3 dynamic-delete-button"
                                                onClick={() => { remove(field.name) }}
                                            />
                                        ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    {fields.length < 11 ? (<Button
                                        type="dashed"
                                        onClick={() => { add() }}
                                        style={{ width: '60%' }}
                                        icon={<PlusOutlined />}
                                    >
                                        Add Member
                                    </Button>) : null}
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item className='flex justify-end !w-[100%]'>
                        <Button ghost  htmlType="submit" className='!w-[100%] md:!h-14 !h-10'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </ModalProvider>
        </>
    )
}

export default Event;    
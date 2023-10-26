import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import ModalProvider from "@/Providers/ModalProvider";
import useRegisterForEvent from '@/context/registerForEventContext';


const Event = () => {


    const toggleOpen = useRegisterForEvent((state) => state.toggleOpen);
    const open = useRegisterForEvent((state) => state.open);

    const onFinish = (values: any) => {
        console.log(values);
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
                <Form
                    name="dynamic_form_item"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                >
                    <Form.List
                        name="sfId"
                        rules={[
                            {
                                validator: async (_, sfId) => {
                                    if (!sfId || sfId.length < 3) {
                                        return Promise.reject(new Error('At least 4 participants are required for the event'));
                                    }
                                },
                            },
                        ]}
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                <Form.Item>
                                    <Input placeholder="Participants SF ID" style={{ width: '90%' }} />
                                </Form.Item>
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
                                                    message: "Please enter participants's SF ID or delete this field.",
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input placeholder="Participants SF ID" style={{ width: '90%' }} />
                                        </Form.Item>
                                        {fields.length > 3 ? (
                                            <MinusCircleOutlined
                                                className="ml-3 dynamic-delete-button"
                                                onClick={() => {remove(field.name)}}
                                            />
                                        ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    {fields.length < 11 ? (<Button
                                        type="dashed"
                                        onClick={() => add()}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </ModalProvider>
        </>
    )
}

export default Event;    
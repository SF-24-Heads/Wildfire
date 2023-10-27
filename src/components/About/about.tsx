import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Desc from './eventDesc';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tab 1',
        children: <Desc/>,
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
];

const About = () => {
    return (
        <div className='m-4'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default About;
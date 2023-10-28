import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Desc from './eventDesc';
import Rules from './rules';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Description',
        children: <Desc/>,
    },
    {
        key: '2',
        label: 'Rules',
        children: <Rules/>,
    },
];

const About = () => {
    return (
        <div className='w-[90%]'>
            <Tabs defaultActiveKey="2" animated={{ inkBar: false, tabPane: true }} items={items}/>
        </div>
    )
}

export default About;
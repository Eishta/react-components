import React, { useState } from 'react'
import Tab from './Tab'
import TabPane from './TabPane'
import Tabs from './Tabs'
import './style.css'

const TabsContainer = () => {
    let [activeTab, onChangeTab] = useState(0);
    return (
      <Tabs activeIndex={activeTab} onChangeTab={onChangeTab}>
        <Tab disabled={false} label="Tab1" />
        <Tab disabled={false} label="Tab2" />
        <Tab disabled={true} label="Tab3" />
        <TabPane>I am Tab 1 Pane - 1111111111111111</TabPane>
        <TabPane>I am Tab 2 Pane - 22222222222222222</TabPane>
        <TabPane>I am Tab 3 Pane - 3333333333333333</TabPane>
      </Tabs>
    );
}

export default TabsContainer
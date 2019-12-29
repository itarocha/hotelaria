import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import { hoje } from '../../util/commons/petraDate'
import MapaHospedagens from './MapaHospedagens'
import DateSelector from '../../components/DateSelector'

const { TabPane } = Tabs

/* https://codepen.io/ph1p/pen/JBBjNy */

function callback (key) {
    console.log(key)
}

const Hospedagens = () => {
    const [selectedDate, setSelectedDate] = useState(hoje())

    useEffect(() => {
        // console.log(`use effect ${selectedDate}`)
    }, [selectedDate])

    const handleDateChange = (novaData) => {
        // console.log('A data do componente DateSelector mudou para ', novaData)
        setSelectedDate(novaData)
    }

    return (
        <div>
            <h2>Hospedagens</h2>

            <DateSelector onDateChange={handleDateChange} />

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Hospedagens" key="1">
                    <MapaHospedagens date={ selectedDate }/>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Hospedagens

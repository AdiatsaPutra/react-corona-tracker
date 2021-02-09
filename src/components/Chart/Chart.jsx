import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from "react-chartjs-2";

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData);
        }
        getDailyData();
    });
    return (
        <div>
            Chart
        </div>
    )
}

export default Chart
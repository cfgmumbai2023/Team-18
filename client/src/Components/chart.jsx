import { useState } from "react";
import "./chart.css";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import { UserData } from "./data";

import React from 'react'

const Chart = () => {
    console.log("djdjjdj");
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return (
        <div className="App">
            <div style={{ width: 700 }}>
                <BarChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <PieChart chartData={userData} />
            </div>
            <div className="summary">
                <h1>Summary</h1>
                <p>Class that is underperforming; Arithmetic</p>
                <p>Following are the list of students that are underperforming</p>
                <ul>
                    <li>Aman</li>
                    <li>Deepak</li>
                </ul>

            </div>
        </div>

        
    );
}
export default Chart;
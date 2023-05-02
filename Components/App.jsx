import React, { useState } from 'react'
import BarChart from './BarChart'
import { WineData } from './Data'
import LineChart from './LineChart'

const App = () => {
    const [wine , setWine] = useState({
        labels: WineData.map((data) => data.Hue) ,
        datasets : [{
            label : "User Flavanoids",
            data : WineData.map((data) => data.Flavanoids),
            backgroundColor : ['red' , 'green' , 'black']
        }
    ]
    })
    const [ash , setAsh] = useState({
        labels: WineData.map((data) => data.Hue) ,
        datasets : [{
            label : "User asf",
            data : WineData.map((data) => data.Ash)
        }
    ]
    })
  return(
    
    <div> 
    <BarChart chartData={wine}/>
    <LineChart chartData={ash}/>
    </div>
  )}

export default App
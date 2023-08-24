import React, { useEffect, useState } from 'react'

const App = () => {

    const [data, setData] = useState();

    const getData = async () => {
        try{    
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        // console.log(actualData)
        setData(actualData.statewise);

        }
        catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
      <h1>
        Covid-19 India Data
      </h1>

      <table>
        <thead>
        <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Updated</th>
        </tr>
        </thead>

        <tbody>
        {     
            data.map((cur, index)=>{

            return(
                <tr key={index}>
                    <th>{cur.state}</th>
                    <th>{cur.confirmed}</th>
                    <th>{cur.recovered}</th>
                    <th>{cur.deaths}</th>
                    <th>{cur.active}</th>
                    <th>{cur.lastupdatedtime}</th>
                </tr>   
            )})
        }
        </tbody>
        
      </table>
    </div>
  )
}

export default App;

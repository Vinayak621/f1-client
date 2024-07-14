import React, { useState } from 'react';
import './raceResultsPage.css';

const RaceResultsPage = () => {
    const [year, setYear] = useState("");
    const [number, setNumber] = useState(0);
    async function callResultFn(){
        const entered_year=parseInt(year)
        const response=await fetch('http://127.0.0.1:8000/round/race_result',{
            method:"POST",
             headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify({ year: entered_year, round: number })
        })
        const data=response.json()
        console.log(data)
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Race Results</h5>
                <div className="form-group">
                    <label htmlFor="yearInput">Enter the required year to check the result</label>
                    <input
                        id="yearInput"
                        type="text"
                        className="form-control"
                        placeholder="Enter year"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numberInput">Enter the race number</label>
                    <input
                        id="numberInput"
                        type="number"
                        className="form-control"
                        placeholder="Enter number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
                <button className='button-submit' onClick={callResultFn}>Submit Data</button>
            </div>
        </div>
    );
}

export default RaceResultsPage;

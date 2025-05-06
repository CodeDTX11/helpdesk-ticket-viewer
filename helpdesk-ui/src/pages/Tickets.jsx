import { useEffect, useState } from 'react';

export default function Tickets() {

    const [status, setStatus] = useState("All")

    return (

        <div className="container d-flex">
            <div id="left" className="container mt-5 d-flex flex-column gap-2 mx-5">
                <label htmlFor="status">Select Ticket Status: </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-select"
                >
                    <option value="All">All</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
                <button className="btn btn-primary" onClick={() => console.log(status)}>View Tickets</button>
            </div>
            <div id="right" className="container mt-5 mx-5">
                <h1>Ticket List</h1>
            </div>
        </div>
    );
}
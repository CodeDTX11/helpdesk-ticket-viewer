import { useEffect, useState } from 'react';
import { getSummary } from '../services/ticketService';
// import { getSummary } from '../services/mockTicketService';  

export default function Dashboard() {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSummary()
      .then(data => setSummary(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" container mt-5">
      <h1 className='text-center'>Dashboard Ticket Summary</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row mt-5">
          {Object.entries(summary).map(([status, count]) => (
            <div className="col-md-4" key={status}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{status}</h5>
                  <p className="card-text display-6">{count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default function TicketSelector({ selectedStatus, onChange, onSubmit }) {
    return (
      <>
        <label htmlFor="status">Filter by Status: </label>
        <select
          id="status"
          value={selectedStatus}
          onChange={(e) => onChange(e.target.value)}
          className="form-select"
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
          <option value="None">None</option>
        </select>
        <button className="btn btn-primary" onClick={onSubmit}>View Tickets</button>
      </>
    );
  }
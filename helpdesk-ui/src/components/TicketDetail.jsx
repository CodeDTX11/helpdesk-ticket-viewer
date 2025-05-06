

export default function TicketDetail({ ticket }) {
    if (!ticket) return <p>Select a ticket to see details.</p>;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ticket.id} - {ticket.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ticket.status}</h6>
                <p className="card-text">{ticket.description}</p>
            </div>
        </div>
    );
}
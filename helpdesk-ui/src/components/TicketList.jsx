

export default function TicketList({ tickets, onTicketClick }) {
    if (!tickets.length) return <p>No tickets to display.</p>;

    return (
        <ul className="list-group">
            {tickets.map(ticket => (
                <li
                    key={ticket.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => onTicketClick(ticket.id)}
                >
                    <strong>{ticket.id} - {ticket.title}</strong> - {ticket.status}
                </li>
            ))}
        </ul>
    );
}
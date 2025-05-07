import { useEffect, useState } from 'react';
import TicketSelector from '../components/TicketSelector';
import TicketList from '../components/TicketList';
import TicketDetail from '../components/TicketDetail';
import { getTickets,  getTicketById} from '../services/ticketService';
// import { getTickets,  getTicketById} from '../services/mockTicketService';

export default function Tickets() {

    const [status, setStatus] = useState('All');
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [listLoading, setListLoading] = useState(false);
    const [ticketLoading, setTicketLoading] = useState(false);
    const [listError, setListError] = useState(null);
    const [ticketError, setTicketError] = useState(null);

    const fetchTickets = async () => {
        setListLoading(true);
        setListError(null);
        try {
            if(status === "None"){
                setTickets([])
                setSelectedTicket(null)
            } else {
            const data = await getTickets(status);
            setTickets(data);
            }
        } catch (err) {
            console.error('Error fetching tickets:', err);
            setListError('Failed to load tickets.');
            setTickets([]);
        } finally {
            setListLoading(false);
        }
    };

    const handleTicketClick = async (id) => {
        setTicketLoading(true);
        setTicketError(null);

        try {
            const ticket = await getTicketById(id);
            setSelectedTicket(ticket);
        } catch (err) {
            console.error(err);
            setTicketError('Failed to load ticket.');
            setSelectedTicket(null);
        } finally {
            setTicketLoading(false);
        }
    };

    return (
        <div className="container d-flex">
        <div id="left" className="container mt-5 d-flex flex-column gap-2 mx-5">
            <TicketSelector onChange={setStatus} onSubmit={fetchTickets} />
            {listLoading && <p>Loading tickets...</p>}
            {listError && <p className="text-danger">{listError}</p>}
            <TicketList tickets={tickets} onTicketClick={handleTicketClick} />
        </div>
        <div id="right" className="container mt-5 mx-5">
            <h1>Ticket Details</h1>
            {ticketLoading && <p>Loading ticket details...</p>}
            {ticketError && <p className="text-danger">{ticketError}</p>}
            <TicketDetail ticket={selectedTicket} />
        </div>
    </div>
    );
}
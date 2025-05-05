package com.eupraxia.helpdesk_api.services;

import com.eupraxia.helpdesk_api.exceptions.ResourceNotFoundException;
import com.eupraxia.helpdesk_api.mock_data.MockDataLoader;
import com.eupraxia.helpdesk_api.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TicketService {

    private final List<Ticket> tickets;

    public TicketService(MockDataLoader mockTickets) {
        this.tickets = mockTickets.loadTickets();
    }

    public List<Ticket> getAllTickets() {
        return tickets;
    }

    public List<Ticket> getTicketsByStatus(String status) {
        List<Ticket> result = new ArrayList<>();
        for(Ticket ticket : tickets) {
            if(ticket.getStatus().equalsIgnoreCase(status)) {
                result.add(ticket);
            }
        }
        return result;
//                return tickets.stream()
//                .filter(t -> t.getStatus().equalsIgnoreCase(status))
//                .collect(Collectors.toList());
    }

    public Ticket getTicketById(Long id) {

        for (Ticket ticket : tickets) {
            if (ticket.getId().equals(id)) {
                return ticket;
            }
        }
        throw new ResourceNotFoundException("Ticket not found for ID: " + id);

//        return tickets.stream()
//                .filter(t -> t.getId().equals(id))
//                .findFirst()
//                .orElseThrow(() ->  new ResourceNotFoundException("Ticket not found for ID: " + id));
    }

    public Map<String, Long> getSummary() {

        Map<String, Long> summary = new HashMap<>();

        for (Ticket ticket : tickets) {
            String status = ticket.getStatus().toLowerCase();  // normalize key
            summary.put(status, summary.getOrDefault(status, 0L) + 1);
        }

        return summary;

        //very declarative approach, need to study
//        return tickets.stream()
//                .collect(Collectors.groupingBy(
//                        t -> t.getStatus().toLowerCase(), // normalize for consistent keys
//                        Collectors.counting()
//                ));


    }
}

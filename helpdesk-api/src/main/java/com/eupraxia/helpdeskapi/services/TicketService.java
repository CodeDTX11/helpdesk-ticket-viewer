package com.eupraxia.helpdeskapi.services;

import com.eupraxia.helpdeskapi.exceptions.ResourceNotFoundException;
import com.eupraxia.helpdeskapi.model.Ticket;
import com.eupraxia.helpdeskapi.repositories.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<Ticket> getTicketsByStatus(String status) {

        return ticketRepository.findByStatusIgnoreCase(status);
    }

    public Ticket getTicketById(Long id) {

        return ticketRepository.findById(id)
                .orElseThrow(() ->  new ResourceNotFoundException("Ticket not found for ID: " + id));
    }

    public Map<String, Long> getSummary() {

        Map<String, Long> summary = new HashMap<>();

        summary.put("open", 0L);
        summary.put("in progress", 0L);
        summary.put("closed", 0L);

        List<Ticket> tickets = ticketRepository.findAll();
//        for (Ticket ticket : tickets) {
//            System.out.println(ticket.getTitle());
//            System.out.println(ticket.getDescription());
//            System.out.println(ticket.getStatus());
//        }
        for (Ticket ticket : tickets) {
            String status = ticket.getStatus();
            summary.put(status, summary.get(status) + 1);

        }
        return summary;
    }

    public Ticket createTicket(Ticket newTicket) {

        if(newTicket == null || newTicket.getTitle() == null || newTicket.getDescription() == null){
            throw new IllegalArgumentException("Invalid ticket data");
        }
        newTicket.setStatus("Open");

        return ticketRepository.save(newTicket);
    }
}

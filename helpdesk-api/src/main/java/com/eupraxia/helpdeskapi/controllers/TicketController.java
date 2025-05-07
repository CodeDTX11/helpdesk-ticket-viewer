package com.eupraxia.helpdeskapi.controllers;

import com.eupraxia.helpdeskapi.model.Ticket;
import com.eupraxia.helpdeskapi.services.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/tickets")
    public List<Ticket> getTickets(@RequestParam(required = false) String status) {
        if (status == null) {
            return ticketService.getAllTickets();
        } else {
            return ticketService.getTicketsByStatus(status);
        }
    }

    @GetMapping("/tickets/{id}")
    public Ticket getTicketById(@PathVariable Long id) {
        return ticketService.getTicketById(id);
    }

    @GetMapping("/summary")
    public Map<String, Long> getSummary() {
        return ticketService.getSummary();
    }

    @PostMapping("/tickets")
    public Ticket createTicket(@RequestBody Ticket newTicket){
        return ticketService.createTicket(newTicket);
    }
}

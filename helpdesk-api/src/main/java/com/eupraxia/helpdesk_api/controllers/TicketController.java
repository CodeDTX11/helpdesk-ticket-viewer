package com.eupraxia.helpdesk_api.controllers;

import com.eupraxia.helpdesk_api.model.Ticket;
import com.eupraxia.helpdesk_api.services.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

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
}

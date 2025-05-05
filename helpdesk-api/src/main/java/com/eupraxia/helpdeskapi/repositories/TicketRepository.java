package com.eupraxia.helpdeskapi.repositories;

import com.eupraxia.helpdeskapi.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByStatusIgnoreCase(String status);
}

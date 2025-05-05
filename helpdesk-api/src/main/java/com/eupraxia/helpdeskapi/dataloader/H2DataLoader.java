package com.eupraxia.helpdeskapi.dataloader;

import com.eupraxia.helpdeskapi.model.Ticket;
import com.eupraxia.helpdeskapi.repositories.TicketRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class H2DataLoader implements CommandLineRunner {

    private final TicketRepository ticketRepo;

    public H2DataLoader(TicketRepository ticketRepo) {
        this.ticketRepo = ticketRepo;
    }

    @Override
    public void run(String... args) {
        if (ticketRepo.count() == 0) {
            ticketRepo.save(new Ticket("Login issue", "User can't log in", "Open"));
            ticketRepo.save(new Ticket("Page not loading", "Dashboard not rendering", "In Progress"));
            ticketRepo.save(new Ticket("Feature request", "Add dark mode", "Closed"));
            ticketRepo.save(new Ticket("Performance issue", "System runs slowly during peak hours", "Open"));
            ticketRepo.save(new Ticket("Security concern", "Password reset not working", "In Progress"));
            ticketRepo.save(new Ticket("Email integration", "Outlook plugin not syncing", "Open"));
            ticketRepo.save(new Ticket("UI bug", "Buttons misaligned on mobile view", "In Progress"));
            ticketRepo.save(new Ticket("Data export", "CSV export failing for large datasets", "Closed"));
            ticketRepo.save(new Ticket("Network issue", "Intermittent connection drops", "Open"));
            ticketRepo.save(new Ticket("Print error", "Documents not printing from Chrome", "In Progress"));
            ticketRepo.save(new Ticket("Software update", "Need latest version installed", "Closed"));
            ticketRepo.save(new Ticket("Account lockout", "Multiple failed login attempts", "Open"));
            ticketRepo.save(new Ticket("Data loss", "Files missing after system crash", "In Progress"));
            ticketRepo.save(new Ticket("Hardware failure", "Monitor display flickering", "Open"));
            ticketRepo.save(new Ticket("Access request", "New employee needs system access", "Closed"));
        }
    }
}

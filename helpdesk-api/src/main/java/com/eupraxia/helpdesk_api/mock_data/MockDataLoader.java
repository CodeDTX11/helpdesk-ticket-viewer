package com.eupraxia.helpdesk_api.mock_data;

import com.eupraxia.helpdesk_api.model.Ticket;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class MockDataLoader {

    public List<Ticket> loadTickets() {
        return new ArrayList<>(Arrays.asList(
                new Ticket(1L, "Login issue", "User cannot access their account", "Open"),
                new Ticket(2L, "Page not loading", "Dashboard shows blank screen", "In Progress"),
                new Ticket(3L, "Feature request", "Add dark mode support", "Closed"),
                new Ticket(4L, "Performance issue", "System runs slowly during peak hours", "Open"),
                new Ticket(5L, "Security concern", "Password reset not working", "In Progress"),
                new Ticket(6L, "Email integration", "Outlook plugin not syncing", "Open"),
                new Ticket(7L, "UI bug", "Buttons misaligned on mobile view", "In Progress"),
                new Ticket(8L, "Data export", "CSV export failing for large datasets", "Closed"),
                new Ticket(9L, "Network issue", "Intermittent connection drops", "Open"),
                new Ticket(10L, "Print error", "Documents not printing from Chrome", "In Progress"),
                new Ticket(11L, "Software update", "Need latest version installed", "Closed"),
                new Ticket(12L, "Account lockout", "Multiple failed login attempts", "Open"),
                new Ticket(13L, "Data loss", "Files missing after system crash", "In Progress"),
                new Ticket(14L, "Hardware failure", "Monitor display flickering", "Open"),
                new Ticket(15L, "Access request", "New employee needs system access", "Closed")
        ));

    }
}

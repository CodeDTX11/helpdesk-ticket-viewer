
const mockTickets = [
  { id: 1, title: 'Login not working', description: 'User cannot log in with correct credentials.', status: 'Open' },
  { id: 2, title: 'UI bug on dashboard', description: 'Graph overflows on mobile devices.', status: 'In Progress' },
  { id: 3, title: 'Feature request: Dark mode', description: 'Users are requesting a dark mode option.', status: 'Closed' },
  { id: 4, title: 'Email notifications fail', description: 'Emails are not being sent on ticket creation.', status: 'Open' },
  { id: 5, title: 'Slow response times', description: 'API responses are delayed during peak hours.', status: 'In Progress' },
];


export async function getSummary() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const summary = mockTickets.reduce((acc, ticket) => {
        acc[ticket.status] = (acc[ticket.status] || 0) + 1;
        return acc;
      }, {});
      resolve(summary);
    }, 300);
  });
}

export async function getTickets(status) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (status === 'All') {
        resolve(mockTickets);
      } else {
        resolve(mockTickets.filter(ticket => ticket.status === status));
      }
    }, 500); // simulate network latency
  });
}

export async function getTicketById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ticket = mockTickets.find(t => t.id === id);
      ticket ? resolve(ticket) : reject(new Error('Ticket not found'));
    }, 300);
  });
}

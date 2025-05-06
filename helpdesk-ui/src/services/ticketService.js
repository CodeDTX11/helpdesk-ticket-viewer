import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export async function getTickets(ticketStatus = 'All') {
  const config = {};

  if (ticketStatus !== 'All') {
    config.params = {
      "status" : ticketStatus
    };
  }

  try {
    const response = await axios.get(`${BASE_URL}/tickets`, config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}

export async function getSummary() {
  try {
    const response = await axios.get(`${BASE_URL}/summary`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.error("Failed to fetch summary:", err);
    throw err;
  }
}

export async function getTicketById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/tickets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    throw error;
  }
}
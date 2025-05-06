import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export async function getTickets(status = 'All') {

  const config = status === 'All'
    ? {} // no query params
    : { params: { status } }; // adds ?status=...

  try {
    const response = await axios.get(`${BASE_URL}/tickets`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}

// export async function getTicketsByStatus(status) {
//   try {
//   const res = await axios.get(`${BASE_URL}/tickets?status=${status}`);
//   return res.data;
//   } catch (err) {
//     console.error("Failed to fetch tickets:", err);
//     throw err; // re-throw so the caller knows it failed
//   }
// }


export async function getSummary() {
  try {
    const response = await axios.get(`${BASE_URL}/summary`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch summary:", err);
    throw err; // re-throw so the caller knows it failed
  }
}

export async function getTicketById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/tickets/${id}`);
    return response.data; // this is the actual ticket object
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    throw error;
  }
}
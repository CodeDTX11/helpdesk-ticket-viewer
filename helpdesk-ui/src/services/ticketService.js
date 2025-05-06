import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';


export async function getAllTickets() {
  try {
    const res = await axios.get(`${BASE_URL}/tickets`);
    return res.data;
  } catch (err) {
    console.error("Failed to get tickets:", err);
    throw err; // re-throw so the caller knows it failed
  }
}

export async function getTicketsByStatus(status) {
  try {
  const res = await axios.get(`${BASE_URL}/tickets?status=${status}`);
  return res.data;
  } catch (err) {
    console.error("Failed to fetch tickets:", err);
    throw err; // re-throw so the caller knows it failed
  }
}


export async function getSummary() {
  try {
    const res = await axios.get(`${BASE_URL}/summary`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch summary:", err);
    throw err; // re-throw so the caller knows it failed
  }
}
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api`,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

// Contact
export const submitContact = (data) => API.post("/contact", data);
export const getMessages = () => API.get("/contact");
export const markAsRead = (id) => API.patch(`/contact/${id}/read`);

// Events
export const getEvents = () => API.get("/events");
export const getFeaturedEvents = () => API.get("/events/featured");
export const getEvent = (id) => API.get(`/events/${id}`);
export const createEvent = (data) => API.post("/events", data);
export const updateEvent = (id, data) => API.put(`/events/${id}`, data);
export const deleteEvent = (id) => API.delete(`/events/${id}`);

// Stats
export const getStats = () => API.get("/stats");
export const updateStat = (id, data) => API.put(`/stats/${id}`, data);

// Newsletter
export const subscribe = (email) => API.post("/newsletter", { email });
export const getSubscribers = () => API.get("/newsletter");
export const unsubscribe = (id) => API.delete(`/newsletter/${id}`);

import axios from "axios";
import { Contact } from "../types/contact-types";

const API_BASE_URL = 'http://13.232.164.107:8000/api';

// Fetch all contacts
export const getAllContact = async () => {
    const res = axios.get(`${API_BASE_URL}/contacts/`);
    const data = (await res).data;
    return data;
}

// Create a new contact
export const createContact = async (item: Contact) => {
    const res = axios.post(`${API_BASE_URL}/contacts/`, item);
    const data = (await res).data;
    return data;
}

// Fetch a single contact by ID
export const getSingleContact = async (id: string) => {
    const res = axios.get(`${API_BASE_URL}/contacts/${id}/`);
    const data = (await res).data;
    return data;
}

// Edit a contact
export const editContact = async (item: Contact) => {
    const res = axios.put(`${API_BASE_URL}/contacts/${item.id}/`, item);
    const data = (await res).data;
    return data;
}

// Delete a contact
export const deleteContact = async (id: string) => {
    const res = axios.delete(`${API_BASE_URL}/contacts/${id}/`);
    const data = (await res).data;
    return data;
}

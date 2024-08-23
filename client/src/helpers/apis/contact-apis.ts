import axios from "axios";
import { Contact } from "../types/contact-types";

export const getAllContact = async() => {
    const res = axios.get('http://localhost:8000/api/contacts/')
    const data = (await res).data
    return data
}

export const createContact = async(item: Contact) => {
    const res = axios.post('http://localhost:8000/api/contacts/',item)
    const data = (await res).data
}

export const getSingleContact = async(id: string) => {
    const res = axios.get(`http://localhost:8000/api/contacts/${id}/`)
    const data = (await res).data
    return data
}

export const editContact = async(item: Contact) => {
    const res = axios.put(`http://localhost:8000/api/contacts/${item.id}/`, item)
    const data = (await res).data
}

export const deleteContact = async(id: string) => {
    const res = axios.delete(`http://localhost:8000/api/contacts/${id}/`)
    const data = (await res).data
}
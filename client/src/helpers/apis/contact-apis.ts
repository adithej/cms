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
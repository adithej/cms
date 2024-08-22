import axios from "axios";

export const getAllContact = async() => {
    const res = axios.get('http://localhost:8000/api/contacts/')
    const data = (await res).data
    return data
}
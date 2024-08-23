import axios from "axios"

export const getCasesWithDates = async () => {
    const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    const data = res.data
    return data
}

export const getAllGlobalCases = async () => {
    const res = await axios.get('https://disease.sh/v3/covid-19/all')
    const data = res.data
    return data
}

export const getCasesWithCountries = async () => {
    const res = await axios.get('https://disease.sh/v3/covid-19/countries')
    const data = res.data
    return data
}
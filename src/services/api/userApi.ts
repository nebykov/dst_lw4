import axios from "axios"


export const createUser = async (fullName: string, dateOfBirth: string) => {
     try {
           const {data} = await axios.post("http://localhost:8000/user/create", {fullName, dateOfBirth})
           return data
     } catch(e) {
        alert(e)
     }
}


export const login = async (fullName: string) => {
    try {
           const { data } = await axios.get(`http://localhost:8000/user/findByName/${fullName}`)
           return data
    } catch(e) {
        alert(e)
    }
}


export const getAllUsers = async () => {
    const {data} = await axios.get("http://localhost:8000/user")
    return data
}
import axios from "axios";


export const getReceivedLetters = async (recipientId: number) => {
      try {
          const {data} = await axios.get(`http://localhost:8000/letter/received/${recipientId}`)
          return data
      } catch(e) {
        alert(e)
      }
}


export const getSentLetters = async (senderId: number) => {
    try {
        const {data} = await axios.get(`http://localhost:8000/letter/sent/${senderId}`)
        return data
    } catch(e) {
      alert(e)
    }
}


export const sendLetter = async (senderId: number, recipientId: string, subject: string, text: string) => {
  const {data} = await axios.post("http://localhost:8000/letter/send", {senderId, recipientId, subject, text})
  return data
}
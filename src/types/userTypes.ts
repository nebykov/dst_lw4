export interface IUser {
    user_id: number,
    full_name: string,
    date_of_birth: Date 
}


export interface ILetter {
    letter_id: number,
    sender_id: number,
    recipient_id: number,
    subject: string,
    text: string,
    send_date: Date
}
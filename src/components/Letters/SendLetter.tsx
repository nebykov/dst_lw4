import React from "react";
import { IUser } from "../../types/userTypes";
import { getAllUsers } from "../../services/api/userApi";
import { useAppSelector } from "../../utils/hooks/useRedux";
import { sendLetter } from "../../services/api/letterApi";
import useInput from "../../utils/hooks/useInput";

const SendLetter = () => {
    const {currentUser} = useAppSelector(state => state.user)
    const [users, setUsers] = React.useState<IUser[] | null>()
    const [recipient, setRecipient] = React.useState<string | null>(null)
    const subject = useInput('')
    const [letterText, setLetterText] = React.useState('') 

    React.useEffect(() => {
        getAllUsers().then(data => setUsers(data))
    },[])

    const onSendLetter = () => {
        if(currentUser && recipient && letterText) {
            sendLetter(currentUser?.user_id, recipient, subject.value, letterText).then(data => alert(data))
        }
    }
  return (
    <div className="fixed right-4 max-w-64 p-4 bottom-8 flex flex-col gap-2 bg-stone-600 ">
      <h3>Send Letter</h3>
      <div className="flex gap-1 flex-col">
        <span>Send to:</span>
        <select name="cars" id="cars" onChange={(e) => setRecipient(e.target.value)}>
            {users?.map(user => {
                if( user.user_id !== currentUser?.user_id) {
                    return (<option key={user.user_id} value={user.user_id}>{user.full_name}</option>)
                }
            })}
        </select>
      </div>
      <input type="text" value={subject.value} onChange={subject.onChange}/>
      <textarea name="letter_text" id="" cols={32} rows={5} value={letterText} onChange={(e) => setLetterText(e.target.value)}></textarea>
      <button onClick={onSendLetter}>Submit</button>
    </div>
  );
};

export default SendLetter;

import React from "react";
import { ILetter } from "../../types/userTypes";
import { getReceivedLetters, getSentLetters } from "../../services/api/letterApi";
import { useAppSelector } from "../../utils/hooks/useRedux";
import { useLocation } from "react-router-dom";

interface LettersProps {
  received: boolean;
}

const Letters: React.FC<LettersProps> = ({ received }) => {
    const location = useLocation()
  const { currentUser } = useAppSelector((state) => state.user);
  const [letters, setLetters] = React.useState<ILetter[] | null>(null);
  React.useEffect(() => {
    if(currentUser) {
        console.log(location.pathname)
        if (received) {
            console.log(received)
            getReceivedLetters(currentUser?.user_id).then((data) => setLetters(data));
        } else {
            getSentLetters(currentUser.user_id).then(data => setLetters(data)).catch(e => console.log(e))
        }
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-3 w-[60vw]">
      {letters != null && letters.length > 0 ? (
        letters?.map((letter) => (
          <div key={letter.letter_id} className="bg-[#1a1a1a] flex min-h-10 pl-2 flex-col">
            <span >Subject: {letter.subject}</span>
            <span>Sender Id: {letter.sender_id}</span>
            <p>Letter Text: {letter.text.slice(0, 10)}</p>
          </div>
        ))
      ) : (
        <span>There is no letters {received}</span>
      )}
    </div>
  );
};

export default Letters;

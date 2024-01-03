import React from "react";
import { createUser, login } from "../../services/api/userApi";
import useInput from "../../utils/hooks/useInput";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import { setUser } from "../../store/slices/userSlice";

interface AuthPageProps {
    isLogin: boolean
}

const AuthPage: React.FC<AuthPageProps> = ({isLogin}) => {
  const username = useInput('')
  const dateOfBirth = useInput('')
  const dispatch = useAppDispatch()

  const onSubmit = () => {
    console.log(isLogin)
    if (isLogin) {
        login(username.value).then(data => dispatch(setUser(data))).catch(e => console.log(e))
    } else {
         createUser(username.value, dateOfBirth.value).then(data => dispatch(setUser(data))).catch(e => console.log(e))
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-[100vw]">
      {isLogin? <h1>Login</h1> : <h1>Sign Up</h1>}
      <div className="flex flex-col gap-2 w-72">
        <input type="text" value={username.value} onChange={username.onChange}/>
        {!isLogin && <input type="date" value={dateOfBirth.value} onChange={dateOfBirth.onChange}/>}
        <button onClick={onSubmit}>Submit</button>
        {isLogin ? <Link to={'/registration'}><span>Don`t have an account?</span></Link> : <Link to={'/auth'}><span>Have an account?</span></Link>}
      </div>
    </div>
  );
};

export default AuthPage;

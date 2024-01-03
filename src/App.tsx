import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./utils/hooks/useRedux";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserPage from "./pages/UserPage/UserPage";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <>
      {!isAuth && (
        <Routes>
          <Route path="/auth" element={<AuthPage isLogin={true} />} />
          <Route path="/registration" element={<AuthPage isLogin={false} />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      )} { isAuth && (
          <Routes>
            <Route path="/sended" element={<UserPage received={false}/>} />
            <Route path="/received" element={<UserPage received={true}/>} />
            <Route path="*" element={<Navigate to="sended" />} />
          </Routes>
      )}
    </>
  );
}

export default App;

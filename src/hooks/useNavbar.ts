import { logIn, logOut } from "@/app/store/authSlice";
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useNavbar = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(logIn());
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return { handleLogIn, handleLogOut, isAuth };
};

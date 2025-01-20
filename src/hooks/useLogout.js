import { useAuthContext } from "./useAuthContext";
// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export function useLogout() {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { logout }
}

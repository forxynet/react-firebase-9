import { createContext, useReducer, useEffect } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

const Initialize = [{
  user: null,
  authIsReady: false
}]

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     authIsReady: false
//   })
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Initialize)


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
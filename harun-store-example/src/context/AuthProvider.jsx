import React, { createContext } from 'react'
const AuthContext= createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={user}>
        {children}


    </AuthContext.Provider>

    
  )
}

export default AuthProvider
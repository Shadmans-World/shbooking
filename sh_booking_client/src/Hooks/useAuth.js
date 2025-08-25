import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProviders/AuthProvider"

const useAuth = ()=>{
    return useContext(AuthContext)
}

export default useAuth;
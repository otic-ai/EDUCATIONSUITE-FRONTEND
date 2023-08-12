import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate as useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
// const proxy = 'http://127.0.0.1:8000'
  const proxy = 'https://somesai-backend.azurewebsites.net'
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    let [jsonData, setJsonData] = useState([])
    const history = useHistory()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch(`${proxy}/api/token/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
         setJsonData(data)
        if(response.status === 200){
            setAuthTokens(data)
            
            setUser(jwt_decode(data.access))
             localStorage.setItem('sign', true)
            localStorage.setItem('authTokens', JSON.stringify(data))
            history('/')
        }else{
            alert('Invalid User Credentials!')
        }
    }


    let logoutUser = () => {
        const signs = localStorage.getItem('sign')
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
       
       // if ( signs === 'true'){
           history('/landing')   
       
        
    }


    let updateToken = async ()=> {

        let response = await fetch(`${proxy}/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        setJsonData(data)
        if (response.status === 200){
            if (Object.keys(jsonData).includes('detail')) {
                logoutUser()
            } else {
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
          
            }
                
          
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        proxy:proxy
        
    }


    useEffect(()=> {
        
        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 20

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])
// {loading ? null : children}
    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
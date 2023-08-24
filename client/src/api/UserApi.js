import  {useState , useEffect} from 'react'
import axios from 'axios'

function UserApi(token) {
    const[isLogged , setIsLogged]= useState(false)
    const[isAdmin , setIsAdmin]= useState(false)
useEffect(()=> {
        if(token) {
            const getUsers = async () =>{
                try {
                    const res = await axios.get('https://cubexback.online/user/infor' , {
                        headers : {Authorization: token}
                     
                    }) 
                     
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                  } catch (error) {
                    alert(error.response.data.msg)
                }
            }
            getUsers() 
        }

    },[token])
  return{
    isLogged:[isLogged , setIsLogged],
    isAdmin :[isAdmin , setIsAdmin] 
  }
}

export default UserApi
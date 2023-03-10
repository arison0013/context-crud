import axios from 'axios';
import React,{createContext,useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const UsersContext = createContext();



const UserContextProvider = (props) => {
    const [userList, setUserList] = useState([
        // {id:uuidv4(), name:"smith"},
        // {id:uuidv4(), name:"smith"},
        // {id:uuidv4(), name:"smith"},
    ])


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users   ").then(res=>{
            console.log(res)
            setUserList(res.data)
        })
    },[])

    const addUser = (name) =>{
        setUserList([...userList,{id:uuidv4(),name}])
    }

    const deleteUser = (id) =>{
        setUserList(userList.filter(user => user.id !== id))
    }

    const editUser = (name , id) =>{
        const newArray = userList.map((user) => user.id === id ? {...user , name:name} : user)
        setUserList(newArray)
        // console.log(newArray)
    }

  return (
    <UsersContext.Provider value={{userList, addUser,deleteUser,editUser}}>
        {props.children}
    </UsersContext.Provider>
  )
}

export default UserContextProvider

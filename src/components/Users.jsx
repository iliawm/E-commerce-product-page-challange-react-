import axios from 'axios'
import usersData from '../../api/users.json'
import { useParams } from 'react-router-dom'
import { use, useEffect, useState } from 'react'


function UserPf({setCurrentUser}){
    const { id } = useParams()
useEffect(() => {
    const foundUser = usersData.users.find(user => user.id === parseInt(id))
    
    setCurrentUser(foundUser)
    console.log(foundUser)
}, [id,setCurrentUser])
    return(
<>
    
</>
    )

}
export default UserPf;

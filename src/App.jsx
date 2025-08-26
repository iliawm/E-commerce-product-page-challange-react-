import Header from './components/Header'
import './App.scss'
import { HashRouter as Router, Routes, Route, useParams,Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserPf from './components/Users'
import usersData from '../api/users.json'
import Products from './components/Products'

function App() {
const [currentUser,setCurrentUser]= useState(usersData.users[0])
const[productid, setProductId] = useState(1);
  return (
    <>
      <Router>
      <Header pName="sneakers" currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Navigate to="/user/1" replace />} />
        <Route path="/user/:id"  element={[<UserPf key={currentUser.id} setCurrentUser={setCurrentUser}/>, <Products key="products" productid={setProductId} />]}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App

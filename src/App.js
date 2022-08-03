import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as React from 'react'
import Login from './components/Login'
import CollectionsNav from './components/CollectionsNav'
import UsersManagement from './components/UsersManagement'

import EditPage from './components/EditPage'


function App() {
  const [user, setUser] = React.useState({})

  //
  const setUserState = (user) => {
    setUser(user)
  }

  React.useEffect(() => {
    console.log('W')
  })
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login onLogin={setUserState} />} />
          <Route path="/manage-users" element={<UsersManagement />} />
          <Route path="/collections-nav" element={<CollectionsNav />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Profile from './Auth/Profile'
import Register from './Auth/Register'
import Alert from './components/Alert'

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Alert alert={alert} />
      <div>
        <Routes>
          <Route path='/' element={<Login showAlert={showAlert} />} />
          <Route path='/register' element={<Register showAlert={showAlert} />} />
          <Route path='/profile' element={<Profile showAlert={showAlert} />} />
        </Routes>
      </div>

    </>
  )
}

export default App;

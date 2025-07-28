import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import UserCrud from './pages/User'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>Home Page</h1>
      <button
        style={{ marginTop: 32, padding: '12px 32px', fontSize: 18, borderRadius: 8, background: '#6366f1', color: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={() => navigate('/users')}
      >
        Users sahifasiga o‘tish
      </button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

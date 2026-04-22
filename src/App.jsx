import { useState } from 'react'
import Portada from './pages/Portada'
import Login from './pages/Login'
import AppShell from './layout/AppShell'

function App() {
  const [screen, setScreen] = useState('portada')
  const [role, setRole] = useState(null)
  const [user, setUser] = useState(null)

  const handleSelectRole = (r) => {
    setRole(r)
    setScreen('login')
  }

  const handleLogin = (u) => {
    setUser(u)
    setScreen('shell')
  }

  const handleBack = () => {
    setScreen('portada')
    setRole(null)
    setUser(null)
  }

  return (
    <>
      {screen === 'portada' && <Portada onSelectRole={handleSelectRole} />}
      {screen === 'login' && (
        <Login role={role} onLogin={handleLogin} onBack={handleBack} />
      )}
      {screen === 'shell' && user && (
        <AppShell user={user} onLogout={handleBack} />
      )}
    </>
  )
}

export default App

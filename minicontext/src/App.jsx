import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
const App = () => {
  return (
    <UserContextProvider>
      <h2>Welcome to context API</h2>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
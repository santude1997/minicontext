import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h2>Hii</h2>
    </UserContextProvider>
  )
}

export default App
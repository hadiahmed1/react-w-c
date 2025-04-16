import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login.jsx';
import Info from './components/Info.jsx';

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Info/>
    </UserContextProvider>
  )
}

export default App

import RestrictedPage from './components/RestrictedPage';
import './App.css';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = "Ian Kuntz"

  const Login = () => {
    setIsLoggedIn(true)
  }
  
  const Logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout}/>
    </div>
  );
}

export default App;

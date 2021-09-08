import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import RestrictedPage from './Components/RestrictedPage';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Ian Kuntz";

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <RestrictedPage
          user={user}
          isLoggedIn={isLoggedIn}
          Login={Login}
          Logout={Logout}
        />

      </header>
    </div>
  );
}

export default App;

import "./style.css"
function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
    return (

      <>
        {isLoggedIn ? (
          <div className="Login">
            <h1>Welcome, {user}</h1>
            <button onClick={Logout}>Logout</button>
          </div>

        ) : (

          <div className="Logout">
            <h1>you don't have access to this page.</h1>
            <button onClick={Login}>Login</button>
          </div>

        )}
      </>
    )
  }
  
  export default RestrictedPage;
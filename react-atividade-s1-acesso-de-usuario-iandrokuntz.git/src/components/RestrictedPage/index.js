
const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {

    return(
        <div>
            {isLoggedIn? (
                <div>
                    <h1>Welcome, {user}</h1>
                    <button onClick={Logout}>Logout</button>
                </div>
                
            ): (
                <div>
                    <h1>You don't have an access</h1>
                    <button onClick={Login}>Login</button>
                </div>
            )}
        </div>
    )
}

export default RestrictedPage
import React ,{useState} from 'react'


function LogIn() {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[LoggedIn, setLoggedIn]=useState(false)

    const handleEmailInput = (event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }
    const handleLogIn=(event)=>{
        event.preventDefault()
        if(email==="ben@gmail.com" && password==="0123")
        setLoggedIn(true)
    }

     const handleLogOut=(event)=>{
        setLoggedIn(false)
    }
    return (
        <div>
            {LoggedIn
            ?
            <>
            <h1>Try Again</h1>
            <button onClick={handleLogOut}>Logout</button>
            </>
            :
            <>
            <form>
            <label>Email:</label>
            <input type =" email" value={email} onChange={handleEmailInput}/>

            <label>Password:</label>
            <input type ="password" value={password} onChange={handlePasswordInput}/>

            <br></br>
            <button onClick={handleLogIn} > LogIn</button>
            </form>
            </>}
        </div>
    )
}

export default LogIn
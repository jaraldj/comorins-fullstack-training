import React,{useState} from "react"

function LoginCred(){
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <>
        <form>
            <div className="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="text" readonly className="form-control-plaintext" onKeyUp={(e)=>setEmail(e.target.value)} id="staticEmail"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" onKeyUp={(e)=>setPassword(e.target.value)} id="inputPassword"/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={loginCheck} type="button">Login</button>
        </form>
        </>
    ) 
         
}
const loginCheck = (props) =>{
    let check = (props.email === "jara@gmail.com" && props.password === "1234") ? console.log("Login") : console.log("No")
}  

export default LoginCred
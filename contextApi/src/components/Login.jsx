import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
const Login = () => {
    const [name, setName] = useState("");
    const { setUser } = useContext(UserContext);
    return (
        <form >
            <input type="text" placeholder="enter name" onChange={e=>setName(e.target.value)}/>
            <button type="button" onClick={()=>setUser({name})}>Submit</button>
        </form>
    );
}

export default Login;
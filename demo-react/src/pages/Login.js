import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Login</h1>
            <input type="text"/>
            <input type="text"/>
            <button onClick={()=> {
                navigate('home');
            }}>Login</button>
            <Link to={'/register'}>Register</Link>
        </>
    )
}
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";

function App() {
    return (
        <>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<Product/>}/>
                    <Route path={'orders'} element={<Orders/>}/>
                </Route>
                <Route path={'register'} element={<Register/>}></Route>
            </Routes>
        </>
    );
}

export default App;
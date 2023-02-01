import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/login.css';


export const Login = ({login}) =>{
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ correo: "", contraseña: "" });


    return(
        <section className='login'>
            <h1>Bienvenido</h1>
            <div className='line'></div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div class="container">
                <input type="text" placeholder="Escribe tu usuario" name="uname" required onChange={(e) => HandleChange(e)}/>

                <input type="password" placeholder="Escribe tu contraseña" name="psw" required onChange={(e) => HandleChange(e)}/>

                <button type="submit" onClick={()=>{login(userCredentials)}}>Login</button>
                </div>
            </form>
        </section>
    )
}


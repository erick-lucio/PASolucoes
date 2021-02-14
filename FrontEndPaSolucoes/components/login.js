import Head from 'next/head'
import React, { useState } from 'react';


const userServices = require("../services/users")

export default function Login(props) {
  const [urlData, setUrlData] = useState("")
  
  const login = async ()=>{    
    var login = document.getElementById("loginInput").value.trim()
    var senha = document.getElementById("senhaInput").value.trim()
    document.getElementById("textErrorMessage").value = "Usuario Não Encontrado!"
    
    
    try {
      var alo = await userServices.getAll()
 
    } catch (error) {
      
    }

  }
  return (
    <div className="main">
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
    <div className="loginComponent_login">
        <h1>Olá</h1>
        <h2>Para se manter conectado faça o login</h2>
        <form action="">

            <p>Usuario</p>
            <input type="text" name="" placeholder="Insira seu e-mail"></input>

            <p>Senha</p>
            <input type="password" name="" placeholder="Insira sua senha"></input>
            <input type="submit" name="" value="Login" onClick={()=>props.setLogged(1)}></input>
            <input type="submit" name="" value="Login" onClick={()=>alert(process.env.NEXT_PUBLIC_NODE_ENV)}></input>
            
            <a href="#" className="forget_password">Esqueceu sua senha?</a><br/>            

        </form>
    </div>

    </div>     
  )
}

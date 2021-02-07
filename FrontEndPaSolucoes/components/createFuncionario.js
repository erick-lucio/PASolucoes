import Head from 'next/head'
import React, { useState } from 'react';


const userServices = require("../services/users")

export default function createFuncionario(props) {
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
    <div className="componentFuncionarioMain">
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className="createFuncionarioComponent_create">
      <input value="X" type="submit" className="funcionarioComponentClose" onClick={()=>props.setcomponentFuncionario(0)}/>
        <h1>Cadastro <br/> de <br/> Funcionário</h1>
        <form action="">

            <p>Nome</p>
            <input type="text" name="" placeholder="Insira seu nome"/>

            <p>Cnpj</p>
            <input type="text" name="" placeholder="Insira seu cnpj"/>

            <p>E-mail</p>
            <input type="text" name="" placeholder="Insira seu e-mail"/>

            <p>Senha</p>
            <input type="text" name="" placeholder="Insira seu senha"/>

            <p>
                É um administrador?
                <input type="checkbox" name=""placeholder="Sim"/>
            </p>
            

          
            <input type="submit" name="" value="Cadastrar"/>
        </form>
        </div>
    </div>     
  )
}

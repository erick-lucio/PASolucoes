import Head from 'next/head'
import React, { useState } from 'react';


const userServices = require("../services/users")

export default function createAtendimento(props) {
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

  //props.setComponentCliente(0)
  return (
    <>
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className="create_atendimento_container">
        <div className="create_atendimento_main_div">
          <div className="create_atendimento_title">
            <div>
              Novo Atendimento
            </div>
            <input type="submit" className="create_atendimento_cancel" onClick={()=>props.setShowAtendimentoPopUp(0)} value="Cancelar"></input>

          </div>
          <div >

          </div>
        </div>
      </div>
    </>     
  )
}

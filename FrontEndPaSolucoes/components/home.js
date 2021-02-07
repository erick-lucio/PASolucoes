import Head from 'next/head'
import React, { useState } from 'react';
import Router from 'next/router';
import ComponentCreateCliente from '../components/createCliente'
import ComponentCreateFuncionarios from '../components/createFuncionario'

const userServices = require("../services/users")
const emailServices = require("../services/email")
//const emailServices 

export default function Home(props) {
  const [urlData, setUrlData] = useState()
  const [componentCliente, setComponentCliente] = useState()
  const [componentFuncionario, setcomponentFuncionario] = useState()
  
  const sendEmail = async ()=>{
    
    var sendTo = document.getElementById("text_email_send").value
    if(sendTo != "" ){
      emailServices.sendEmailTeste(sendTo)
      alert("Email Enviado para : " + sendTo)
    }
    
  }
  return (
    <div className="main">
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      {componentFuncionario == 1? <ComponentCreateFuncionarios setcomponentFuncionario={setcomponentFuncionario}/>: ""}
      {componentCliente == 1? <ComponentCreateCliente setComponentCliente={setComponentCliente}/>: ""}
        <div className="home_container">
            <div className="home_row1 row">
                <div className="home_col1 col">
                  <div className="div_atendimento">
                    <input
                        type="text" 
                        placeholder="CNPJ"
                        className="ini_Atendimento"/>
                      <input
                        type="submit" 
                        value="Iniciar Atendimento"/> 
                  </div>
                    <div className="row div_buttons">
                      <input type="submit" value="Relatorios" onClick={() => Router.push('/relatorios')}/>
                      <input type="submit" value="Adicionar Funcionario" onClick={()=>setcomponentFuncionario(1)}/>
                      <input type="submit" value="Adicionar Cliente"onClick={()=>setComponentCliente(1)}/>
                    </div>
              </div>

            </div>
            <div className="row">
              <div className="col div_email_teste">
                <div>
                  <p>Digite seu Email</p>
                  <input type="text" placeholder="Insira seu email" id="text_email_send"/>
                  <input type="submit" value="Enviar Email Teste" onClick={()=>sendEmail()}/>
                </div>
              </div>
            </div>
        </div>

    </div>     
  )
}

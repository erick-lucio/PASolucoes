import Head from 'next/head'
import React, { useState } from 'react';
import Router from 'next/router';
import ComponentCreateCliente from '../components/createCliente'
import ComponentCreateFuncionarios from '../components/createFuncionario'

const userServices = require("../services/users")
const emailServices = require("../services/email")
//const emailServices 
import Main_Content from './main_content'
import Header from './header'


export default function Home(props) {
  const [urlData, setUrlData] = useState()
  const [componentCliente, setComponentCliente] = useState()
  const [componentFuncionario, setcomponentFuncionario] = useState()
  const [pagevar, setPagevar] = useState()
  
  const sendEmail = async ()=>{
    
    var sendTo = document.getElementById("text_email_send").value
    if(sendTo != "" ){
      emailServices.sendEmailTeste(sendTo)
      alert("Email Enviado para : " + sendTo)
    }
    
  }
  return (
    <div className="main">
      <Head >
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Header setLogged={props.setLogged}/>
      <Main_Content/>
    

    </div>     
  )
}

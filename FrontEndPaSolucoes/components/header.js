import Head from 'next/head'
import React, { useState } from 'react';


const userServices = require("../services/users")

import PopUpAtendimento from '../components/createAtendimento.js'

export default function Header(props) {
  const [showAtendimentoPopUp, setShowAtendimentoPopUp] = useState()

  
  return (
    <>
        <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
        </Head>
        <div className="header_container">
            {showAtendimentoPopUp ==1 ?<PopUpAtendimento setShowAtendimentoPopUp={setShowAtendimentoPopUp}/>:""}
            <div className="header_div_left">
              <div className="header_logo_div">
                  Pa Solucões
              </div>
              <div className="header_input_div">
                  <input type="submit" value="Novo Atendimento" onClick={()=>setShowAtendimentoPopUp(1)}></input>
              </div>
            </div>

            <div className="header_input_sair_div">
              <input type="submit" value="Sair" onClick={()=>props.setLogged(0)}></input>
            </div>
        </div>
    </>
     
  )
}

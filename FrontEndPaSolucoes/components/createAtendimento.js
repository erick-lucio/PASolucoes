import Head from 'next/head'
import React, { useState } from 'react';


const userServices = require("../services/users")

export default function createAtendimento(props) {
  const [urlData, setUrlData] = useState("")
  

  function onlyOne(checkbox,radioName) {
    var radios = radios = document.getElementsByName('radio_'+radioName)

    radios.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
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
            <input type="submit" className="create_atendimento_cancel" onClick={()=>props.setShowAtendimentoPopUp(0)} value="Fechar"></input>
          </div>
          <div className="create_atendimento_content">
            <form>
              <div className="create_atendimento_content_cliente_div">
                <label>Cliente:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'cliente')} name="radio_cliente"></input>
                  <label>Cliente 1</label>
                </div>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'cliente')} name="radio_cliente"></input>
                  <label>Cliente 1</label>
                </div>                
              </div>
              <div className="create_atendimento_content_atendimento_div">
                <label>Tipo de Atendimento:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento"></input>
                  <label>Atendimento</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento"></input>
                  <label>Atendimento</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento"></input>
                  <label>Atendimento</label>
                </div> 
              </div>
              <div className="create_atendimento_content_prioridade_div">
                <label>Prioridade:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'prioridade')} name="radio_prioridade"></input>
                  <label>Normal</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'prioridade')} name="radio_prioridade"></input>
                  <label>Normal</label>
                </div> 
              </div>
              <div className="create_atendimento_content_contrato_div">
                <label>Tipo Contrato</label> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'contrato')} name="contrato"></input>
                  <label>Normal</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'contrato')} name="contrato"></input>
                  <label>tipo 1</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'contrato')} name="contrato"></input>
                  <label>tipo 2</label>
                </div> 
                {true?"Valor avulso":""}
              </div>
              <div className="create_atendimento_content_sistema_div">
                <label>Tipo sistema</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'sistema')} name="sistema"></input>
                  <label>Sistema 1</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'sistema')} name="sistema"></input>
                  <label>Sistema 2</label>
                </div> 
              </div>
              <div className="create_atendimento_content_pendencia_financeira_div">
                <label>Pendencia financeira</label>
                <input type="text" value=""></input>
              </div>              
            </form>
          </div>
          <div className="create_atendimento_create_button_div">
            <input type="submit" value="Criar Atendimento" className="create_atendimento_create_button"></input>
          </div>
        </div>
      </div>
    </>     
  )
}

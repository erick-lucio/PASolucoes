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
  function createAtendimento(){ 
    var clienteRadio = document.getElementsByName("radio_cliente")    
    var cliente = null
    clienteRadio.forEach(item => {
      if(item.checked == true){
        cliente = item.value.toString()
        return;
      }
    });
    var atendimentoRadio = document.getElementsByName("radio_atendimento")   
    var atendimento = null  
    atendimentoRadio.forEach(item => {
      if(item.checked == true){
        atendimento = item.value.toString()
        return;
      }
    });
    var prioridadeRadio = document.getElementsByName("radio_prioridade")
    var prioridade = null     
    prioridadeRadio.forEach(item => {
      if(item.checked == true){
        prioridade = item.value.toString()
        return;
      }
    });
    var contratoRadio = document.getElementsByName("radio_contrato")     
    var contrato = null
    contratoRadio.forEach(item => {
      if(item.checked == true){
        contrato = item.value.toString()
        return;
      }
    });
    var sistemaRadio = document.getElementsByName("radio_sistema")     
    var sistema = null
    sistemaRadio.forEach(item => {
      if(item.checked == true){
        sistema = item.value.toString()
        return;
      }
    });
    var valorAvulso = document.getElementById("create_atendimento_content_contrato_valor_avulso").value
    if(!cliente || !atendimento || !prioridade || !contrato || !sistema){
      console.log("Informe Todos os Campos")
    }else{
      console.log(cliente)
      console.log(atendimento)
      console.log(prioridade)
      console.log(contrato)
      console.log(sistema)
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
            <input type="submit" className="create_atendimento_cancel" onClick={()=>props.setShowAtendimentoPopUp(0)} value="Fechar"></input>
          </div>
          <div className="create_atendimento_content">
            <form>
              <div className="create_atendimento_content_cliente_div">
                <label className="create_atendimento_content_titles">Cliente:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'cliente')} name="radio_cliente" value="Cliente 1"></input>
                  <label>Cliente 1</label>
                </div>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'cliente')} name="radio_cliente" value="Cliente 2"></input>
                  <label>Cliente 2</label>
                </div>                
              </div>
              <div className="create_atendimento_content_atendimento_div">
                <label className="create_atendimento_content_titles">Tipo de Atendimento:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento" value="Atend1"></input>
                  <label>Atendimento</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento" value="Atend2"></input>
                  <label>Atendimento</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'atendimento')} name="radio_atendimento" value="Atend3"></input>
                  <label>Atendimento</label>
                </div> 
              </div>
              <div className="create_atendimento_content_prioridade_div">
                <label className="create_atendimento_content_titles">Prioridade:</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'prioridade')} name="radio_prioridade" value="prioridade normal"></input>
                  <label>Normal</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'prioridade')} name="radio_prioridade" value="prioridade maxima"></input>
                  <label>maxima</label>
                </div> 
              </div>
              <div className="create_atendimento_content_contrato_div">
                <label className="create_atendimento_content_titles">Tipo Contrato</label> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'contrato')} name="radio_contrato" value="contrato 1"></input>
                  <label>contrato 1</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'contrato')} name="radio_contrato" value="contrato 2"></input>
                  <label>contrato 2</label>
                </div> 
                {true?
                  <input type="text"  placeholder="Valor Avulso" id="create_atendimento_content_contrato_valor_avulso"></input>
                :""}
              </div>
              <div className="create_atendimento_content_sistema_div">
                <label className="create_atendimento_content_titles">Tipo sistema</label>
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'sistema')} name="radio_sistema" value="sistema 1"></input>
                  <label>Sistema 1</label>
                </div> 
                <div className="create_atendimento_content_radio_div">
                  <input type="radio" onClick={onlyOne(this,'sistema')} name="radio_sistema" value="sistema 2"></input>
                  <label>Sistema 2</label>
                </div> 
              </div>
              <div className="create_atendimento_content_pendencia_financeira_div">
                <label className="create_atendimento_content_titles">Pendencia financeira</label>
                <input type="text"  placeholder="Pendencia Financeira"></input>
              </div>              
            </form>
          </div>
          <div className="create_atendimento_create_button_div">
            <input type="submit" value="Criar Atendimento" className="create_atendimento_create_button" onClick={()=>createAtendimento()}></input>
          </div>
        </div>
      </div>
    </>     
  )
}

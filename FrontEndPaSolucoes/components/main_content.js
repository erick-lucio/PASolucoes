import Head from 'next/head'
import React, { useState } from 'react';


import Sidebar from './sidebar'
import GerentePanel from './gerente_panel'
import FuncionarioPanel from './panel_funcionario_info'
import ClientePanel from './panel_cliente_info'

export default function Main_Content(props) {
  const [pagevar, setPagevar] = useState();
  function getComponent(){
    switch (pagevar) {
      case 1:
        return <GerentePanel/>
      case 2:
        return <FuncionarioPanel/>
      case 3:
        return <ClientePanel/>
    }
  };
  
  return (
    <>
        <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
        </Head>
        <div className="main_content_container">            
            <Sidebar setPagevar={setPagevar} pagevar={pagevar}/>
            {getComponent()}
            
        </div>
    </>
     
  )
}

import Head from 'next/head'
import React, { useState } from 'react';
import dashboardIcon from '../assets/icons/baseline_dashboard_black_24dp.png'
import funcionarioIcon from '../assets/icons/baseline_people_black_24dp.png'
import ClienteIcon from '../assets/icons/baseline_people_alt_black_24dp.png'


export default function gerente_panel(props) {


  
  return (
    <>
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className="gerente_panel_container">
        <div className="gerente_panel_dashboard_div">
          <div>
            DashBoard
          </div>
          <div>
            input data
          </div>
        </div>
        <div className="gerente_panel_tabs_div">
          <div className="gerente_panel_tabs_div_itens">
            <div>
              Serviços em aberto
            </div>            
          </div>
          <div className="gerente_panel_tabs_div_itens">
            <div>
              Agentes
            </div>            
          </div>
          <div className="gerente_panel_tabs_div_itens">
            <div>
              Clientes
            </div>            
          </div>
        </div>
        <div className="gerente_panel_services_div">
            <div className="gerente_panel_services_title">
               <div className="gerente_panel_services_left_title">
                Serviços
               </div>
               <div className="gerente_panel_services_right_title">

               </div>
            </div> 
            <div className="gerente_panel_services_table_div">
              <table className="gerente_panel_services_table" CELLPADDING="6">
                <tr className="gerente_panel_services_fixed_tr">
                  <td className="gerente_panel_service_fixed_th_item">Numero</td>
                  <td className="gerente_panel_service_fixed_th_item">Client</td>
                  <td className="gerente_panel_service_fixed_th_item">Agente</td>
                  <td className="gerente_panel_service_fixed_th_item">Status</td>
                  <td className="gerente_panel_service_fixed_th_item">Ultima Alteração</td>
                </tr>
                <tr>
                  <td className="gerente_panel_service_fixed_td_item">0</td>
                  <td className="gerente_panel_service_fixed_td_item">0</td>
                  <td className="gerente_panel_service_fixed_td_item">0</td>
                  <td className="gerente_panel_service_fixed_td_item">0</td>
                  <td className="gerente_panel_service_fixed_td_item">0</td>
                </tr>
              </table>
            </div>

        </div>
      </div>
    </>    
  )
}

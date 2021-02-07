import Head from 'next/head'
import React, { useState } from 'react';
import ComponentGraficoBarra from '../../components/relatorios/graficoBarra'
import ComponentGraficoBarraVertical from '../../components/relatorios/graficoBarraVertical'
import ComponentGraficoPizza from '../../components/relatorios/graficoPizza'
import ComponentGraficoLinhas from '../../components/relatorios/graficoLinhas'


export default function Relatorios(props) {
  const [grafico, setGrafico] = useState("")

  return (
    <> 
    <div>
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className="main">
        <div className="row">
          <div className="col col_inputs">
            <input type="submit" value="Grafico Barras" onClick={()=>setGrafico("barras")}/>
            <input type="submit" value="Grafico Linhas" onClick={()=>setGrafico("linhas")}/>
            <input type="submit" value="Grafico Barras Verticais" onClick={()=>setGrafico("barrasVerticais")}/>
            <input type="submit" value="Grafico Pizza" onClick={()=>setGrafico("pizza")}/>
          </div>
          <div className="relatorioFiltros">
            <div className="row relatorioFiltrosRow">
              <p>Filtros</p>
              <div className="col relatorioFiltrosCol">
                <p> Data Inicial :</p>
                <input type="date" className="relatorioDateInput"/>
                <p> Data Final :</p>
                <input type="date" className="relatorioDateInput"/>
              </div>
              <div className="col relatorioFiltrosCol">
                <p>Funcionario :</p>
                <select className="select_relatorios">
                  <option defaultValue="true">Todos</option>
                  <option >Erick</option>
                </select>
                <p>Cliente :</p>
                <select className="select_relatorios">
                  <option defaultValue="true">Todos</option>
                  <option >Erick</option>
                </select>
              </div>
              <div className="col relatorioFiltrosCol">
                <input type="submit" value="Filtrar"/>
                <input type="submit" value="Enviar Relatorio por Email"/>
              </div>
            </div>
          </div>
          <div className="relatorioContainer">
            {grafico == "barras"?<ComponentGraficoBarra/>:""}
            {grafico == "linhas"?<ComponentGraficoLinhas/>:""}
            {grafico == "barrasVerticais"?<ComponentGraficoBarraVertical/>:""}
            {grafico == "pizza"?<ComponentGraficoPizza/>:""}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

import Head from 'next/head'
import React, { useState } from 'react';
import grafico from '../../assets/imgs/barraVerticalTemp.png'


export default function GraficoBarraVertical(props) {
  
  return (
    <> 
        <div className="div_grafico_container">
            <img src={grafico} width={"60%"}/>
        </div>
    </>
  )
}

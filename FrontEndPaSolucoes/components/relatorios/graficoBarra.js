import Head from 'next/head'
import React, { useState } from 'react';
import grafico from '../../assets/imgs/barraTemp.jpg'


export default function GraficoBarra(props) {
  
  return (
    <> 
        <div className="div_grafico_container">
            <img src={grafico} width={"60%"}/>
        </div>
    </>
  )
}

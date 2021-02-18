import Head from 'next/head'
import React, { useState } from 'react';
import dashboardIcon from '../assets/icons/baseline_dashboard_black_24dp.png'
import funcionarioIcon from '../assets/icons/baseline_people_black_24dp.png'
import ClienteIcon from '../assets/icons/baseline_people_alt_black_24dp.png'


export default function Sidebar(props) {

  function changePanel(value){
    props.setPagevar(value)
    var iconsClass = document.getElementsByClassName("sidebar_menu_icon_div");
    var classId = "sidebar_icon_" + value

    
    for (var i = 0; i < iconsClass.length; i++) {
      iconsClass[i].style.backgroundColor = "inherit";
    } 
    document.getElementById(classId).style.backgroundColor = "#fbfdeeb6";
  }

  
  return (
    <>
      <Head>
        <title>Projeto PA</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className="sidebar_container">
        <div className="sidebar_menu_icon_div" id="sidebar_icon_1">
          <img src={dashboardIcon} className="sidebar_icons" onClick={()=>changePanel(1)}></img>
        </div>
        <div className="sidebar_menu_icon_div" id="sidebar_icon_2">
          <img src={funcionarioIcon} className="sidebar_icons"  onClick={()=>changePanel(2)}></img>
        </div>
        <div className="sidebar_menu_icon_div" id="sidebar_icon_3">
          <img src={ClienteIcon} className="sidebar_icons" onClick={()=>changePanel(3)}></img> 
        </div>


      </div>
    </>    
  )
}

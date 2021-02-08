import Head from 'next/head'
import React, { useState } from 'react';
import LoginComponent from '../components/login'
import HomeComponent from '../components/home'
//


const userServices = require("../services/users")

export default function Index(props) {
  const [urlData, setUrlData] = useState("")
  const [logged, setLogged] = useState(0)
  var asds = 1
  
  const login = async ()=>{    
    var login = document.getElementById("loginInput").value.trim()
    var senha = document.getElementById("senhaInput").value.trim()
    document.getElementById("textErrorMessage").value = "Usuario Não Encontrado!"
    
    
    try {
      var alo = await userServices.getAll()
 
    } catch (error) {
      
    }

  }
  return (
    <> 
    {logged == 1?<HomeComponent setLogged={setLogged}/> :<LoginComponent setLogged={setLogged}/>}
    </>
  )
}

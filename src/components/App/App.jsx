import React,  { useState } from 'react';
import {  Route, withRouter} from 'react-router-dom';

import './App.css';

import Login from '../Login/Login'
import Account from '../Account/Account';
const hostName=`http://urfuhack.locomo-net.ru`;
function App({history}) {
    const [token, setToken] = useState(null);

    let  getToken = async (tok)=>{
        console.log(tok);
        await setToken(tok);
        history.push('/account');
    }

    async function download(){
    let url=`${hostName}/user`;
    let response = await fetch(url,{
            method:"POST",
            headers: {
                Authorization: token,
                'Accept': 'application/json',
                "Content-Type":'application/json'
            }});
    if (response.ok) {
        let json = await response.json();
        console.log(json);
    } else
        alert("Ошибка HTTP: " + response.status);
}

  return (
        <div className="App">
            <Route exact path="/" render={()=><Login func={getToken}/>}/>
            <Route path="/account" render={()=><Account token={token}/>}/>
        </div>
  );
}

export default withRouter(App);

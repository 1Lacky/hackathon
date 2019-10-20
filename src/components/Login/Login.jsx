import React,  { useState, useEffect } from 'react';


import LoginPhone from '../LoginPhone/LoginPhone';

import SymbolLogo from './logo_anim.svg';
import TextLogo from './logo_motiv.svg';
import './Login.css';

function Login({func}) {


  return (
    <div className="login">
        <div className="logo">
			<img src={SymbolLogo} alt="Анимировнные стрелочки" className="anim"/>
            <img src={TextLogo} alt="Мотив Букавы" className="motiv"/>
		</div>
        <div className="loginMethod">
            <div className="tab sms " >Вход по SMS</div>
            <div className="tab password active-tab" >По номеру и паролю</div>
        </div>
        <LoginPhone auth={func}/>
			<a href="tel:*205#" className="getPhone">Напомнить номер</a>
    </div>
  );
}

export default Login;

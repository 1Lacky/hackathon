import React,  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Account.css';

const hostName=`https://urfuhack.herokuapp.com/`;
function Account({token}) {
    let [userData, setUserData]=useState(null);

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
        console.log(json)
        setUserData(json);
    } else
        alert("Ошибка HTTP: " + response.status);
}
useEffect(() => {
    download();
},[]);
  return (
      (userData===null)?<span>Загрузка</span>:
        <div className="account">
            <div className="news">
                <div className="newsItem newsItemOne">
                    Узнай характер твоего номера <br/>🙀🙀🙀 <br/> Проверить
                </div>
                <div className="newsItem newsItemTwo">
                    Дарим <br/>
                    1 000 ₽ при покупке телефона<br/>
                    Перейти в магазин 🛒
                </div>
                <div className="newsItem newsItemFree">
                        Какие номера считают красивыми?<br/>Разберем сегодня📱
                </div>
            </div>
            <div className="AccountInfor">
                <div className="AccountNumbers">
                    <div className="AccountTitle">Баланс</div>
                    <div className="AccountNumber">{"+"+userData.phoneNumber}</div>
                </div>
                <div className="AccountMoneys">
                    <div className="AccountMoney">{userData.money+" ₽"}</div>
                    <div className="MoneyTitle">Пополнить</div>
                </div>
                <div className="AccountTest">
                    <div className="AccountText">
                    А какой характер у твоего номера?
                    Элегантный, спокойный или дерзкий?
                    </div>
                    <div className="orngBtn">Посмотреть</div>
                </div>
                <div className="AccountTarif">

                </div>
            </div>
        </div>

  );
}

export default Account;

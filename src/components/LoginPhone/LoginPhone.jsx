import React,  { useState} from 'react';
import './LoginPhone.css';


const hostName=`https://urfuhack.herokuapp.com/`;
function LoginPhone({auth}) {
    const [tel, setTel] = useState("+7");
    const [pas, setPas] = useState("");

    let handleSubmit=(event)=>{
        event.preventDefault();
        login(tel.slice(1), pas)
        setTel("+7");
        setPas("");
    }

    let handleChangeTel=(event)=>{
        setTel(event.target.value);
    }

    let handleChangePas=(event)=>{
        setPas(event.target.value);
    }

    async function login(tel, pas){
    let url=`${hostName}/login?auth=password&phone=${tel}&pass=${pas}`;
    let response = await fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type":'application/json'
            }});
    if (response.ok) {
        let json = await response.json();
        auth(json.authorization);
    } else
        alert("Ошибка HTTP: " + response.status);
}

  return (
		<form className="loginFrom" onSubmit={handleSubmit}>
            <span className="labelInput">Введите номер телефона</span>
            <input className="phoneInput" type="tel" name="telefon" value={tel} onChange={handleChangeTel}/>
            <span className="labelInput">Введите пароль</span>
            <input className="phoneInput" type="password" name="password" value={pas} onChange={handleChangePas}/>
            <input className="nextButton" type="submit" value="Далее"/>
            <span className="forgotPassword">Забыли пароль?</span>
        </form>
  );
}

export default LoginPhone;

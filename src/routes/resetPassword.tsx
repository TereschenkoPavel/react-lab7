import React, {useState} from 'react';
import '../css/index.css';
import ReactDOM from 'react-dom/client';


export default function ResetPassword(){
    
  const [email,setEmail]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  
  const [emailError,setEmailError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  
  const handleInput = (event) =>{
    const {type,name,value} = event.target;
    setEmail(value);
  }
  
  const handleSubmit = (event) =>{
    if(emailError != "") return;
    const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    const passwordLength = 10
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) 
    {
      newPassword+= characters.charAt(Math.floor(Math.random()*characters.length));
    }
    let user = localStorage.getItem(email);
    localStorage.removeItem(email);
    localStorage.setItem(email,user?.split('|')[0]+'|'+newPassword)
    alert("ваш новый пароль: "+newPassword)
    event.preventDefault();
  }

  const emailValidate = () =>{
    if(email == '') {setEmailError('поле обязательно!'); return;}
    if(!/^[a-zA-Zа-яА-Я0-9.%_+-]+@[a-zA-Zа-яА-Я0-9._-]+\.[a-zA-Zа-яА-Я]{2,}$/.test(email))
    {setEmailError("email не соответствует формату электронной почты!"); return;}
    let founEmail = false;
    for(let key of Object.keys(localStorage)){
      if (key == email)
      {founEmail = true;}
    }
    if(founEmail == false){
      setEmailError("Аккаунт не найден");
      return;
    }
    setEmailError('');
  }

    return <div class='signin'>
      <form onSubmit={handleSubmit} novalidate="novalidate">
        <h1>Восстановление пароля</h1>
        <label>
          e-mail <br />
          <input type="email" class={emailError !='' ? 'invalid' : ''} name="email" value = {email} onChange = {handleInput} placeholder ="введите электронную почту" onBlur={emailValidate}/>
          <div class = "error" visible = {emailError !=''} >{emailError}</div>
        </label>

        <button type="submit">Восстановить</button>
        <a href="http://localhost:3000/sign-up">Зарегистрироваться</a>
        <a href="http://localhost:3000/sign-in">Войти</a>
      </form>
    </div>
  }

import React, {useState} from 'react';
import '../css/index.css';
import ReactDOM from 'react-dom/client';

export default function Signup(){
  const [name,setName]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [email,setEmail]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [password,setPassword]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [passwordVerif,setPasswordVerif]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");

  const [nameError,setNameError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [emailError,setEmailError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [passwordError,setPasswordError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [passwordVerifError,setPasswordVerifError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");

  const handleInput = (event) =>{
    const {type,name,value} = event.target;
    switch (name){
      case 'name':{
        setName(value); break;}
      case 'email':{
        setEmail(value); break;}
      case 'password':{
        setPassword(value); break;}
      case 'passworfVerif':{
        setPasswordVerif(value); break;}
    }
  }
  const handleSubmit = (event) =>{//проверить на валидироавнность всех полей
    event.preventDefault();
  }
  const nameValidate = () =>{ //добавить валидацию
    if(name == '') {setNameError('поле обязательно!')}
  }
    return <div class='signup'>
      <form onSubmit={handleSubmit} novalidate="novalidate">
        <h1>Регистрация</h1>
        <label>
          Имя <br />
          <input type="text" class={nameError !='' ? 'invalid' : ''} name="name" value = {name} onChange = {handleInput} placeholder = "введите имя" onBlur ={nameValidate}/>
          <div class = "error" visible = {nameError !=''} >{nameError}</div>
        </label>
        <label>
          e-mail <br />
          <input type="email" name="email" value = {email} onChange = {handleInput} placeholder ="введите электронную почту"/>
        </label>
        <label>
          пароль <br />
          <input type="password" name="password" value ={password} onChange = {handleInput} placeholder="введите пароль"/>
        </label>
        <label>
          подтвердите пароль <br />
          <input type="password" name="passwordVerif" value={passwordVerif} onChange = {handleInput} placeholder="подтвердите пароль"/>
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  }

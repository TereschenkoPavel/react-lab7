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
      case 'passwordVerif':{
        setPasswordVerif(value); break;}
    }
  }
  const handleSubmit = (event) =>{//проверить на валидироавнность всех полей
    if(nameError =='' && emailError =='' && passwordError =='' && passwordVerifError =='')
      {
        localStorage.setItem(email,name+"|"+password)
      }
  }
  const nameValidate = () =>{ 
    if(name == '') {setNameError('поле обязательно!'); return;}
    if(!/^[a-zA-Zа-яА-Я]+(\s[a-zA-Zа-яА-Я]+)*$/.test(name)) 
      {setNameError('поле должно содержать только буквы (можно разделять одним пробелом)'); return;}
    if(name.length <2){setNameError("минимальная длина поля: 2!");return;}
    if(name.length >50){setNameError("максимальная длина поля: 50!");return;}
    setNameError('');
  }
  const emailValidate = () =>{
    if(email == '') {setEmailError('поле обязательно!'); return;}
    if(!/^[a-zA-Zа-яА-Я0-9.%_+-]+@[a-zA-Zа-яА-Я0-9._-]+\.[a-zA-Zа-яА-Я]{2,}$/.test(email))
    {setEmailError("email не соответствует формату электронной почты!"); return;}
    for(let key of Object.keys(localStorage)){
      if (key == email)
      {setEmailError("данный email уже используется!"); return;}
    }
    setEmailError('');
  }
  const passwordValidate = () =>{
    if(password == '') {setPasswordError('поле обязательно!'); return;}
    if(password.length < 8){setPasswordError('минимальная длина паролья 8 символов!'); return;}
    if(!(/[A-ZА-Я]/.test(password)&&
        /[a-zа-я]/.test(password)&&
        /[0-9]/.test(password)))
      {setPasswordError('пароль должен содержать заглавные и строчные буквы, а также цифры!'); return;}
    if(/\s/.test(password)){setPasswordError('пароль не должен содержать пробелы!'); return;}
    if(password == passwordVerif)    
      setPasswordVerifError('');
    setPasswordError('');
  }
  const passwordVerifValidate = () =>{
    if(passwordVerif == '') {setPasswordVerifError('поле обязательно!'); return;}
    if(passwordVerif != password){setPasswordVerifError('пароль должен совпадать!!'); return;}
    setPasswordVerifError('');
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
          <input type="email" class={emailError !='' ? 'invalid' : ''} name="email" value = {email} onChange = {handleInput} placeholder ="введите электронную почту" onBlur={emailValidate}/>
          <div class = "error" visible = {emailError !=''} >{emailError}</div>
        </label>
        <label>
          пароль <br />
          <input type="password" class={passwordError !='' ? 'invalid' : ''} name="password" value ={password} onChange = {handleInput} placeholder="введите пароль" onBlur = {passwordValidate}/>
          <div class = "error" visible = {passwordError !=''} >{passwordError}</div>
        </label>
        <label>
          подтвердите пароль <br />
          <input type="password" class={passwordVerifError !='' ? 'invalid' : ''} name="passwordVerif" value={passwordVerif} onChange = {handleInput} placeholder="подтвердите пароль" onBlur = {passwordVerifValidate}/>
          <div class = "error" visible = {passwordVerifError !=''} >{passwordVerifError}</div>
        </label>
        <button type="submit">Зарегистрироваться</button>
        <a href="http://localhost:3000/sign-in">у меня есть аккаунт</a>
      </form>
    </div>
  }

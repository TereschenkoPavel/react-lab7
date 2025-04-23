import React, {useState} from 'react';
import '../css/index.css';
import ReactDOM from 'react-dom/client';


export default function Signin(){
    
  const [email,setEmail]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [password,setPassword]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  
  const [hidePass, setHidePass]:[boolean,React.Dispatch<React.SetStateAction<boolean>>] = useState(true);

  const [emailError,setEmailError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [passwordError,setPasswordError]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("");
  
  const handleInput = (event) =>{
    const {type,name,value} = event.target;
    switch (name){
      case 'email':{
        setEmail(value); break;}
      case 'password':{
        setPassword(value); break;}
    }
  }
  const handleSubmit = (event) =>{//проверить на валидироавнность всех полей
    if( emailError !='' || passwordError !='')
      {
        return;
      }
    let user = localStorage.getItem(email);
    if(user == null)
      {setEmailError("Почта пользователя не найдена");
        return;}
    if(user.split('|')[1] != password)
    {
      setPasswordError("Неверный пароль");
      return;
    }
    alert('вход успешен!');
    event.preventDefault();
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
    setPasswordError('');
  }

    return <div class='signin'>
      <form onSubmit={handleSubmit} novalidate="novalidate">
        <h1>Вход</h1>
        <label>
          e-mail <br />
          <input type="email" class={emailError !='' ? 'invalid' : ''} name="email" value = {email} onChange = {handleInput} placeholder ="введите электронную почту" onBlur={emailValidate}/>
          <div class = "error" visible = {emailError !=''} >{emailError}</div>
        </label>
        <label>
          пароль <br />
          <div>
          <input type={hidePass?"password":"text"} class={passwordError !='' ? 'invalid' : ''} name="password" value ={password} onChange = {handleInput} placeholder="введите пароль" onBlur = {passwordValidate}/>
          <input type="checkbox" class="hideCheck"  checked={hidePass} onChange={() => {setHidePass(!hidePass)}}/>  
          </div>
          <div class = "error" visible = {passwordError !=''} >{passwordError}</div>
        </label>
        <button type="submit">Войти</button>
        <a href="http://localhost:3000/sign-up">Зарегистрироваться</a>
        <a href="http://localhost:3000/reset-password">я не помню пароль</a>
      </form>
    </div>
  }

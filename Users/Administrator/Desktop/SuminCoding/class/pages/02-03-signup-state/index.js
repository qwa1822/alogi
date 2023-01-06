import { useState } from 'react'


export default function SignupStatePage(){

  const [email,setEmail]=useState("");  
  const [password,setPassword]=useState("");
  const [emailError,emailsetError]=useState('');

  function onChangePassword(event){
    setPassword(event.target.value);
  }

  function onChangeEmail(event){
    setEmail(event.target.value);
  }

  function onClickSignUp(){
      console.log(email);
      console.log(password);


      //검증하기
      if(email.includes('@')===false){
        // alert('이메일 형식이 올바르지않습니다. @가 없음.')
        emailsetError('이메일이 올바르지 않습니다! @가없음.💛💛💛'
        )
        // document.getElementById('error').innerText='이메일 형식이 올바르지않습니다. @가 없음'
      } else{
        //메시지 알림 dlwjs,BanckeNd 컴퓨터에있는 API(함수) 요청하기.
        alert('회원가입을 축하합니다.')
      }
  }
  
  return(

    <>
      이메일: <input type="text" onChange={onChangeEmail}
      ></input>
      <div>{emailError}</div>
      
      비밀번호: <input type="password" onChange={onChangePassword}>

      </input>
     <button onClick={onClickSignUp}>CLick</button>
  
    </>
  )
}
import React,{useState} from 'react';


const Spam=styled.div`
  color:red;
`

function index(){

 
  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[password2,setPassword2]=useState("");

  function Check(){

    if(email.includes('@')===false){
      return alert('다시만드세요.');
    } 
    if(password.length>8 && password2.length>8  &&password===password2){
      return alert('8자리가 넘고 비밀번호가 같습니다')
    } else{
      return alert('8자리이상이 아니거나 비밀번호가 다릅니다.')
    }

    

  
  }

  return(
    <>
    <input type="text" placeholder="email" onChange={(e)=>{
      setEmail(e.target.value);
    }}></input>
    <input type="password" onChange={(e)=>{
      setPassword(e.target.value);
    }} placeholder='passWord'></input>
    <input type="password" onChange={(e)=>{
      setPassword2(e.target.value);
    }} placeholder='passWord'></input>
    <button onClick={Check}>Click</button>
      {Spam}
    </>
  )
  
}


export default index;
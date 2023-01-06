import React from 'react'

export default function CounterStatePage(){

    function onCLickCounterUp(){

  
      const count=Number(document.getElementById('count').innerText)+1;
      document.getElementById('count').innerText=count;
  }
  function onClickCounterDown(){
    const count=Number(document.getElementById('count').innerText)-1;
    document.getElementById('count').innerText=count;
  }

  return(
    <>
      <div id="count">0</div>
      <button onClick={onCLickCounterUp}>카운트 올리기!!</button>
      <button onClick={onClickCounterDown}>카운트 올리기!!</button>
    </>
  )
}
import { useState } from 'react'

export default function CounterStatePage(){

  const [count,SetCount]=useState(0);
  function onCLickCounterUp(){
    SetCount(count+1);
   
}
function onClickCounterDown(){
  SetCount(count+1);
}

return(
  <>
    <div>0</div>
    <button onClick={onCLickCounterUp}>카운트 올리기!!</button>
    <button onClick={onClickCounterDown}>카운트 올리기!!</button>
  </>
)
}
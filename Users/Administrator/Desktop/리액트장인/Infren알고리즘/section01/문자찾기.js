function Solution(a,b){

  let answer=a;
  let count=0;
  for(let i=0; i<a.length; i++){
    if(a[i]===b){
      count++;
    }
  }
  return  count;
}
let b="COMPUTERPROGRAMMING";
console.log(Solution(b,"C"));
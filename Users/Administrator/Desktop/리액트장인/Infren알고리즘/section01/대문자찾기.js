

function Solution(a){

  let answer=a;
  let count=0;
  for(let x of a){
    let num=x.charCodeAt();
    if(num>=65 && num<=90) count++;
  }
  return count

}
console.log(Solution("KoreaTimeGood"));
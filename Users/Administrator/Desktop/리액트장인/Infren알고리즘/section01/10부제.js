

function Solution(a,arr){
 

  let answer=0;
  
  for(let x of arr){
    if(x%10===a){
        answer++;
    }
  }
  return answer;

}
arr=[25,23,11,47,53,17,33];
console.log(Solution(3,arr))



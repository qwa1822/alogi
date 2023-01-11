

function Solution(a,b,c){

   let max=0;
  let sum=a+b+c;

  let answer="YES";
  // 가장큰값 구하기
  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;
  if((sum-max)<=max) answer="NO";



  return answer;



  
}

console.log(Solution(6,7,11));
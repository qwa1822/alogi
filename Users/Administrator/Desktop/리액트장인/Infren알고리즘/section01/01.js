

// let a=2
// let b=3;
// let c=1;
// let sum=0;
// //  a   b  
// //  a>b b>c
// if(a>b){
//    if(b>c){
//     sum=c;
//   }
//   if(b<c){
//     sum=b;
//   }
// }

// // b     a
// //b>a   a<c
// if(b>a){
//   if(a>c){
//     sum=c;
//   }
//   if(a<c){
//     sum=a;
//   }
  
// }
// console.log(sum);

// // 세수중 작은값
function Solution(a,b,c){
  let answer=0;

  if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c;
  return answer;
}

console.log(Solution(5,3,6));
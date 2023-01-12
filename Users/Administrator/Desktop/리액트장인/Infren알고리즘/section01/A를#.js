function Solution(a){


  let answer=a
  answer=answer.replace(/A/g,'#');

  return answer;


}

let str="BANANA";
console.log(Solution(str));
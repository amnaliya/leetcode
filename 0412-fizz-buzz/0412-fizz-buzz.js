/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer=[];
    for(let i=1;i<=n;++i){
        let rslt=""
        if(i%3===0){
            rslt+="Fizz"
        }
        if(i%5===0){
            rslt+="Buzz"
        }
        answer.push(rslt || i.toString());
      
    }
      return answer;
};
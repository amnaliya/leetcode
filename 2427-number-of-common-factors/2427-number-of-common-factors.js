/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let num=[]
    let num2=[]
    for(let i=1;i<=a;i++){
        if(a%i===0){
            num.push(i)
        }
    }
  for(let j=1;j<=b;j++){
    if(b%j===0){
        num2.push(j)
    }
  }
  const setting=[...new Set(num.filter((value)=>num2.includes(value)))]
  return setting.length;
};
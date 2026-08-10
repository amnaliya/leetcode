/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  let sorting=prices.sort((a,b)=>a-b);
  let sum=sorting[0]+sorting[1];
  if(sum<=money){
    return money-sum;
  }
    return money;
  
};
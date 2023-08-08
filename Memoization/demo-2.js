// example for passing multiple arguments
function calculation(num){
let sum=0;
  for(let i=1;i<=num.length;i++){
    sum+=i;
  }
  return sum
}

const memoization =(fn) =>{
  let cache={}
  return function(...args){
    const num=JSON.stringify(args)
    if(cache[num]){
      console.log('take value from cache',num)
      return cache[num]
    }else{
      console.log('calculating...')
      const val = fn(args)
      cache[num]=val;
      return val
    }
  }
}
const result=(memoization(calculation))
console.log(result(1,2,3,4,5,6,7,8,9,10))
console.log(result(1,2,3,4,5,6,7,8,9,10))
// calculating...
// 55
// take value from cache [1,2,3,4,5,6,7,8,9,10]
// 55



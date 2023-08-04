// example for passing single arguments



function calculation(num){

let sum=0;
  for(let i=1;i<=num;i++){
    sum+=i;
  }
  return sum
}


const memoization =(fn) =>{
  let cache={}

  return function(num){

    if(cache[num]){
      console.log('take value from cache')
      return cache[num]
    }else{
      console.log('calculating...')
      const val = fn(num)
      cache[num]=val;
      return val
    }

  }

}


const result=(memoization(calculation))

console.log(result(100))
console.log(result(100))
console.log(result(100))
console.log(result(100))

output
caculting...
// 5050
// take value from cache
// 5050
// take value from cache
// 5050
// take value from cache
// 5050


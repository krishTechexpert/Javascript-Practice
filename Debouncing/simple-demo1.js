const box= document.getElementById('inputElement');
let ul =document.createElement('ul');

// very basic example to only understand flow 

function show(){
    console.log('data received from api server')
}
function simpleDebounce(fn,wait){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(() => fn(),wait)
    }
}

const result = simpleDebounce(show,1000)
box.addEventListener('input',result)

// eample 2 with arguments

function show(data){
    console.log('data received from api server',data)
}
function simpleDebounce(fn,wait){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(() => fn(args),wait)
    }
}

const result2 = simpleDebounce(show,1000)
box.addEventListener('input',(e) => result2(e.target.value))




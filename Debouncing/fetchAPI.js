const box = document.getElementById('inputElement');
let ul = document.createElement('ul');

function createHTMLElement(data) {
    if (document.body.querySelector('ul')) {
        document.body.querySelector('ul').innerHTML = '';
    }
    if (data.length === 0) {
        let li = document.createElement('li')
        li.innerHTML = 'no data found';
        ul.appendChild(li)
    } else {
        data.map((item) => {
            let li = document.createElement('li')
            li.innerHTML = `${item.title}`;
            ul.appendChild(li)
        })
    }
    document.body.appendChild(ul)
}

function fetchAPI(val) {
    console.log(val)
    fetch(`https://dummyjson.com/products/search?q=${val}`)
    .then((res) => res.json())
    .then((data) => createHTMLElement(data.products))
}

function Debounce(fn, wait) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => fn(args), wait)
    }
}
const result = Debounce(fetchAPI,250)
box.addEventListener('input', e => result(e.target.value))
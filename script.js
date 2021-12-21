let res = 0;
let av = document.getElementById('av');
let long = document.getElementById('long');
let larg = document.getElementById('larg');

const elt = document.getElementsByClassName('button');
elt.addEventListener('click', function() {
    res = Number(long.value) * Number(larg.value);
    av.innerHTML = res;
});
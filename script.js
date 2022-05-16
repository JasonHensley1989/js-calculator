console.log("hello");

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');


onePressed = () => {
    console.log('One was pressed')
}


one.addEventListener("click", onePressed);

twoPressed = () => {
    console.log('Two was pressed')
}


two.addEventListener("click", twoPressed);





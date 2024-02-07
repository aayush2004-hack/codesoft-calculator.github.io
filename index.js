function Write(val) {
    var value = document.getElementById('text');
    value.value += val;
}
function Result() {
    var num1 = document.getElementById('text').value;
    var num2 = eval(num1);
    document.getElementById('text').value = num2;
}
function Back() {
    var last = document.getElementById('text');
    last.value = last.value.slice(0,-1);
}
function Clear() {
    var text = document.getElementById('text');
    text.value = '';
}

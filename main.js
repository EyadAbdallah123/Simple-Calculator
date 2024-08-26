function add() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum =parseFloat (document.getElementById("num2").value);
    let result = firstnum + secondnum;
    document.getElementById("result").innerHTML = result;
}
function Subtract() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum =parseFloat (document.getElementById("num2").value);
    let result = firstnum - secondnum;
    document.getElementById("result").innerHTML = result;
}
function Multiply() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum =parseFloat (document.getElementById("num2").value);
    let result = firstnum * secondnum;
    document.getElementById("result").innerHTML = result;
}
function Divided() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum =parseFloat (document.getElementById("num2").value);
    let result = firstnum / secondnum;
    document.getElementById("result").innerHTML = result;
}

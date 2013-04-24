var op1, op2, result;
function setValues() {
    op1 = Number(document.getElementById("op1").value);
    op2 = Number(document.getElementById("op2").value);
}
function sum() {
    setValues();
    result = op1+op2;
    alert("The sum is equal to " + result);
}

function sub() {
    setValues();
    result = op1-op2;
    alert("The difference is equal to " + result);
}

function mult() {
    setValues();
    result = op1*op2;
    alert("The product is equal to " + result);
}

function div() {
    setValues();
    result = op1/op2;
    alert("The operation is equal to " + result);
}

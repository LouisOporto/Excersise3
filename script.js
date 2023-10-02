let x = 0.0;
let y = 0.0;
let operation = "";

function Press(event) {
    if(event.key == '0' || event.key == '1' || event.key == '2' || 
       event.key == '3' || event.key == '4' || event.key == '5' ||
       event.key == '6' || event.key == '7' || event.key == '8' ||
       event.key == '9') document.getElementById("result").value += event.key;
    if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        x = parseFloat(document.getElementById("result").value);
        operation = event.key;
        document.getElementById("result").value = "";
    }
    if(event.key == 'Enter'){ 
        Solve();
        return;
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        Click(button.innerHTML);
    });
});


function Click(button) {
    if(button == 'C'){
        document.getElementById("result").value = "";
        return;
    }
    if(button == '='){ 
        Solve();
        return;
    }
    if(button == '+' || button == '-' || button == '*' || button == '/'){
        x = parseFloat(document.getElementById("result").value);
        operation = button;
        document.getElementById("result").value = "";
    }
    else{
        document.getElementById("result").value += button;
        y = parseFloat(document.getElementById("result").value);
    }
}

function Solve() {
    if(operation == '*') x = x * y;
    if(operation == '/') x = x / y;
    if(operation == '+') x = x + y;
    if(operation == '-') x = x - y;
    document.getElementById("result").value = x;
}

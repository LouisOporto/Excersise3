function Press(event) {
    if(event.key == '0' || event.key == '1' || event.key == '2' || 
       event.key == '3' || event.key == '4' || event.key == '5' ||
       event.key == '6' || event.key == '7' || event.key == '8' ||
       event.key == '9' || event.key == '+' || event.key == '-' ||
       event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
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
    document.getElementById("result").value += button;
}

function Solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

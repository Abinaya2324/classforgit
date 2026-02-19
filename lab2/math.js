function calculate() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    var result = "";
    result += "Addition: " + (a + b) + "<br>";
    result += "Subtraction: " + (a - b) + "<br>";
    result += "Multiplication: " + (a * b) + "<br>";

    if (b !== 0) {
        result += "Division: " + (a / b);
    } else {
        result += "Division: Cannot divide by zero";
    }

    document.getElementById("result").innerHTML = result;
}

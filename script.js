let expression = "";
let isDegrees = true;

function appendCharacter(value) {
  expression += value;
  document.getElementById("expression").value = expression;
}

function clearExpression() {
  expression = "";
  document.getElementById("expression").value = expression;
}

function clearLastCharacter() {
  expression = expression.slice(0, -1);
  document.getElementById("expression").value = expression;
}

function toggleMode() {
  isDegrees = !isDegrees;
  document.getElementById("modeButton").textContent = isDegrees ? "DEG" : "RAD";
}

function calculateExpression() {
  try {
    let evalExpression = expression;

    // Add math functions
    evalExpression = evalExpression.replace(
      /sin\(/g,
      isDegrees ? "Math.sin(Math.PI/180*" : "Math.sin("
    );
    evalExpression = evalExpression.replace(
      /cos\(/g,
      isDegrees ? "Math.cos(Math.PI/180*" : "Math.cos("
    );
    evalExpression = evalExpression.replace(
      /tan\(/g,
      isDegrees ? "Math.tan(Math.PI/180*" : "Math.tan("
    );

    evalExpression = evalExpression.replace(/sqrt\(/g, "Math.sqrt(");
    evalExpression = evalExpression.replace(/log\(/g, "Math.log10(");
    evalExpression = evalExpression.replace(/ln\(/g, "Math.log(");

    // Replace ^ with ** for exponentiation
    evalExpression = evalExpression.replace(/\^/g, "**");

    let result = eval(evalExpression); // Evaluate the expression
    expression = result.toString();
    document.getElementById("expression").value = expression;
  } catch (err) {
    document.getElementById("expression").value = "Error";
  }
}

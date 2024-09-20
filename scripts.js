function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate expression and replace sqrt with Math.sqrt and pow with Math.pow
        let expression = display.value.replace(/sqrt\(/g, 'Math.sqrt(').replace(/pow\(/g, 'Math.pow(');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (!weight || !height) {
        document.getElementById('bmi-result').innerText = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

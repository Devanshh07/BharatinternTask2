// Function to convert temperature
function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");

    let result;

    if (fromUnit === "celsius") {
        // Convert from Celsius to Fahrenheit
        result = (inputTemp * 9/5) + 32;
        resultElement.textContent = `${inputTemp}°C is equal to ${result.toFixed(2)}°F`;
    } else {
        // Convert from Fahrenheit to Celsius
        result = (inputTemp - 32) * 5/9;
        resultElement.textContent = `${inputTemp}°F is equal to ${result.toFixed(2)}°C`;
    }
}

// Add click event listener to the Convert button
document.getElementById("convertButton").addEventListener("click", convertTemperature);

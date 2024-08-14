// Get the input box where the numbers and results are displayed
const inputBox = document.getElementById("inputBox");

// Get all the buttons in the calculator
const buttons = document.querySelectorAll("button");

// Initialize a variable to store the current input
let currentInput = "";

// Loop through all the buttons and add event listeners for click events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    // Clear the input when 'AC' is clicked
    if (buttonText === "AC") {
      currentInput = "";
      inputBox.value = "0";
    }
    // Delete the last character when 'DEL' is clicked
    else if (buttonText === "DEL") {
      currentInput = currentInput.slice(0, -1);
      inputBox.value = currentInput || "0";
    }
    // Calculate the percentage
    else if (buttonText === "%") {
      currentInput = (parseFloat(currentInput) / 100).toString();
      inputBox.value = currentInput;
    }
    // Calculate the result when '=' is clicked
    else if (buttonText === "=") {
      try {
        currentInput = eval(currentInput).toString();
        inputBox.value = currentInput;
      } catch (error) {
        inputBox.value = "0";
        currentInput = "";
      }
    }
    // Append the clicked button's text to the current input
    else {
      currentInput += buttonText;
      inputBox.value = currentInput;
    }
  });
});

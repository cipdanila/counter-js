document.addEventListener('DOMContentLoaded', function() {
    // Create an outer div for centering and styling
    const containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.alignItems = 'center';
    containerDiv.style.justifyContent = 'center';
    containerDiv.style.height = 'fit-content';
    containerDiv.style.backgroundColor = 'lightgray';
    containerDiv.style.maxWidth = '400px';
    containerDiv.style.margin = 'auto';

    // Create the result display div and style it
    const counterDisplay = document.createElement('div');
    counterDisplay.id = 'counter';
    counterDisplay.style.backgroundColor = 'lightblue';
    counterDisplay.style.color = 'black';
    counterDisplay.style.padding = '10px';
    counterDisplay.style.marginBottom = '20px';
    counterDisplay.style.fontSize = '24px';
    counterDisplay.style.textAlign = 'center';
    counterDisplay.textContent = '0';
    counterDisplay.style.width = '100px';

    // Create a div for buttons and style it
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';

    // Create the "+" button and apply styles
    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.style.backgroundColor = 'green';
    incrementButton.style.color = 'white';
    incrementButton.style.padding = '10px 20px';
    incrementButton.style.marginRight = '10px';
    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(counterDisplay.textContent);
        currentValue++;
        counterDisplay.textContent = currentValue;
        updateTextColor(currentValue); // Update text color based on value
    });

    // Create the "-" button and apply styles
    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.style.backgroundColor = 'red';
    decrementButton.style.color = 'white';
    decrementButton.style.padding = '10px 20px';
    decrementButton.addEventListener('click', function() {
        let currentValue = parseInt(counterDisplay.textContent);
        currentValue--;
        counterDisplay.textContent = currentValue;
        updateTextColor(currentValue); // Update text color based on value
    });

    // Add the buttons to the buttons div
    buttonsDiv.appendChild(incrementButton);
    buttonsDiv.appendChild(decrementButton);

    // Add the result display div and the buttons div inside the outer div
    containerDiv.appendChild(counterDisplay);
    containerDiv.appendChild(buttonsDiv);

    // Select the <main> element from the DOM
    const mainElement = document.querySelector('main');

    // Add the outer div inside the main element
    mainElement.appendChild(containerDiv);

    // Function to update text color based on value
    function updateTextColor(value) {
        if (value > 0) {
            counterDisplay.style.color = 'green';
        } else if (value < 0) {
            counterDisplay.style.color = 'red';
        } else {
            counterDisplay.style.color = 'black';
        }
    }
});

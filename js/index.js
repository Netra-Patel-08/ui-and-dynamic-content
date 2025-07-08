// Save the reference to text-field into a variable.
const itemInput = document.getElementById('itemInput');

// Save the reference to new-item button into a variable.
const addItemBtn = document.getElementById('addItemBtn');

// Save the reference to unordered list into a variable.
const shoppingList = document.getElementById('shoppingList');

// Save the reference to paragraph for feedback
const feedbackParagraph = document.querySelector('.feedback');

// Start function addItem.
function addItem() {
    // Clear any previous feedback messages
    feedbackParagraph.textContent = '';

    // Check if user entered the value in input text-field.
    if (itemInput.value.trim() !== '') {
        // Create list-item and store output in a variable.
        const listItem = document.createElement('li');

        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        listItem.textContent = itemInput.value.trim();

        // Append list item to unordered list.
        shoppingList.appendChild(listItem);

        // Clear the text-field.
        itemInput.value = '';

        // Put the cursor back to text-field
        itemInput.focus();
    } else {
        // Print the message "Nothing entered!" in the paragraph "feedback"
        feedbackParagraph.textContent = 'Nothing entered!';
    }
}

// Register your function addItem for click event on button.
addItemBtn.addEventListener('click', addItem);


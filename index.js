// STEP 1:
// Create a new item and add it to the container everytime the ADD btn is clicked but only if there is any value in input field because in item input field we need a value from user.

// Step 2:
// Clear the input field once the the item is added. So that the user can add more items.

// STEP 3:
// EDIT btn
// Add a eventListener to EDIT btn with which we can edit the item input.

// STEP 4:
// DELETE  btn
// Add a eventListener to DELETE btn with which we can delete the item.

// Selectors
const input = document.querySelector(".input_div .input");
const addBtn = document.querySelector(".addButton");
const container = document.querySelector(".container");

// STEP 1:
// Creating TODO and Adding it to the container
const createTodo = (inputValue, input) => {
  // Step: 1
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  const itemInput = document.createElement("input");
  itemInput.classList.add("item_input");
  itemInput.value = inputValue;
  const editBtn = document.createElement("button");
  editBtn.classList.add("editButton");
  editBtn.textContent = "EDIT";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteButton");
  deleteBtn.textContent = "DELETE";

  container.appendChild(itemDiv);
  itemDiv.appendChild(itemInput);
  itemDiv.appendChild(editBtn);
  itemDiv.appendChild(deleteBtn);

  // Step 2:
  input.value = "";

  // Step 3:
  editBtn.addEventListener("click", () => {
    itemInput.focus();
  });

  // Step 4:
  deleteBtn.addEventListener("click", () => {
    container.removeChild(itemDiv);
  });
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  input.value === ""
    ? alert("The input field is EMPTY! ⛔")
    : createTodo(input.value, input);
});

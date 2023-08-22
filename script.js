/*const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

*/

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and update the total price
const updateTotal = () => {
  const priceElements = document.querySelectorAll(".price");
  
  let totalPrice = 0;
  
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  
  // Update the total cell's content if it already exists
  const totalCell = document.querySelector("#total-cell");
  if (totalCell) {
    totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
  } else {
    // Create a new row and cell for the total price
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    
    newCell.setAttribute("id", "total-cell");
    newCell.setAttribute("colspan", "2");
    newCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
    
    newRow.appendChild(newCell);
    
    const table = document.querySelector("table");
    table.appendChild(newRow);
  }
};

getSumBtn.addEventListener("click", updateTotal);



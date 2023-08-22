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

const getSum = () => {
  // Get all the price elements with class "price"
  const priceElements = document.querySelectorAll(".price");
  
  let totalPrice = 0;
  
  // Loop through price elements and calculate the total
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  
  // Create a new row and cell for the total
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  
  newCell.setAttribute("colspan", "2");
  newCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
  
  newRow.appendChild(newCell);
  
  // Find the table and append the new row at the end
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

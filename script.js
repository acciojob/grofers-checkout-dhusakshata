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
  
  // Update the last cell of the "Prices in Rs" column with the total price
  const lastPriceCell = document.querySelector(".price:last-child");
  lastPriceCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);

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
  const priceElements = document.querySelectorAll(".price");
  
  let totalPrice = 0;
  
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  
  const totalRow = document.createElement("tr");
  const totalCell1 = document.createElement("td");
  const totalCell2 = document.createElement("td");
  
  totalCell1.textContent = "Total Price:";
  totalCell2.textContent = `Rs ${totalPrice.toFixed(2)}`;
  
  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);
  
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);



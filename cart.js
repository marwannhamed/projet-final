function increaseQuantity(itemId) {
  const quantityInput = document.getElementById(itemId + "-quantity");
  const currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity(itemId) {
  const quantityInput = document.getElementById(itemId + "-quantity");
  const currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}
function deleteItem(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function updateTotalPrice() {
  const quantityInputs = document.querySelectorAll('input[type="number"]');
  let total = 0;

  quantityInputs.forEach((input) => {
    const quantity = parseInt(input.value);
    console.log("qt", quantity);
    const price = parseInt(
      input.parentNode.nextElementSibling.textContent.slice(prx)
    );
    console.log("pr", price);
    total += quantity * price;
  });
  document.getElementById("total-price").textContent = total;
}

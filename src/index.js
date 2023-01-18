// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span").innerText;
  const qtyElement = product.querySelector(".quantity input").value;

  const subTotElement = parseFloat(priceElement) * qtyElement;
  product.querySelector(".subtotal span").innerText = subTotElement;
  return subTotElement;
}

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  let totalSum = 0;
  productList.forEach(product => {
    updateSubtotal(product);
    totalSum += updateSubtotal(product);
  });

  document.querySelector("#total-value span").innerText = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove()

  calculateAll()

  // Is this a good practice?
  // target.parentNode.removeChild(target)
}

// ITERATION 5

function createProduct() {
  const table = document.querySelector("tbody")

  let nameFromInput = document.querySelector(".create-product td:nth-child(1) input").value
  if (nameFromInput === "") nameFromInput = "No name"

  let priceFromInput = parseFloat(document.querySelector(".create-product td:nth-child(2) input").value).toFixed(2)

  const newTR = document.createElement("tr")

  newTR.innerHTML =`
          <td class="name">
            <span>${nameFromInput}</span>
          </td>
          <td class="price">$<span>${priceFromInput}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        `
  newTR.classList.add("product")
  table.appendChild(newTR)

  document.querySelector(".create-product td:nth-child(1) input").value = ""
  document.querySelector(".create-product td:nth-child(2) input").value = 0

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => button.addEventListener('click', removeProduct))
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => button.addEventListener('click', removeProduct))

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
});

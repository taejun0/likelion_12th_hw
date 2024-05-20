/* product detail page - JS */

const product_amount = document.getElementById("product_amount");
const product_amount_plus_btn = document.getElementById("product_amount_plus_btn");
const product_amount_minus_btn = document.getElementById("product_amount_minus_btn");
const final_chargement = document.getElementById("final_chargement");
const product_price = document.getElementById("product_price").textContent.replace(' 원', '');

const product_amount_plus = () => {
  product_amount.textContent = parseInt(product_amount.textContent) + 1;
  calc_product();
}

const product_amount_minus = () => {
  if(parseInt(product_amount.textContent) <= 0) {
    product_amount.textContent = 0;
  }
  else {
    product_amount.textContent = parseInt(product_amount.textContent) - 1;
  }
  calc_product();
}

const calc_product = () => {
  if(parseInt(product_amount.textContent) <= 0) {
    final_chargement.textContent = "0 원";
  }
  else {
    final_chargement.textContent = (parseInt(product_amount.textContent) * parseInt(product_price)) + " 원";
  }
}

product_amount_plus_btn.addEventListener('click', product_amount_plus);
product_amount_minus_btn.addEventListener('click', product_amount_minus);


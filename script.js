let plusBtns = document.getElementsByClassName("fa-plus");
let minusBtns = document.getElementsByClassName("fa-minus");
let trashBtns = document.getElementsByClassName("fa-xmark");
let heartBtns = document.getElementsByClassName("fa-heart");

function total() {
  let sum = 0;
  let total = document.querySelector("#total");
  let qtes = document.getElementsByClassName("qte");
  let prices = document.getElementsByClassName("price");
  for (let i = 0; i < prices.length; i++) {
    sum = sum + Number(qtes[i].textContent) * Number(prices[i].textContent);
  }
  total.textContent = sum;
}
for (let faplus of plusBtns) {
  faplus.addEventListener("click", function () {
    faplus.nextElementSibling.textContent++;
    total();
  });
}
for (let faminus of minusBtns) {
  faminus.addEventListener("click", function () {
    if (faminus.previousElementSibling.textContent > 0)
      faminus.previousElementSibling.textContent--;
    total();
  });
}
for (const fa of trashBtns) {
  fa.addEventListener("click", function () {
    fa.parentElement.parentElement.remove();
    total();
  });
}
for (const fa of heartBtns) {
  fa.addEventListener("click", function () {
    fa.classList.toggle("toggleHeart");
  });
}

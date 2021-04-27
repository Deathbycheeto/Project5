let params = new URLSearchParams(window.location.search);
let orderId = params.get('orderId');
let total = params.get('total');
document.getElementById("orderId").innerHTML = orderId;
document.getElementById("totalP").innerHTML = total;
localStorage.removeItem("productsInCart");
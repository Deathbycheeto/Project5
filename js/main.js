const loadProducts = () => {   
    let url = "http://localhost:3000/api/teddies";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let results = JSON.parse(this.responseText);
            let content = "";
            results.forEach(Teddy => {
                var value = parseFloat(Teddy.price);
                value /= 100;
                var price = value.toString() + ".00";
                content +=`<a href="product.html?_id=${Teddy._id}">
                <div class="item">
                <img src="${Teddy.imageUrl}">
                <h3>Name: ${Teddy.name}</h3>
                <h3>Price: $${price}</h3>
                </div></a> `;
    
            });
            let htmlProductListDiv = document.getElementById("products");
            htmlProductListDiv.innerHTML = content;

        }
        
    }
    xhttp.open("GET", url, true);
    xhttp.send();
 }

loadProducts();



// const addToCart = (product) => {

// }

// addToCart(product);

// const displayCart = () => {

// }

// displayCart();

// const removeFromCart = (product) => {

// }

// removeFromCart(product);

// const makeOrder = () => {

// }

// makeOrder();

// const UpdateCartNumber = (type, qty) => {

// }

// UpdateCartNumber(type, qty);
let product;
const displaySingleProduct = (id) => {
    let url = "http://localhost:3000/api/teddies";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let results = JSON.parse(this.responseText);
            let content = "";
            results.forEach(Teddy => {
                if (Teddy._id == id) {
                    product = Teddy;
                    var value = parseFloat(Teddy.price);
                    value /= 100;
                    var price = value.toString() + ".00";
                    content +=`<div class="item">
                    <img src="${Teddy.imageUrl}">
                    <h3>Name: ${Teddy.name}</h3>
                    <h3>Price: $${price}</h3>
                    <h3>Description: ${Teddy.description}</h3>`;
                    Teddy.colors.forEach(x => {
                        content +=`<input type="radio" id="${x}" name="color" value="${x}">
                        <label for="${x}">${x}</label><br>`;
                    });

                    content +=`</div>`;

                    
                }
            });
            let htmlProductDiv = document.getElementById("product");
            htmlProductDiv.innerHTML = content;

        }
        
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

const getParameters = () => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('_id')

    displaySingleProduct(id);
}
getParameters();


const addToCart = (product) => {
    let products = JSON.parse(localStorage.getItem("productsInCart"));
    if (products == null) {
        products = [];
        product.quantity = 1;
        products.push(product);
    } else {
        console.log(products);
        let index = products.findIndex(o => o._id == product._id);
        if (index != -1) {
            //increase quantity in cart
            //product is in array incresase quantity
            products[index].quantity += 1;
         } else {
            //product is not add product
            product.quantity =1;
            products.push(product);
         }
   
    }
    localStorage.setItem(`productsInCart`, JSON.stringify(products));

}
let addToCartButton = document.getElementById("add-button");

addToCartButton.addEventListener(`click`,() =>{

addToCart(product);
})

 
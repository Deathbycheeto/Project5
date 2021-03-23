const LoadCart = () => {
    let products = JSON.parse(localStorage.getItem("productsInCart"));
    let content = "";
    if (products == "") {
        alert("Empty Cart");
        content += `<div id="emptyCart">
        <h2>There are no items in your cart</h2>
        <br>
        <a href="index.html"><p>Look at our selection of Teddies</p></a></div>`;
    } else {
        console.log(products);
        products.forEach(Teddy => {
            content +=`<div class="cartItem">
            <img src="${Teddy.imageUrl}">
            <h3>Name: ${Teddy.name}</h3>
             <h3>Price: $${Teddy.price}</h3>
             <h3>Quantity: <button type="button" onclick="addQuantity('${Teddy._id}')">+</button>${Teddy.quantity}<button type="button" onclick="subQuantity('${Teddy._id}')">-</button></h3>
             </div>`;
            
        });
        let htmlCartListDiv = document.getElementById("cart");
            htmlCartListDiv.innerHTML = content;
    }
    

}
LoadCart();

const addQuantity = (productID) => {
    let products = JSON.parse(localStorage.getItem("productsInCart"));
    let index = products.findIndex(product  => product._id == productID);
    if (index != -1) {
        products[index].quantity +=1;    
    } 
    localStorage.setItem("productsInCart", JSON.stringify(products));
    LoadCart();
    
}

const subQuantity = (productID) => {
    let products = JSON.parse(localStorage.getItem("productsInCart"));
    let index = products.findIndex(product  => product._id == productID);
    if (index != -1) {
        products[index].quantity -=1; 
        localStorage.setItem("productsInCart", JSON.stringify(products));
        if (products[index].quantity == 0) {
            alert("Item removed from cart")
            products.splice(index, 1);
            localStorage.setItem("productsInCart", JSON.stringify(products));
        }   
    } 
    LoadCart();
}
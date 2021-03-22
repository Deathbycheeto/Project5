const LoadCart = () => {
    let products = JSON.parse(localStorage.getItem("productsInCart"));
    let content = "";
    if (products == null) {
        content += `<div id="">
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
             <h3>Quantity: ${Teddy.quantity}</h3>
             </div>`;
            
        });
        let htmlCartListDiv = document.getElementById("cart");
            htmlCartListDiv.innerHTML = content;
    }
    

}
LoadCart();

const addQuantity = () => {


}

const subQuantity = () => {


}
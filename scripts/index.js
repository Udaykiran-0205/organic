const productsContainer = document.getElementById("displayproducts");


const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 

   displayproducts(data);

}

fetchData ('https://dummyjson.com/products');


function displayproducts({products}) {
    console.log(products);
    products.forEach((product) => {
      productsContainer.innerHTML += generateItemCart(product);
    })
        
}

function generateItemCart(product){
    console.log(product)
    return `
    <div class="items-container">
                <div class="banner">${product.category}</div>
                <div class="image-container">
                  <img src = ${product.images[0]}>
                </div>
                <div class="info-container">
                  <div class="title">${product.title}</div>
                  <div class="description">
                    ${product.description.slice(0,50)}
                    <button class ="read-more">Read more...</button>
                  </div>
                  <div class="cta-container">
                    <div class="price">$ ${product.price}</div>
                    <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                  </div>
                </div>
              </div>
    `
}



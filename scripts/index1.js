
async function fetchData (){
    const response = await fetch ('https://dummyjson.com/products');

    const data = await response.json();
     displayData(data.products);
   
}


fetchData();
console.log("line 13");


function displayData(data) {
    console.log("display data" ,data)

    const productscontainer = document.getElementById('products-container');

    data.forEach((product) => {
      productscontainer.innerHTML += productcard(product);
    });
    console.log(productscontainer);
}

function productcard(product) {
   return `<div> 
                <img class="image" src = ${product.images[0]} />
                <h1>${product.title}</h1>  
                <p>${product.description}</p>
           </div>` ;
}
            
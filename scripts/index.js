const productscontainer = document.getElementById("displayproducts");


const fetchData = async (url) = {
    const response = await fetch (url);
    const data = await response.json ();
    console.log(data);
    
   // displayproducts(data);
}
fetchData("https://dummyjson.com/products");


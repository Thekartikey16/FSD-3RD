const getProducts =async()=>{
    const res = await fetch("https://dummyjson.com/product");
    const data = await res.json();
    console.log(data);
}
getProducts();

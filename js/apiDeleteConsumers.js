async function deleteProduct(id){
  try {
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
        const data = await response.json()  
        console.log(data)  
  } catch (error) {
    
  }

}

export {deleteProduct}
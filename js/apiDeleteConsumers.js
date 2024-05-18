const deleteAlert=document.getElementById("deleteAlert")


async function deleteProduct(id){
  try {
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
        const data = await response.json()  
        //console.log(data)  
        
        deleteAlert.textContent=`The register Number ${data.title} was eliminated (not really it's fake).`
        deleteAlert.style.display="block"
        setTimeout (() =>{
            deleteAlert.style.display="none"
          }, 5000)
  } catch (error) {
    console.log(error)
  }

}

export {deleteProduct}
/**
 * Creating a node to manipulate the alert showing when a fake product is deleted
 */
const deleteAlert=document.getElementById("deleteAlert")

/**
 * Function that receive the ID of a product to delete with the API
 * @param {} id 
 */
async function deleteProduct(id){
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
        const data = await response.json()  
        
        deleteAlert.textContent=`The register Number ${data.title} was eliminated (not really it's fake).`
        deleteAlert.style.display="block"
        setTimeout (() =>{
            deleteAlert.style.display="none"
          }, 5000)
  } catch (error) {
    console.log(`Can't delete de element with the id ${id}`)
  }

}

export {deleteProduct}
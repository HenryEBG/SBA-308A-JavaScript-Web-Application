/**
 * Nodes pointing to the modals forms to create or modify a product
 */
const formNewProduct = document.getElementById("form_new_product")
const formUpdateProduct =document.getElementById("form_update_product")
/**
 * Nodes to the alerts inside the modals to show after create or modify a product
 */
const updateAlert=document.getElementById("updateAlert")
const newAlert=document.getElementById("addAlert")

//Async function using a POST method to add a fake product
async function addProduct(event){

  event.preventDefault();
  try {
    const response = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: formNewProduct.modal_name.value,
                    price: formNewProduct.modal_price.value,
                    description: formNewProduct.modal_description.value,
                    image: formNewProduct.modal_image.value,
                    category: formNewProduct.modal_category.value
                }
            )
        })
    const data = await response.json()  
    console.log(data)  
    newAlert.textContent=`The product ${formNewProduct.modal_name.value} was created with the id = ${data.id} was created (not really it's fake).`
    newAlert.style.display="block"
    setTimeout (() =>{
      newAlert.style.display="none"
      }, 5000)
  } catch (error) {
    console.log(error)
  }
}

//Async funtion to modify a product using an API using a PUT method
async function modifyProduct(event) {
  event.preventDefault();
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${formUpdateProduct.id.value}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: formUpdateProduct.update_name.value,
                    price: formUpdateProduct.update_price.value,
                    description: formUpdateProduct.update_description.value,
                    image: formUpdateProduct.update_image.value,
                    category: formUpdateProduct.update_category.value
                }
            )
        })
    const data = await response.json()  
    console.log(data)  
    updateAlert.textContent=`The product  ${formUpdateProduct.update_name.value} was updated (not really it's fake).`
    updateAlert.style.display="block"
    setTimeout (() =>{
      updateAlert.style.display="none"
      }, 5000)
  } catch (error) {
    console.log(error)
  }
}

//exports functions to the script.js file
export {addProduct,modifyProduct};

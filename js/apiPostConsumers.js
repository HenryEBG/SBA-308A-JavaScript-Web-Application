const formNewProduct = document.getElementById("form_new_product")

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
  } catch (error) {
    console.log(error)
  }
}

export {addProduct};

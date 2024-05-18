//create the fetch
const myUpdateForm=document.getElementById('form_update_product')
import { productDisplay,categorySelect } from './display.js';
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
  } catch (error) {
    console.log(error)
  }
}

async function getCategories(){
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    categorySelect(data)
  } catch (error) {
    console.log(error)
  }
}

async function productsByCategories(event){
  console.log(event.target.value)
  let url='https://fakestoreapi.com/products'
  if(event.target.value!=""){
    url+=`/category/${event.target.value}`
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
    ProductDisplay(newProducts.filter(product => product.category==event.target.value),false)
  } catch (error) {
    console.log(error)
  }
}


async function productById(productId){
  try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      //agregar el id
      myUpdateForm.id.value=data.id;
      myUpdateForm.update_name.value=data.title;
      myUpdateForm.update_price.value=data.price;
      myUpdateForm.update_description.value=data.description;
      myUpdateForm.update_image.value=data.image;
  } catch (error) {
    console.log(error)
  }
}



export {productsByCategories, getCategories,getProducts,productById}
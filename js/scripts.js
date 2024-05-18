/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//import files
import {deleteProduct} from './apiDeleteConsumers.js';
import { addProduct,modifyProduct } from './apiPostConsumers.js';
import { getProducts,getCategories,productsByCategories,productById } from './apiGetConsumers.js';


//objects to be modify
const productContainer = document.getElementById("productContainer");
const selectCategories = document.getElementById("categories");

const formNewProduct = document.getElementById("form_new_product")
const formUpdateProduct = document.getElementById("form_update_product")
const cards = document.getElementsByClassName("card");


let newProductID=21;
const newProducts=[];
const deletedProducts=[];
const modifiedProducts=[];

getProducts();

getCategories();


selectCategories.addEventListener('change', productsByCategories)


formNewProduct.addEventListener('submit',addProduct)






function modifyDeleteProduct(event){
  event.preventDefault();
  
  if(event.target.id.substring(0,6)==="delete"){
    deleteProduct(parseInt(event.target.id.substring(7,8)))
  }
  else {

    productById(parseInt(event.target.id.substring(7,8)))
  }
}


productContainer.addEventListener('click',modifyDeleteProduct)


formUpdateProduct.addEventListener('submit',modifyProduct)
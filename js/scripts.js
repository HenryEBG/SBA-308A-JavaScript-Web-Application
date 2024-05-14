/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//objects to be modify
const productContainer = document.getElementById("productContainer");
const selectCategories = document.getElementById("categories")
function productdisplay(products) {
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add("col")
    card.classList.add("mb-5")
    card.innerHTML = `<div class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <!-- Product image-->
    <img class="card-img-top h-50" src=${product.image} alt="..."  />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${product.title}</h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            <!-- Product price-->
            $${product.price}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center ">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto ml-2" href="#">VO</a></div>
        <div class="text-center"><a class="btn btn-outline-dark mt-auto ml-2" href="#">C</a></div>
    </div>
</div>`
productContainer.appendChild(card);
  });
}
//create the fetch
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data)
    productdisplay(data)
  } catch (error) {
    console.log(error)
  }
}

getProducts();

function categorySelect(categories){
  categories.forEach(category => {
    const option = document.createElement('option');
    option.innerHTML=`<option value="${category}">${category}</option>`
    selectCategories.appendChild(option)
  })
  
}

async function getCategories(){
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    console.log(data)
    categorySelect(data)
  } catch (error) {
    console.log(error)
  }
}


getCategories();
const selectNewCategory = document.getElementById("modal_category");
const selectCategories = document.getElementById("categories");
const selectUpdate= document.getElementById("update_category");

function productDisplay(products,erase) {
  if(erase){
  productContainer.innerHTML=""
  }
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add("col")
    card.classList.add("mb-5")
    card.innerHTML = `<div id="${product.id}" class="card h-100">
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
        <div class="text-center"><a class="btn btn-outline-dark mt-auto ml-2" id="modify ${product.id}"  data-bs-toggle="modal"
        data-bs-target="#modal2" href="#">Modify</a></div>
        <div class="text-center"><a class="btn btn-outline-dark mt-auto ml-2" id="delete ${product.id}" href="#">Delete</a></div>
    </div>
</div>`
productContainer.appendChild(card);
  });
}


function categorySelect(categories){
  categories.forEach(category => {
    const newOption = document.createElement('option');
    const option = document.createElement('option');
    const optionUpdate=document.createElement('option');
    newOption.innerHTML=`<option value="${category}">${category}</option>`
    option.innerHTML=`<option value="${category}">${category}</option>`
    optionUpdate.innerHTML=`<option value="${category}">${category}</option>`
    selectNewCategory.appendChild(newOption)
    selectCategories.appendChild(option)
    selectUpdate.appendChild(optionUpdate);
  })
  
}

export {categorySelect,productDisplay}
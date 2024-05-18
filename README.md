# SBA Javascript Web Aplication
## Working with API's
### Henry Berganza Guevara

A fake store was created using the API https://fakestoreapi.com/

In the project it was used the routes to GET (get the products), DELETE (delete a product), PUT(modify a product) and POST (add new product).

The project use modules to refract all the js code and be more easy to read and modify in the future.

### script.js
This file include only the calls to the diferent functions to use API's 

### apiDeleteConsumers.js
Include the function deleteProduct that use an API to eliminate a product listed in the page.

### apiGetConsumers.js
Include all the functions that bring data from the API:
- productsByCategories  get the products filtered by a category.
- getCategories get all the categories
- getProducts get all the products
- productById get only one product.  This is used to modify.

### apiPostConsumers.js
Include the functions to use the API with the method POST and PUT
- addProduct  Function that calls a POST method in the API to add a new product
- modifyProduct Function that calls a PUT method in the API to modify a product

### display.js
Include the functions to display the elements in the index.html file.
- categorySelect  add elements option to the selects inside the modals and the filter in the navbar
- productDisplay add card elements to the principal container in the index.html file to show the products.

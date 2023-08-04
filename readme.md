 install dependancies form package.json using npm -i

 if you run the code it will connect to your local mongodb server (mongodb required)

 you can create users with role seller or customer using end point "http://localhost:3000/api/users/signup". do a POST request with 'username , password,role' fields inthe body.

 you can login with requesting a POST request to "http://localhost:3000/api/users/login" with fields "username,password".

 logout with GET request to "http://localhost:3000/api/users/logout"

 you can list category with a GET request to 'http://localhost:3000/api/categories'

 only user with role seller can create category with POST request to 'http://localhost:3000/api/categories' with  field 'category'

 you can list products based on category with a GET request to 'http://localhost:3000/api/categories/categoryID'

 only user with role seller can create product with GET request to 'http://localhost:3000/api/categories/categoryID' with fields 'title, price, description, and availability'

 view the product detail with GET request to 'http://localhost:3000/api/categories/categoryID/productId'
 
 only user with role seller can create product details with POST request to 'http://localhost:3000/api/categories/categoryID/productId' with field 'details'

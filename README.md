# Nextjs Tailwind Ecommerce Website Like Amazon

description

## Steps

1. Create Next App
2. Install Tailwind Dependencye
3. Publish to Github
4. Create Website Layout
   1. Create layout component
   2. add header
   3. add footer
5. List Products
   1. Add data.js
   2. Add Images
   3. Render Products
6. Create Product Details
   1. Create product page
   2. Create 3 columns
   3. Show image in first column
   4. Show Product info in second column
   5. Show add to cart action on third column
   6. add styles
7. Handle Add To Cart
   1. define react context
   2. define cart items state
   3. create added to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button
8. Create Cart Page
   1. create cart.js
   2. use context to get cart items
   3. list items in cart items
   4. redirect to cart screen after add to cart
9. Handle Changing Cart Items
   1. Add select box for qunaitiy
   2. Handle select box change
10. Save cart items
    1. Install js-cookie package
    2. Save and retreive cart items in cookies
11. Create Login Form
    1. Install react hook form
    2. Create input boxes
    3. Add login button
12. Connect To MongoDB
    1. Install mongoose
    2. Install mongodb or use mongodb atlas
    3. Save connection url in .env file
    4. create db utils file
    5. create sample users
13. Create Login API
    1. install next-auth
    2. create nextauth.js
    3. implement signin
    4. use signin in login form
14. Add User Menu
    1. Check user authentication
    2. Install headlessui
    3. Show User Menu
15. Create Shipping Screen
    1. Display address fields
    2. Save address in context
16. Create Payment Method Screen
    1. Display payment methods
    2. Save payment method is context
17. Seed Sample Products
    1. Insert sample prodcuts to mongodb
    2. Load products from db in home and product screen
    3. Check product count in stock in add to cart
18. Load Products MongoDB
    1. Load products in home page from mongodb
    2. Load products in product page from mongodb
    3. Use product api to check count in stock in add to cart
19. Create Place Order Screen
    1. Display shipping address
    2. Display payment method
    3. Display order items
    4. Implement create order
20. Create Order Screen
    1. Implement backend api for order details
    2. Load order data from backend
    3. Display order details

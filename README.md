# 🛒 E-commerce-Follow-Along

Welcome to the E-commerce-Follow-Along project! 🚀 This full-stack E-commerce website is built using modern frontend and backend technologies. The aim is to provide a seamless online shopping experience with features like product listings, user authentication, cart management, and secure payments.

---

## 🎯 Features

- 🏢 *Product Listings* – Browse a variety of products with detailed descriptions.
- 🔍 *Search & Filters* – Easily find products using an intuitive search and filter system.
- 🛒 *Shopping Cart* – Add/remove products and manage your cart effortlessly.
- 🏦 *Secure Payments* – Integrated payment gateway for smooth transactions.
- 🔒 *User Authentication* – Sign up, log in, and manage user accounts securely.
- 🚚 *Order Tracking* – Monitor orders in real-time with status updates.

---

## 📌 Project Milestones

### 📜 Milestone 1: Initializing the Repository
✅ Tasks Completed:
- 📂 Set up a GitHub repository named Ecommerce-Follow-Along.
- 📝 Added a README.md file to document the project.
- 🏗️ Established the basic project structure and committed the initial files.

---

### 📜 Milestone 2: Project Setup and Login Page
✅ Tasks Completed:
- 🔗 Used the same GitHub repository from Milestone 1.
- 🔐 Implemented the Login Page UI.
- ⚙️ Set up basic authentication mechanisms.
- 📤 Committed and pushed all changes to GitHub.

---

### 📜 Milestone 3: Backend Organization and Database Setup
✅ Tasks Completed:
- 📂 Organized the backend folder structure efficiently.
- 🌐 Set up a Node.js server to handle API requests.
- 🟢 Connected the application to MongoDB for database storage.
- 🛠️ Implemented basic error handling for a smooth backend operation.

---

### 📜 Milestone 4: User Model, Controller, and File Uploads
✅ Tasks Completed:
- 👤 Created a User Model to define user data structure in MongoDB.
- 🛠️ Developed a User Controller to handle user-related operations (e.g., registration, login).
- 📤 Integrated Multer for file uploads (profile pictures, product images).

---

### 📜 Milestone 5: User Registration UI & Validation
✅ Tasks Completed:
- 🎨 Designed the frontend UI for user registration.
- ✅ Implemented form validation to ensure correct user input before submission.
- 🔗 Connected the registration form to the backend API for user sign-ups.

---

### 📜 Milestone 6: Login Authentication
✅ Tasks Completed:
- 🔑 Created a backend endpoint for user login.
- 🔍 Implemented password validation and encryption.
- 🔐 Used bcrypt to securely store and verify passwords.
- ⚠️ Added error handling for failed login attempts.

---

### 📜 Milestone 7: Product Card Component & Homepage
✅ Tasks Completed:
- 🛠 Developed a reusable Product Card Component for displaying products.
- 📄 Designed the homepage layout to showcase product listings.
- 🔧 Implemented dynamic components that accept product details as props.
- 🔁 Used array mapping to iterate over product lists and render them dynamically.

---

### 📜 Milestone 8: Product Input Form
✅ Tasks Completed:
- 📝 Created a frontend form to allow users to add new products.
- 🖼️ Enabled multiple image uploads for products.
- 🎨 Designed an intuitive UI for product input.
- 🔗 Connected the form to the backend API for storing product data.

---

### 📜 Milestone 9: Product Schema & API Endpoint
✅ Tasks Completed:
- 🛠️ Created a Mongoose schema to define the product structure (e.g., name, description, price, image URL).
- 🔎 Ensured proper validation for required fields and correct data types.
- 🌐 Built a POST endpoint to receive and store product details in MongoDB.
- ✅ Implemented data validation before saving to maintain data integrity.

---

### 📜 Milestone 10: Display Products at Frontend
✅ Tasks Completed:
- 📝 Created a GET endpoint to fetch all product data from the database.
- 🔙 Implemented frontend functionality to retrieve product data.
- 🖼️ Displayed products dynamically by passing them to the product card component.

---

### 📜 Milestone 11: Personalized Products Page
✅ Tasks Completed:
- 🌟 Created a "My Products" page to display products added by the logged-in user.
- 📝 Implemented a backend API endpoint to filter and fetch products based on user email.
- 🔙 Fetched and displayed filtered products dynamically on the frontend.
- 🖼️ Used the product card component to showcase user-specific products.

---

### 📜 Milestone 12: Edit Product Functionality
✅ Tasks Completed:
- ✏️ Added functionality to edit uploaded products.
- 🛠️ Created a backend API endpoint to update product details in MongoDB.
- 🖼️ Modified the frontend to include an edit button on product cards.
- 🔄 Pre-filled the edit form with the existing product data for a seamless editing experience.
- ✅ Saved the updated product details back to the database.

---

### 📜 Milestone 13: Delete Product Functionality
✅ Tasks Completed:
- 🗑️ Implemented the delete product feature on the frontend.
- 🚀 Created a backend API endpoint to remove a product from MongoDB using its ID.
- 🖼️ Added a delete button on the product card in the frontend.
- 🔄 Updated the UI dynamically after a product is deleted.

---

### 📜 Milestone 14: Delete Product Functionality
✅ Tasks Completed:
- 🛠️ Implemented a delete button on the product card.
- 🔗 Created a backend API endpoint to delete products using their ID.
- 🗑️ Used MongoDB’s deleteOne() method to remove the product from the database.
- 🚀 Updated the frontend to send a DELETE request when the delete button is clicked.
- 🔄 Ensured the UI updates dynamically after a product is deleted.
- ⚠️ Implemented error handling for failed deletion attempts.

---

### 📜 Milestone 15: Navbar Component
✅ Tasks Completed:
- 🏗️ Created a reusable Navbar component for navigation across all pages.
- 🔗 Implemented navigation links for Home, My Products, Add Product, Login, and Sign Up.
- 🎨 Styled the Navbar using Tailwind CSS for a modern and responsive UI.
- 📌 Used React Router's <Link> for seamless page transitions.
- 🚀 Integrated the Navbar into App.jsx so it appears on every page.
- 🔄 Ensured proper UI updates when navigating between different sections.

---

### 📜 Milestone 16: Product Info Page
✅ Tasks Completed:
- 📝 Created a Product Info page that displays all product details.
- 🔗 Set up a dynamic route (`/product/:id`) for individual products.
- 🔢 Added a quantity selector for users.
- 🛒 Implemented an "Add to Cart" button (cart functionality to be added later).

---

### 📜 Milestone 17: Cart Functionality
✅ Tasks Completed:
- ✏️ Updated the `User` schema to include a `cart` field for storing product IDs and quantities.
- 🌐 Created a POST endpoint (`/api/cart/add`) to add products to the user's cart.
- 🔄 Implemented logic to update quantity if the product exists or add a new entry if it doesn’t.
- ✅ Tested the endpoint to ensure cart data is saved in MongoDB.
- 🛠️ Fixed model overwrite issue using a caching pattern to prevent recompilation.

---

### 📜 Milestone 18: Fetch Cart Products for Cart Page
✅ Tasks Completed:
- 🌐 Created a GET endpoint (`/api/cart`) to fetch all products in the user's cart.
- 🔄 Used Mongoose's `populate` method to retrieve full product details (e.g., name, price, image) for each cart item.
- ✅ Tested the endpoint to ensure the cart data is returned with populated product details for display on the cart page.

---

### 📜 Milestone 19: Cart Page UI and Quantity Management
✅ Tasks Completed:
- 🖥️ Created a frontend Cart page to display products using the `GET /api/cart` endpoint.
- 🔧 Added `+` and `-` buttons for each product to increase and decrease quantities.
- 🌐 Developed a `PUT /api/cart/:productId` endpoint to handle quantity updates.
- 🔄 Implemented frontend logic to call the quantity update endpoint and refresh the cart display.
- ✅ Tested the cart page and quantity updates to ensure seamless functionality.

---

### 📜 Milestone 20: Profile Page and User Data Endpoint
✅ Tasks Completed:
- 🌐 Created a `GET /api/v2/user/profile` endpoint to fetch user data (name, email, avatar, addresses).
- 🖥️ Developed a frontend Profile page to display user data.
- 📋 Displayed profile photo, name, and email in one section.
- 🏠 Displayed addresses in another section with an "Add Address" button; shows "No address found" if none exist.
- ✅ Tested the profile page to ensure user data is displayed correctly.

---

### 📜 Milestone 21: Address Form Frontend Page
✅ Tasks Completed:
- 📝 Created a frontend `AddAddress` page to allow users to input address details.
- 🏠 Included fields for country, city, address line 1, address line 2 (optional), ZIP code, and address type (Home/Work/Other).
- 🔄 Used React’s `useState` hook to manage the form input state.
- ✅ Added basic form validation with error messages for required fields.
- 🔗 Added a route (`/add-address`) in `App.jsx` to render the `AddAddress` page.
- 🚀 Updated the Profile page to navigate to `/add-address` when the "Add Address" button is clicked using React Router’s `Link`.
- 🎨 Styled the form using Tailwind CSS to match the app’s design (e.g., Profile page styling).
- ✅ Tested the form to ensure inputs are captured, validation works, and navigation is seamless.

---

### 📜 Milestone 22: Backend Endpoint for Saving Address
✅ Tasks Completed:
- 🌐 Created a `POST /api/v2/user/address` endpoint in `routes/user.js` to receive address data from the frontend.
- 🛠️ Implemented the `addAddress` function in `controller/user.js` to add the new address to the `addresses` array in the `User` model.
- 🔒 Protected the endpoint with JWT authentication using the `auth` middleware.
- ✅ Updated `AddAddress.jsx` to send the address data to the new endpoint using `axios` with `withCredentials: true`.
- 🧪 Tested the endpoint to confirm addresses are saved to the database and displayed on the `Profile` page.
- 📝 Updated the `README.md` with this summary.

---

### 📜 Milestone 23: Place Order Button and Select Address Page
✅ Tasks Completed:
- 🛒 Added a "Place Order" button on the Cart page that navigates to `/select-address`.
- 📝 Created a `SelectAddress.jsx` page to display all user addresses with radio button selection and a "Confirm" button.
- 🌐 Implemented a backend endpoint (`GET /api/v2/user/addresses`) to fetch all addresses for the logged-in user.
- 🛠️ Created an `Order` model in `backend/model/Order.js` to store order details (user, products, address, total amount, status).

---

### 📜 Milestone 24: Order Confirmation Page
✅ Tasks Completed:
- 📝 Created an `OrderConfirmation.jsx` page to display products being ordered, the selected delivery address, and the total cart value.
- 🛒 Displayed all products from the cart with their names, prices, quantities, and totals.
- 🏠 Showed the selected address passed from the Select Address page.
- 💰 Calculated and displayed the total cart value.
- 🚀 Added a "Place Order" button (placeholder for future backend integration).

---

### 📜 Milestone 25: Backend Endpoint for Placing Orders
✅ Tasks Completed:
- 🌐 Created a `POST /api/v2/order/place` endpoint in `routes/order.js` and `controller/order.js`.
- 🛠️ Implemented logic to retrieve user `_id` by email and create separate orders for each product with the same address.
- 📦 Used the `Order` schema to store order details in MongoDB.
- 🔗 Updated `server.js` to register the new order routes.
- 🚀 Modified `OrderConfirmation.jsx` to call the endpoint with cart, address, and user email data.

---

### 📜 Milestone 26: Backend Endpoint for Retrieving User Orders
✅ Tasks Completed:
- 🌐 Created a `POST /api/v2/order/orders` endpoint in `routes/order.js` and `controller/order.js`.
- 🛠️ Implemented logic to retrieve user `_id` by email and fetch all orders for that user.
- 📦 Used the `Order` schema to query orders from MongoDB, populating product details (name, price).
- 🔗 Added the endpoint to return all user orders in the response.

---

### 📜 Milestone 27: My Orders Frontend Page
✅ Tasks Completed:
- 📝 Created a `MyOrders.jsx` page to display all user orders.
- 🌐 Sent a POST request to `/api/v2/order/orders` with the user’s email to fetch orders.
- 🖥️ Displayed order details including products, address, status, and total amount.
- 🚀 Added a "My Orders" link to the navbar for navigation.

---

### 📜 Milestone 28: Cancel Order Functionality
✅ Tasks Completed:
- 📝 Added a "Cancel Order" button to each order in `MyOrders.jsx`, displayed only if the order isn’t "Cancelled".
- 🌐 Created a `PUT /api/v2/order/cancel/:orderId` endpoint in `routes/order.js` and `controller/order.js`.
- 🛠️ Implemented logic to update an order’s status to "Cancelled" using the order ID.
- 🔗 Updated the frontend to call the cancel endpoint and reflect the status change.

---

### 📜 Milestone 29: Payment Options with PayPal Setup
✅ Tasks Completed:
- 📝 Added payment options (COD and Online Payment) with radio buttons to `OrderConfirmation.jsx`.
- 🌐 Set up UI to display a PayPal placeholder when "Online Payment" is selected.
- 🛠️ Configured COD orders to use the `/place` endpoint; online payment logs a placeholder message.
- 🔗 Used existing PayPal sandbox accounts and obtained the Client ID for future integration.

---

### 📜 Milestone 30: PayPal Payment Integration
✅ Tasks Completed:
- 📝 Installed `react-paypal-js` and integrated `PayPalScriptProvider` and `PayPalButtons` in `OrderConfirmation.jsx`.
- 🌐 Used the PayPal Sandbox Client ID to enable online payments via PayPal API.
- 🛠️ Updated the `Order` schema and `placeOrder` endpoint to store `paymentMethod` and `paymentDetails`.
- 🔗 Handled COD and PayPal payments, redirecting to `/order-success` on completion.

---

### 📜 Milestone 31: Global State Management with Redux
✅ Tasks Completed:
- 📝 Installed `react-redux`, `redux`, and `@reduxjs/toolkit` in the frontend folder.
- 🌐 Created a `store` folder in `frontend/src/` with `store.js` and `userActions.js`.
- 🛠️ Configured a Redux store in `store.js` with a `userReducer` to manage the user’s email.
- 🔗 Defined a `setEmail` action in `userActions.js` to update the email state.
- 📦 Wrapped the `App` component in a `Provider` in `frontend/src/index.js` to connect the store to the app.

---

### 📜 Milestone 32: Global State Management with Redux - Email Integration
✅ Tasks Completed:
- 🔧 Updated `Login.jsx` to dispatch the user's email to the Redux store using `useDispatch` and `setEmail` after successful login.
- 📡 Accessed the email in `Profile.jsx`, `MyOrders.jsx`, `Cart.jsx`, and `Home.jsx` using `useSelector`.
- 🛠️ Used the Redux email in `MyOrders.jsx` API call instead of hardcoding.
- 📝 Committed and pushed all changes to the GitHub repository.
- ✅ Tested the application to confirm the email is stored and displayed across pages after login.

---

### 📜 Milestone 33: JWT Token Creation and Cookie Storage
✅ Tasks Completed:
- 📦 Installed `jsonwebtoken` in the backend.
- 🔑 Added `/login` route in `routes/user.js` to create a JWT token with `id` and `email`.
- 🍪 Stored the token in an HTTP-only cookie with a 1-hour expiration.
- 🛠️ Added `comparePassword` method to `User.js` for password verification.
- ✅ Tested the login endpoint to confirm the cookie is set in the browser.

---

### 📜 Milestone 34: JWT Token Validation
✅ Tasks Completed:
- 🔑 Implemented frontend logic to extract the JWT token from the browser cookie and send it to the backend in API requests.
- 🛠️ Created a backend middleware function to validate the JWT token received from the client.
- 🔒 Applied the middleware to protect routes, ensuring users cannot access pages without a valid login.
- ✅ Tested the authentication flow to confirm secure access to protected pages.

---

### 📜 Milestone 35: Project Deployment
✅ Tasks Completed:
- 🌐 Deployed the backend to a hosting platform (e.g., Heroku) and obtained the deployment link.
- 🔗 Updated the frontend to replace localhost backend URLs with the deployed backend URL.
- 🚀 Deployed the frontend to a hosting platform (e.g., Vercel) and obtained the deployment link.
- ✅ Pushed the final code to the GitHub repository, ensuring it is publicly accessible.
- 🧪 Tested the deployed application to confirm that authentication, product listings, cart, orders, and payments function correctly.

---

## 🛠️ Tech Stack

### Frontend:
⚛️ React.js / Next.js  
🎨 Tailwind CSS / Bootstrap  
🛠️ Redux for state management  

### Backend:
🖥️ Node.js / Express.js  
🟢 MongoDB  
🔑 JWT Authentication
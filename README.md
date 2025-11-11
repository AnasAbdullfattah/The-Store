# The Store API (Backend)

## Description

This is a **robust and scalable RESTful API** designed to power a modern e-commerce platform. Built with **Node.js** and the **Express** framework, it strictly adheres to the **Model-View-Controller (MVC)** architectural pattern, ensuring clean separation of concerns, maintainability, and reusability. Data is persisted using **MongoDB**, leveraged through the **Mongoose** ODM.

The API provides core functionalities for managing products and interacting with a digital storefront.

---

## Features

* **Product Management (CRUD):** Full support for creating, reading, updating, and deleting products.
* **MongoDB Integration:** Uses Mongoose for schema definition, validation, and object data modeling.
* **RESTful Design:** Clean, resource-based endpoints using standard HTTP methods (GET, POST, PUT, DELETE).
* **Scalable Architecture:** Implements the **MVC structure** with separate modules for routes, controllers, and models.
* **Environment Configuration:** Secure handling of sensitive data using `.env` files.

---

## Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **Node.js** | JavaScript Runtime Environment. |
| **Express.js** | Minimalist web application framework for Node.js. |
| **MongoDB** | NoSQL database for flexible data storage. |
| **Mongoose** | Object Data Modeling (ODM) library for MongoDB and Node.js. |
| **nodemon** | Utility for automatically restarting the server during development. |
| **dotenv** | Module to load environment variables from a `.env` file. |

---

## Installation and Setup

Follow these steps to get your development environment running

### Prerequisites

* [Node.js](https://nodejs.org/en/) (LTS version recommended)
* [MongoDB](https://www.mongodb.com/try/download/community) (running locally or via MongoDB Atlas)

### Step 1: Clone the repository

```
git clone [https://github.com/AnasAbdullfattah/The-Store-API.git](https://github.com/AnasAbdullfattah/The-Store-API.git)
cd The-Store-API
```

Step 2: Install dependencies
```
npm install
```

Step 3: Create Environment Variables
Create a file named .env in the root directory of the project and add the following variables:

```
PORT=5000
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<databaseName>?retryWrites=true&w=majority"
```
Note: Replace the placeholders (<username>, <password>, <cluster>, etc.) with your actual MongoDB connection details

Step 4: Run the Server
To start the server in development mode (using nodemon):
```
npm run dev
```
The API will be available at: http://localhost:5000/

API Endpoints (Product Module)
Assuming the base path is /api/products, the API supports standard REST operations for the product resource
```
Method,Endpoint,Description
GET,/api/products,Retrieve a list of all products
GET,/api/products/:id,Retrieve a specific product by its ID
POST,/api/products,Create a new product
PUT,/api/products/:id,Update an existing product by its ID
DELETE,/api/products/:id,Delete a specific product by its ID
```
Project Structure
The project follows the MVC pattern for clean organization:
```
Backend/
├── config/
│   └── db.js         # Database connection logic
├── controllers/
│   └── product.controller.js # Business logic for products
├── models/
│   └── product.model.js    # Mongoose schema for the Product
├── routes/
│   └── product.routes.js   # Defines API endpoints and links to controllers
└── server.js           # Application entry point (server initialization)
```

```
This project is licensed under the MIT License
```

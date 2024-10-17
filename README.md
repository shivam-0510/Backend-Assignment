**Comic Book Store API**
========================

This is a backend API for managing a comic book store inventory. It is built using **Node.js** with **Express.js** and **MongoDB**. The API supports CRUD operations for comic books, along with pagination, filtering, and sorting of the inventory. This project is designed to manage comic books with attributes such as name, author, price, condition, and more.

**Features**
------------

*   Create, Read, Update, and Delete (CRUD) operations for comic books.
    
*   Pagination and sorting for retrieving large lists of comic books.
    
*   Filtering comic books based on author, year of publication, price, and condition.
    
*   Robust error handling and input validation using Joi.
    
*   MongoDB as the database with Mongoose for modeling.
    

**Technologies Used**
---------------------

*   **Node.js** and **Express.js** for building the RESTful API.
    
*   **MongoDB** for database management.
    
*   **Mongoose** for MongoDB object modeling.
    
*   **Joi** for input validation.
    
*   **dotenv** for environment variable management.
    
*   **Postman** for API testing.
    

**Prerequisites**
-----------------

Before you begin, ensure you have the following installed:

*   Node.js (version 14 or higher)
    
*   [MongoDB](https://www.mongodb.com/try/download/community)
    
*   Postman (for API testing)
    

**Getting Started**
-------------------

### 1\. **Clone the Repository:**
```
git clone https://github.com/yourusername/comic-book-store.git
```

### 2\. **Install Dependencies:**
```
npm install
```
### 3\. **Set up environment variables:**
```
MONGO_URI=mongodb://localhost:27017/comicStoreDB
PORT=5000
```
### 4\. **Start the application:**
```
nodemon app.js
```


# Node.js E-Commerce Application

Full-featured e-commerce website with MVC architecture using Node.js and MongoDB

## 📋 Overview

A complete e-commerce platform with user authentication, role-based access control, product management, and order processing capabilities.

![Homepage](https://user-images.githubusercontent.com/60510780/133971728-f4550a65-5d03-4e8b-8072-3aabf230041b.png)
![Product Listing](https://user-images.githubusercontent.com/60510780/133971790-17530a0e-2911-43b1-809f-fc72d1fc8119.png)
![Product Details](https://user-images.githubusercontent.com/60510780/133971832-d79bf36e-d11f-42f1-8442-4c31c8ed5d9c.png)
![Cart](https://user-images.githubusercontent.com/60510780/133971868-2aceb526-71da-432e-a4a8-fae6fa18a7bd.png)
![Admin Panel](https://user-images.githubusercontent.com/60510780/133972361-d1707dba-f3d5-453d-88c1-4abb9ee1a91f.png)
![Product Management](https://user-images.githubusercontent.com/60510780/133972415-1a61069f-138a-4043-92e3-0b6895d34d69.png)
![Order Management](https://user-images.githubusercontent.com/60510780/133972460-b53057fa-5b43-4378-a5a7-11fe684936a6.png)

## 📂 Structure

- **[controllers/](controllers/)** - Business logic handlers
- **[models/](models/)** - MongoDB data models (Mongoose)
- **[routes/](routes/)** - API and page routing
- **[views/](views/)** - Pug template files
- **[middleware/](middleware/)** - Custom middleware functions
- **[public/](public/)** - Static assets
- **[utility/](utility/)** - Helper functions

## ✨ Features

- User registration and authentication
- Role-based access (Admin/Customer)
- Product and category CRUD operations (Admin only)
- Shopping cart and order processing
- Email notifications on registration
- Password reset functionality
- Image upload for products
- Input validation and CSRF protection
- Session management

## 🚀 Getting Started

### Configuration
1. Update MongoDB connection string in configuration file
2. Add email service API key for notifications

### Run Application
```bash
npm start
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Template Engine**: Pug
- **Key Modules**: 
  - Express Session & Cookie Parser
  - Multer (file uploads)
  - CSRF protection
  - Nodemon (development)

## 🔐 User Roles

- **Customer**: Browse products, add to cart, place orders
- **Admin**: Full product/category management, order oversight

---

*MVC e-commerce application with authentication and role-based access*

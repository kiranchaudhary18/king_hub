# 🏰 King Hub - Food Delivery Platform  

King Hub is a modern and user-friendly food delivery platform designed to connect users with their favorite restaurants. It offers seamless order placement, real-time tracking, and a responsive UI for an excellent food ordering experience.

---

## 🚀 Features  

- **User Authentication** - Secure login and signup functionality  
- **Browse Restaurants** - View available restaurants and their menus  
- **Add to Cart** - Users can add, update, and remove items from their cart   
- **Admin Panel** - Manage restaurants, menu items, and user orders  
- **Payment Integration** - Secure payment processing (coming soon)  
- **Responsive Design** - Works seamlessly on mobile and desktop devices  

---

## 🛠 Tech Stack  

### Frontend (React)  
- React.js (for UI)  
- React Router (for navigation)  
- Axios (for API calls)  
- Styled Components / Tailwind CSS (for UI styling)  

### Backend (Node.js + Express)  
- Node.js  
- Express.js (RESTful API)  
- MongoDB + Mongoose (Database)  
- bcrypt (Password hashing)  

---

## 📂 Project Structure  

```
FOOD_DELIVERY_BACKEND/
│── models/                  # Database models
│   ├── Cart.js
│   ├── MenuItem.js
│   ├── Restaurant.js
│   ├── User.js
│
│── routes/                  # API routes
│   ├── auth.js
│   ├── cart.js
│   ├── menu.js
│   ├── restaurants.js
│   ├── search.js
│
│── node_modules/
│── .env                      # Environment variables
│── .gitignore                # Git ignore file
│── package-lock.json         # Dependency lock file
│── package.json              # Dependencies
│── server.js                 # Main entry point
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/KingHub.git
cd KingHub
```

### 2️⃣ Backend Setup  
```sh
cd backend
npm install
npm start  # Runs on http://localhost:5000
```

### 3️⃣ Frontend Setup  
```sh
cd frontend
npm install
npm start  # Runs on http://localhost:3000
```

---

## 📡 API Endpoints  

### **User Routes**
| Method | Endpoint        | Description                  |
|--------|----------------|------------------------------|
| POST   | /api/auth/signup | Register a new user       |
| POST   | /api/auth/login  | Login user                |

### **Restaurant & Menu Routes**
| Method | Endpoint                 | Description               |
|--------|---------------------------|---------------------------|
| GET    | /api/restaurants          | Get all restaurants       |
| GET    | /api/restaurants/:id      | Get single restaurant     |
| GET    | /api/menus/:restaurantId  | Get menu of a restaurant  |

---

## 🎨 UI Design  

The UI design for **King Hub** is created using **Figma**, ensuring a modern and intuitive user experience.

---

## 🚀 Future Improvements  
- 📦 **Live Order Tracking**  
- 💳 **Payment Gateway Integration**  
- 🔔 **Push Notifications for Orders**  
- 📊 **Admin Dashboard for Analytics**  

---

## 💡 Contributing  

Contributions are welcome! If you’d like to add new features, fix bugs, or improve the documentation, feel free to fork this repository and submit a pull request.

---

## 📜 License  

This project is licensed under the MIT License.  

---

### 🔗 Connect with Me  
If you have any questions or suggestions, feel free to reach out!  

📧 Email: vasarasujal.cg@gmail.com  
🐙 GitHub: [VasaraSujal](https://github.com/VasaraSujal)  

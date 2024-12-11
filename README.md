# **React Clothing Items App** 👚👕👗

---

## **Table of Contents**

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Project Structure](#project-structure)
8. [Repository Link](#repository-link)
9. [Contributing](#contributing)
10. [License](#license)

---

## **About the Project** 📄

A React-based web application that allows users to browse, like, and manage clothing items. Authorized users can add, delete, and update items, while guests can view items but cannot interact with them.

---

## **Features** ✨

- **User Authentication:** Registration, login, and token-based authentication.
- **CRUD Operations:** Add, update, and delete clothing items.
- **Like System:** Users can like/unlike items.
- **Profile Management:** Update user profile information (name & avatar).
- **Protected Routes:** Secure routes using `react-router-dom`.

---

## **Tech Stack** 🛠️

- **Frontend:**
  - React.js
  - React Router
  - CSS Modules
  - Context API
- **Backend:**
  - Node.js (Express.js) _(Assumed)_
  - MongoDB _(Assumed)_
- **Tools:**
  - ESLint, Prettier
  - Vite/Webpack _(or your build tool)_
  - Git & GitHub

---

## **Installation** 🚀

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ttruedell/se_project_express.git
   cd se_project_express
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

4. **Environment Variables:**  
   Create a `.env` file at the root with:

   ```
   REACT_APP_API_BASE_URL=http://localhost:3001
   ```

---

## **Usage** 🎯

1. **Run the App:**

   ```bash
   npm start
   ```

2. **Visit the App:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Register or Log In:**

   - Register a new account or log in with existing credentials.

4. **Interact with Items:**
   - Add, delete, like/unlike, and update clothing items.

---

## **API Endpoints** 🔗

### **Authentication:**

- `POST /signup` - Register a new user
- `POST /signin` - Login user and return token

### **User Management:**

- `GET /users/me` - Get current user info
- `PATCH /users/me` - Update user profile

### **Clothing Items:**

- `GET /items` - Get all items
- `POST /items` - Add a new item (authorized)
- `DELETE /items/:id` - Delete an item (authorized)
- `PUT /items/:id/likes` - Like an item (authorized)
- `DELETE /items/:id/likes` - Remove like from an item (authorized)

---

## **Project Structure** 📂

```
/src
  ├── components
  │   ├── AddItemModal
  │   ├── App
  │   ├── ClothesSection
  │   ├── ConfirmDeleteModal
  │   ├── EditProfileModal
  │   ├── Footer
  │   ├── Header
  │   ├── ItemCard
  │   ├── ItemModal
  │   ├── LoginModal
  │   ├── LogOutConfirmModal
  │   ├── Main
  │   ├── ModalWithForm
  │   ├── Profile
  │   ├── ProtectedRoute
  │   ├── RegisterModal
  │   ├── SideBar
  │   ├── ToggleSwitch
  │   └── WeatherCard
  │
  ├── contexts
  │   ├── CurrentTemperatureUnitContext.js
  │   └── CurrentUserContext.js
  │
  ├── utils
  │   ├── api.js
  │   ├── auth.js
  │   ├── constants.js
  │   └── weatherApi.js
  │
  ├── index.css
  └── main.jsx
```

---

## **Repository Link** 📂

Use the following SSH link to clone the repository:

```bash
git clone git@github.com:ttruedell/se_project_express.git
```

[GitHub Repository - se_project_express](https://github.com/ttruedell/se_project_express)

---

## **Project Maintainer**

Maintained by [ttruedell](https://github.com/ttruedell)

---

## **Contributing** 🤝

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

---

## **License** 📝

Distributed under the MIT License. See `LICENSE` for more information.

---

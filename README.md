# Full Stack React & Node.js Application

A simple full-stack web application built using **React.js** for the frontend and **Node.js with Express.js** for the backend.

This project demonstrates how a React frontend communicates with a Node.js backend through REST APIs and displays data received from the server.

## 🚀 Features

- React.js frontend built using Vite.
- Node.js backend using Express.js.
- REST API integration.
- Frontend and backend communication using Fetch API.
- JSON-based data exchange.
- CORS configuration for cross-origin communication.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript | Application logic |
| Node.js | Backend runtime |
| Express.js | Backend server and API |
| Vite | Frontend development tool |
| HTML & CSS | Structure and styling |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
react_app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/Gatil1616/fullstack-react-app.git
```

Navigate to the project directory:

```bash
cd fullstack-react-app
```

### 2. Setup Backend

Open a terminal and navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend will run at:

`http://localhost:5000`

### 3. Setup Frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will run at:

`http://localhost:5173`

## 🔗 API Endpoint

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/message` | Returns a message from the backend |

### Sample API Response

```json
{
  "message": "Hello from my Node.js Backend!"
}
```

## 🔄 Application Workflow

1. The user opens the React application in the browser.
2. React sends a GET request to the Node.js backend.
3. Express.js handles the API request.
4. The backend returns a JSON response.
5. React receives the response using the Fetch API.
6. The message is displayed on the frontend.

## 🎯 Learning Objectives

Through this project, I explored:

- Building frontend applications using React.js.
- Creating backend servers using Node.js and Express.js.
- Understanding REST API fundamentals.
- Connecting frontend and backend applications.
- Working with JSON responses.
- Using Git and GitHub for version control.

## 👨‍💻 Author

**Gatil Dhawan**

GitHub: [Gatil1616](https://github.com/Gatil1616)

---

⭐ If you find this project useful, feel free to explore the repository!

# 📋 Modern Task Manager

A sleek, modern task management application built with Node.js, Express.js, and vanilla JavaScript. Features a beautiful glassmorphism UI with smooth animations and responsive design.

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful translucent effects with backdrop blur
- **Gradient Backgrounds** - Eye-catching color gradients throughout the interface
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Ready** - Modern color scheme with accessibility in mind

### 🚀 Functionality
- **Create Tasks** - Add new tasks with unique IDs and descriptions
- **View All Tasks** - Display tasks in an elegant card-based layout
- **Update Tasks** - Mark tasks as completed or pending
- **Delete Tasks** - Remove tasks with confirmation dialog
- **Real-time Feedback** - Toast notifications for all actions
- **Auto-refresh** - Automatic task list updates after operations
- **Form Validation** - Client-side validation with user-friendly error messages

### 🔧 Technical Features
- **RESTful API** - Clean API endpoints for all CRUD operations
- **Persistent Storage** - Uses node-persist for data persistence
- **Error Handling** - Comprehensive error handling on both frontend and backend
- **Modern JavaScript** - ES6+ features with async/await
- **Separated Architecture** - Clean separation between frontend and backend
- **CORS Enabled** - Cross-origin resource sharing for frontend-backend communication

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── .node-persist/         # Auto-generated storage directory
│   ├── node_modules/          # Backend dependencies
│   ├── route/
│   │   └── app_route.js       # Task API routes
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies and scripts
│   └── package-lock.json      # Lock file for dependencies
├── frontend/
│   ├── index.html             # Frontend HTML
│   └── style.css              # Modern CSS styles
├── .gitignore                 # Git ignore file
└── README.md                  # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14.0 or higher)
- npm (comes with Node.js)
- A modern web browser
- Code editor (VS Code recommended)

### Step 1: Clone or Download
```bash
# If using git
git clone <your-repository-url>
cd task-manager

# Or download and extract the ZIP file
```

### Step 2: Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Start the backend server
npm start
# or
node server.js
```

The backend server will start on `http://localhost:5000`

### Step 3: Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Option 1: Use Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"

# Option 2: Use Python's built-in server
python -m http.server 3000
# or for Python 3
python3 -m http.server 3000

# Option 3: Use Node.js http-server (install globally first)
npm install -g http-server
http-server -p 3000
```

The frontend will be available at `http://localhost:3000` (or your chosen port)

### Step 4: Verify Setup
1. Backend health check: `http://localhost:5000/health`
2. Frontend application: `http://localhost:3000`
3. Test API: `http://localhost:5000/api/users`

## 📦 Dependencies

### Backend Dependencies (backend/package.json)
```json
{
  "name": "task-manager-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "node-persist": "^3.1.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

### Frontend Dependencies
- **No npm dependencies** - Uses vanilla JavaScript
- **CDN Resources** (included in HTML):
  - Font Awesome 6.4.0 - For beautiful icons
  - Modern System Fonts - Apple system fonts, Segoe UI, etc.

## 🎯 API Endpoints

**Base URL**: `http://localhost:5000/api/users`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/users` | Get all tasks | - |
| `GET` | `/api/users/:id` | Get task by ID | - |
| `POST` | `/api/users` | Create new task | `{ id, title, completed? }` |
| `PUT` | `/api/users/:id` | Update task | `{ title?, completed? }` |
| `DELETE` | `/api/users/:id` | Delete task | - |

### Example API Usage

#### Create a Task
```javascript
POST http://localhost:5000/api/users
Content-Type: application/json

{
  "id": "task-001",
  "title": "Complete project documentation",
  "completed": false
}
```

#### Update a Task
```javascript
PUT http://localhost:5000/api/users/task-001
Content-Type: application/json

{
  "completed": true
}
```

#### Get All Tasks
```javascript
GET http://localhost:5000/api/users
```

## 🎨 UI Components

### Design System
- **Primary Colors**: Purple gradient (#667eea to #764ba2)
- **Secondary Colors**: Green gradient (#48bb78 to #38b2ac)
- **Danger Colors**: Red gradient (#f56565 to #e53e3e)
- **Typography**: System fonts with modern font stack
- **Border Radius**: Rounded corners (8px to 24px)
- **Shadows**: Layered box shadows for depth
- **Animations**: CSS transitions and transforms

### Interactive Elements
- **Buttons**: Gradient backgrounds with hover lift effects
- **Form Inputs**: Focus states with color transitions
- **Task Cards**: Hover effects with animated side borders
- **Notifications**: Slide-in toast messages
- **Loading States**: Animated spinners

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Backend Configuration
- **Port**: 5000 (default)
- **CORS Origins**: localhost:3000, 127.0.0.1:5500, localhost:5500
- **Storage**: `.node-persist/storage` directory
- **API Base**: `/api/users`

### Frontend Configuration
- **API Base URL**: `http://localhost:5000/api/users`
- **Default Port**: 3000 (when using Live Server)
- **Supported Browsers**: Chrome, Firefox, Safari, Edge

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `frontend/style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea, #764ba2);
  --secondary-gradient: linear-gradient(135deg, #48bb78, #38b2ac);
  --danger-gradient: linear-gradient(135deg, #f56565, #e53e3e);
}
```

### Adding New Features
1. **Backend**: Add new endpoints in `backend/route/app_route.js`
2. **Frontend**: Update JavaScript in `frontend/index.html`
3. **Styling**: Add styles in `frontend/style.css`

## 🐛 Troubleshooting

### Common Issues

#### Backend Issues
```bash
# Check if backend is running
curl http://localhost:5000/health

# Check if port 5000 is in use
netstat -ano | findstr :5000

# Backend not starting
cd backend
npm install
node server.js
```

#### Frontend Issues
```bash
# CORS errors - ensure backend is running first
# Check browser console for errors
# Verify API URL in frontend code matches backend

# CSS not loading
# Check file paths in index.html
# Clear browser cache (Ctrl+F5)
```

#### API Connection Issues
1. Ensure backend server is running on port 5000
2. Check CORS configuration in backend
3. Verify frontend is making requests to correct URL
4. Check browser Network tab for failed requests

### Debug Commands
```bash
# Test backend health
curl http://localhost:5000/health

# Test API endpoints
curl http://localhost:5000/api/users
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"id":"test","title":"Test Task"}'

# Check backend logs
cd backend
node server.js
```

## 🚀 Development

### Running in Development Mode

#### Backend (with auto-restart)
```bash
cd backend
npm install -g nodemon  # Install nodemon globally
npm run dev             # Uses nodemon for auto-restart
```

#### Frontend (with Live Reload)
```bash
cd frontend
# Use VS Code Live Server extension
# Or use browser-sync for auto-reload
npm install -g browser-sync
browser-sync start --server --files "*.html, *.css"
```

### File Structure Best Practices
- Keep backend and frontend completely separate
- Use environment variables for configuration
- Implement proper error handling
- Follow RESTful API conventions
- Use consistent naming conventions

## 🚀 Deployment

### Local Development
```bash
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Frontend
cd frontend
# Use your preferred local server
```

### Production Deployment
1. **Backend**: Deploy to services like Heroku, Railway, or DigitalOcean
2. **Frontend**: Deploy to Netlify, Vercel, or GitHub Pages
3. **Environment Variables**: Configure for production URLs
4. **CORS**: Update allowed origins for production domains

### Environment Variables
```bash
# Backend
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make changes in appropriate directory (backend/ or frontend/)
4. Test both backend and frontend
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/new-feature`)
7. Create a Pull Request

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify both backend and frontend are running
3. Check browser developer console for errors
4. Ensure file structure matches documentation
5. Test API endpoints directly using curl or Postman

## 🎉 Acknowledgments

- **Express.js** - Fast, unopinionated web framework
- **node-persist** - Simple local storage for Node.js
- **Font Awesome** - Beautiful icons
- **Modern CSS** - Glassmorphism and gradient design trends
- **CORS** - Cross-origin resource sharing middleware

---

**Happy Task Managing! 🎯**

> **Note**: This application uses a separated architecture with independent backend and frontend. Make sure both servers are running for full functionality.

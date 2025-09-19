# ReactJS Frontend Developer Assignments

This project contains implementations for both Assignment 1 (Basic) and Assignment 2 (Advanced) for the ReactJS Frontend Developer position.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd reactjs-assignments
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Toggle between assignments**
   - Open `src/index.tsx`
   - Change `SHOW_ADVANCED` to `false` for Assignment 1
   - Change `SHOW_ADVANCED` to `true` for Assignment 2

## 📋 Assignments Overview

### Assignment 1 - Basic Implementation
**Target:** Beginner React developers
**Features:**
- ✅ Fetch user data from JSONPlaceholder API
- ✅ Display user profiles with DiceBear avatars  
- ✅ Bootstrap styling with responsive cards
- ✅ Loading spinner while fetching data
- ✅ Error handling with retry functionality
- ✅ Hover effects and smooth animations

**Technologies:**
- React 18 with TypeScript
- Bootstrap 5
- Font Awesome icons
- CSS animations

### Assignment 2 - Advanced Implementation  
**Target:** Experienced React developers
**Features:**
- ✅ All Assignment 1 features
- ✅ Ant Design UI components
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Edit user functionality with modal forms
- ✅ Delete users with confirmation
- ✅ Like/Unlike functionality
- ✅ Advanced state management (lifting state up)
- ✅ Form validation and error handling

**Technologies:**
- React 18 with TypeScript
- Ant Design 5
- Advanced React patterns
- Responsive grid system

## 🏗️ Project Structure

```
src/
├── components/
│   ├── UserCard.tsx              # Basic user card (Assignment 1)
│   ├── UserCardAdvanced.tsx      # Advanced user card (Assignment 2)
│   ├── LoadingSpinner.tsx        # Loading component (Assignment 1)
│   ├── LoadingSpinnerAdvanced.tsx # Loading component (Assignment 2)
│   ├── EditUserModal.tsx         # Edit user modal (Assignment 2)
│   └── LoadingSpinner.css        # Custom loading animations
├── types/
│   └── User.ts                   # TypeScript interfaces
├── App.tsx                       # Assignment 1 main component
├── App-Advanced.tsx              # Assignment 2 main component
├── App.css                       # Global styles
└── index.tsx                     # Entry point with assignment toggle
```

## 🎨 Design Features

### Assignment 1 (Basic)
- Clean, professional card layout
- Bootstrap-based responsive design
- Smooth hover animations
- Custom loading spinner
- Font Awesome icons
- Error states with retry functionality

### Assignment 2 (Advanced)
- Modern Ant Design components
- Mobile-first responsive design
- Interactive elements (like, edit, delete)
- Modal forms with validation
- Advanced state management
- Sophisticated user interactions

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (xs: 24 cols)
- **Tablet:** 768-1024px (sm: 12 cols, md: 8 cols)  
- **Desktop:** > 1024px (lg: 6 cols)

## 🔧 API Integration

### Users API
- **Endpoint:** `https://jsonplaceholder.typicode.com/users`
- **Method:** GET
- **Response:** Array of 10 user objects

### Avatar API  
- **Base URL:** `https://avatars.dicebear.com/v2/avataaars/`
- **Pattern:** `{username}.svg?options[mood][]=happy`
- **Fallback:** Placeholder image on error

## ✨ Key Features Demonstrated

### Assignment 1 Skills
- [x] Create React App setup
- [x] JSX syntax and components
- [x] Props and component composition  
- [x] State management with useState
- [x] Side effects with useEffect
- [x] API data fetching
- [x] Conditional rendering
- [x] List rendering with map()
- [x] Event handling
- [x] CSS styling and animations

### Assignment 2 Additional Skills
- [x] Third-party UI library integration (Ant Design)
- [x] Complex state management
- [x] Form handling and validation
- [x] Modal management
- [x] Responsive design patterns
- [x] Event handling (CRUD operations)
- [x] Lifting state up pattern
- [x] Advanced TypeScript usage
- [x] Component lifecycle optimization

## 🚀 Deployment

### Build the project
```bash
npm run build
```

### Deploy with Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Build the app: `npm run build`
3. Navigate to build folder: `cd build`  
4. Deploy: `vercel --prod`

### Alternative Deployment Options
- Netlify
- GitHub Pages
- Firebase Hosting
- Surge.sh

## 📊 Performance Optimizations

- Lazy loading of images
- Error boundaries for graceful failures
- Optimized re-renders with proper key props
- Efficient state updates
- Responsive images with proper sizing

## 🔍 Testing the Applications

### Assignment 1 Testing
- ✅ Desktop layout (Chrome recommended)
- ✅ Data fetching and display
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive card layout

### Assignment 2 Testing  
- ✅ Mobile responsiveness (< 768px)
- ✅ Tablet layout (768-1024px)
- ✅ Desktop layout (> 1024px)
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Form validation
- ✅ Modal interactions
- ✅ Like functionality

## 📄 Assignment Requirements Checklist

### Assignment 1 ✅
- [x] Fetch data from users API
- [x] Display user profiles with avatars
- [x] Bootstrap styling  
- [x] Loading indicator
- [x] Desktop-focused design
- [x] Exact replica of demo functionality

### Assignment 2 ✅
- [x] All Assignment 1 features
- [x] Ant Design implementation
- [x] Responsive design (mobile/tablet/desktop)
- [x] Edit user modal with form
- [x] Delete functionality
- [x] Like/unlike feature
- [x] Advanced state management
- [x] Event handling and form validation

## 🤝 Submission Guidelines

1. **Code Sharing:**
   - Create public GitHub repository
   - Ensure `node_modules` is excluded
   - Share repository link via email

2. **Live Demo:**
   - Deploy to hosting platform
   - Test on Chrome browser
   - Verify responsive behavior
   - Share live URL

## 💡 Additional Notes

- Both assignments use the same API endpoints
- Type safety implemented throughout with TypeScript
- Error handling and loading states included
- Modern React patterns and best practices followed
- Production-ready code with proper organization
- Comprehensive commenting and documentation

## 🐛 Troubleshooting

### Common Issues
- **CORS Errors:** The JSONPlaceholder API should work without CORS issues
- **Avatar Loading:** Fallback images provided for failed avatar loads
- **Responsive Issues:** Test on actual devices for best results
- **Build Errors:** Ensure all dependencies are installed correctly

### Support
For any issues or questions, please check:
1. Console for error messages
2. Network tab for API call issues  
3. Dependencies are properly installed
4. Node.js version compatibility

---

**Made with ❤️ for Simplyfi Softech**
# 🛍️ ShopHub - Modern E-commerce App

A modern, responsive e-commerce web application built with React, featuring a clean design, shopping cart functionality, and comprehensive testing.

## ✨ Features

### 🎨 **User Interface**
- **Modern Design**: Clean, responsive layout with gradient backgrounds and smooth animations
- **Mobile-First**: Fully responsive design that works on all devices
- **Intuitive Navigation**: Easy-to-use navigation with cart count indicator
- **Loading States**: Elegant loading spinners and states

### 🛒 **Shopping Experience**
- **Product Catalog**: Browse products fetched from a real API
- **Product Details**: View detailed product information including ratings and descriptions
- **Quantity Control**: Easily adjust quantities before adding to cart
- **Shopping Cart**: Add, remove, and view items in your cart
- **Order Summary**: View subtotal, tax, shipping, and total calculations
- **Local Storage**: Cart persists across browser sessions

### 🔧 **Technical Features**
- **React Router**: Client-side routing for seamless navigation
- **State Management**: Efficient cart state management with React hooks
- **API Integration**: Real product data from Fake Store API
- **CSS Modules**: Organized styling with component-specific CSS files
- **Testing**: Comprehensive test suite with React Testing Library

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedTel18/shop-App.git
   cd shop-App/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── component/           # Reusable components
│   ├── cart-Item.jsx   # Product card for shop page
│   ├── cart-summary.jsx # Cart item summary
│   └── nav-bar.jsx     # Navigation component
├── pages/              # Page components
│   ├── home.jsx        # Landing page
│   ├── shop.jsx        # Product catalog
│   └── cart.jsx        # Shopping cart
├── styles/             # CSS files
│   ├── global.css      # Global styles
│   ├── component/      # Component-specific styles
│   └── pages/          # Page-specific styles
├── test/               # Test files
│   ├── setup.js        # Test configuration
│   ├── mockData.js     # Mock data for testing
│   └── *.test.jsx      # Component tests
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🧪 Testing

The project includes comprehensive tests for all components using **React Testing Library** and **Vitest**.

### Run Tests
```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Test Coverage
- ✅ **CartItem Component**: Product display, quantity controls, add to cart functionality
- ✅ **CartSummary Component**: Price calculations, remove functionality
- ✅ **Navigation Component**: Link rendering, cart count display

### Testing Philosophy
- **User-Centric Testing**: Tests focus on user interactions and behavior
- **No Router Testing**: We test our components, not external libraries
- **Comprehensive Coverage**: Happy paths, edge cases, and error states
- **Mock External Dependencies**: API calls and browser APIs are properly mocked

## 🎨 Styling

### Design System
- **Color Palette**: Modern blue gradients with clean grays
- **Typography**: Inter font family for excellent readability
- **Spacing**: Consistent spacing using a systematic scale
- **Animations**: Smooth hover effects and transitions

### CSS Architecture
- **Component-Scoped Styles**: Each component has its own CSS file
- **Global Styles**: Minimal global styles for resets and utilities
- **Responsive Design**: Mobile-first approach with logical breakpoints
- **Modern CSS**: Uses Flexbox, Grid, and CSS custom properties

## 🛠️ Built With

### Core Technologies
- **React 19** - Modern React with hooks
- **React Router 7** - Client-side routing
- **Vite** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting and formatting
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities

### APIs
- **Fake Store API** - Product data source

## 📱 Pages Overview

### 🏠 **Home Page**
- Welcome hero section with call-to-action
- Feature highlights with icons
- Responsive grid layout

### 🛍️ **Shop Page**
- Product grid with hover effects
- Loading states for API data
- Product cards with images, ratings, and descriptions

### 🛒 **Cart Page**
- Cart items with remove functionality
- Order summary with tax and shipping calculations
- Empty cart state with navigation
- Free shipping threshold ($50+)

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Run tests with UI
```

## 🌟 Key Features Implemented

### State Management
- Cart state managed with React hooks
- Persistent storage using localStorage
- Optimistic UI updates

### User Experience
- Quantity controls with validation
- Cart count badge in navigation
- Smooth animations and transitions
- Loading states and error handling

### Performance
- Component-based architecture
- Efficient re-rendering with proper keys
- Image optimization and lazy loading
- Fast development with Vite



## 🙏 Acknowledgments

- **Fake Store API** for providing product data
- **React Team** for the amazing framework
- **Vite Team** for the blazing fast build tool
- **Testing Library** for excellent testing utilities


Made with ❤️ by [MohamedTel18](https://github.com/MohamedTel18)
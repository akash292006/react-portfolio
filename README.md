Student Portfolio Application

This project is a React-based student portfolio application built using Vite. It demonstrates a clean and minimal project structure while following modern React development practices. The application serves as a foundation for showcasing personal information, projects, and skills.

Project Structure Overview

The core functionality of the application is handled through the following files:

##index.html

The index.html file is the main HTML entry point of the application.

Responsibilities:

Defines the base HTML structure

Contains the root DOM element (<div id="root"></div>) where the React application is mounted

Loads the JavaScript module that initializes the React application

This file does not contain application logic but provides the container required for React rendering.

main.jsx

The main.jsx file is the primary JavaScript entry point for the React application.

Responsibilities:

Imports React and ReactDOM

Imports global CSS styles

Renders the root React component (App) into the DOM using ReactDOM.createRoot

This file acts as the connection between the static HTML file and the React component tree.

App.jsx

The App.jsx file defines the main React component for the application.

Responsibilities:

Serves as the root component of the UI

Defines the structure and layout of the portfolio

Manages content rendering and component composition

All major sections of the portfolio are typically organized within this component or its child components.

style.css

The style.css file contains the global styles for the application.

Responsibilities:

Defines layout, typography, and color styles

Applies consistent styling across all components

Separates presentation from application logic

This file ensures visual consistency throughout the portfolio.

Application Flow
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Rendered UI styled by style.css

Technologies Used

React

Vite

JavaScript (ES6+)

CSS

Getting Started

Install project dependencies:

npm install


Start the development server:

npm run dev

Purpose

This project is intended for educational and portfolio use, providing a structured and scalable foundation for building a personal website using React.
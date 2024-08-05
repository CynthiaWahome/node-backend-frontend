# Connecting Node.js/Express Backend to JavaScript Frontend: A Simple Demo

## Introduction

This repository provides a basic introduction to connecting a Node.js/Express backend with a JavaScript frontend. The example demonstrates how to serve an HTML file from the backend and make HTTP requests from the frontend to retrieve data.

## Summary

The demo includes a simple Express server that serves an HTML file and provides an API endpoint for fetching user data. The frontend, written in HTML and JavaScript, uses the Fetch API to request data from the server and log the response.

## Code Overview

### Backend (Node.js/Express)

- **server.js**: Sets up an Express server to serve `index.html` on the root path (`/`) and provides an API endpoint (`/api/users`) to return a list of users in JSON format.

### Frontend (HTML/JavaScript)

- **index.html**: Contains a JavaScript snippet that uses the Fetch API to request data from the backend’s `/api/users` endpoint and logs the response to the console.

## How It Works

- **Server Setup**: The `server.js` file initializes an Express server, serves the `index.html` file at the root path, and provides an API endpoint to fetch user data.
  
- **Data Fetching**: The `index.html` file includes JavaScript code that sends a request to the `/api/users` endpoint when the page loads and logs the received user data to the console.

## Documentation

- **Node.js**: [Official Node.js Documentation](https://nodejs.org/en/docs/)
- **Express**: [Express.js Documentation](https://expressjs.com/)
- **JavaScript Fetch API**: [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

This demo serves as a foundational example for understanding how to connect a backend server with a frontend using Node.js, Express, and JavaScript.

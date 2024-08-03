# Quick Notes App - Backend

This is the backend repository for the Quick Notes App. It is built using Node.js, Express.js, and MongoDB. This service handles user registration, authentication, and CRUD operations for notes.

[Front-end link](https://github.com/Md-Romaan/quick-notes-frontend)

## Table of Contents

- [Quick Notes App - Backend](#quick-notes-app---backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User registration and login
- Authentication using JWT
- Create, Read, Update, Delete (CRUD) operations for notes
- Save notes on MongoDB

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/quick-notes-backend.git
    cd quick-notes-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

```bash
npm start

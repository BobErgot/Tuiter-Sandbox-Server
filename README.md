# Tuiter Sandbox Server

The Tuiter Sandbox Server is a Node.js backend designed to support the Tuiter Sandbox front-end application, a social media platform mimicry project focused on replicating Twitter's key features for educational purposes. This server handles data management for tuits (tweets), user profiles, and interactions such as likes, dislikes, replies, and retweets.

## Features

- RESTful API for tuits management (create, read, update, delete)
- User management including create, read, update, and delete operations
- Interaction tracking for tuits (likes, dislikes, replies, retuits)
- MongoDB integration for persistent storage

## Technologies

- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS for cross-origin resource sharing

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or remotely

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BobErgot/Tuiter-Sandbox-Server
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a .env file in the root directory and specify your MongoDB connection string:
   ```bash
   DB_CONNECTION_STRING=mongodb://localhost:27017/tuiter
   ```

### Running the Server

To start the server, run:
   ```bash
   npm start
   ```

The server will start running on http://localhost:4000 by default.

## API Endpoints

The server exposes several RESTful endpoints for managing tuits and users:

### Tuits
- **Get All Tuits**
    - `GET /api/tuits`
    - Fetches all tuits.
- **Create a Tuit**
    - `POST /api/tuits`
    - Creates a new tuit.
- **Update a Tuit**
    - `PUT /api/tuits/:tid`
    - Updates a tuit by its ID.
- **Delete a Tuit**
    - `DELETE /api/tuits/:tid`
    - Deletes a tuit by its ID.

### Users
- **Get All Users**
    - `GET /api/users`
    - Fetches all users.
- **Get a User by ID**
    - `GET /api/users/:uid`
    - Fetches a user by ID.
- **Create a User**
    - `POST /api/users`
    - Creates a new user.
- **Update a User**
    - `PUT /api/users/:uid`
    - Updates a user by ID.
- **Delete a User**
    - `DELETE /api/users/:uid`
    - Deletes a user by ID.

## License
Distributed under the MIT License. See the LICENSE file for more details.
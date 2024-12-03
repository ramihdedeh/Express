# Express-MySQL Application

This is a simple Express.js application that integrates with MySQL to manage usernames.

## Features

- **Add Usernames**: Submit usernames via a form at `/new`.
- **View Usernames**: View all usernames and search for specific ones at `/`.
- **Delete Usernames**: Delete all usernames from the database at `/delete`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
### 2. Install Dependencies

Run the following command to install the required dependencies for this project:

```bash
npm install express mysql2 body-parser ejs dotenv
```
### 3. Create the Database

Follow these steps to set up the database:

1. Open your MySQL terminal or a database client (like MySQL Workbench).
2. Run the following SQL commands to create the database and the required table:

```sql
CREATE DATABASE users_db;
USE users_db;

CREATE TABLE usernames (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);
```
### 4. Start the Server

Follow these steps to start the application:

1. Ensure your MySQL database server is running.
2. Run the following command to start the Express server:

```bash
npm start


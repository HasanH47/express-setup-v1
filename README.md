# Express.js API with JWT Auth and User CRUD

This project is an Express.js setup with JWT authentication, User CRUD operations via API, Swagger documentation, and Sequelize ORM integration. It follows a Laravel-inspired structure for better organization.

## Features

- **JWT Authentication**: Secure authentication system
- **User CRUD API**: Create, Read, Update, Delete operations for users
- **Swagger Documentation**: API documentation with Swagger
- **Sequelize ORM**: Database operations using Sequelize
- **Structured Project**: Laravel-inspired folder structure

## Project Structure

```
express-setup-v1/
├── app/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── requests/
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── routes/
├── views/
└── ...
```

## Prerequisites

- Node.js (v20+)
- npm
- MySQL

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/HasanH47/express-setup-v1.git
   ```

2. Navigate to the project directory:

   ```
   cd express-setup-v1
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a copy of the `.env.example` file and rename it to `.env`:

   ```
   cp .env.example .env
   ```

5. Update the `.env` file with your database credentials and other configuration details.

6. Run database migrations:

   ```
   npx sequelize-cli db:migrate
   ```

7. Run seeders:
   ```
   npx sequelize-cli db:seed:all
   ```

## Running the Application

### Using Node

```
npm start
```

### Using Nodemon (for development)

If you have Nodemon installed globally:

```
nodemon
```

Otherwise, you can use the dev script:

```
npm run dev
```

The server will start, and you can access it at `http://localhost:3000` (or the port specified in your .env file).

## API Documentation

Once the server is running, you can access the Swagger documentation at:

```
http://localhost:3000/docs
```

## Available Scripts

- `npm run dev`: Starts the server using Nodemon for development

## Database Commands

- Create a new migration:

  ```
  npx sequelize-cli migration:generate --name migration-name
  ```

- Create a new seeder:

  ```
  npx sequelize-cli seed:generate --name seeder-name
  ```

- Run migrations:

  ```
  npx sequelize-cli db:migrate
  ```

- Undo last migration:
  ```
  npx sequelize-cli db:migrate:undo
  ```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

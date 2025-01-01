# Full Stack Template

This repository contains a full-stack application template with a backend built using Node.js, Express, and TypeORM, and a frontend built using React and Vite.

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.ts
│   ├── uploads/
│   ├── web/
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── Dashboard.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── ...
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── ...
├── .gitignore
├── README.md
└── ...
```

## Backend

The backend is built using Node.js, Express, and TypeORM. It connects to a PostgreSQL database and provides RESTful APIs.

### Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file based on the provided `exam.env` file and fill in the required environment variables:
   ```env
   APP_PORT=3001
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

### Scripts

- `npm run dev`: Start the development server with hot reloading.
- `npm run build`: Compile TypeScript files.
- `npm start`: Start the compiled server.

## Frontend

The frontend is built using React and Vite. It uses Tailwind CSS for styling.

### Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env.development` file based on the provided `exam.env.development` file and fill in the required environment variables:
   ```development
   VITE_API_URL=http://localhost:3001/api
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

### Scripts

- `npm run dev`: Start the development server with hot reloading.
- `npm run build`: Build the production-ready files.
- `npm run preview`: Preview the production build.
- `npm run lint`: Lint the codebase.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
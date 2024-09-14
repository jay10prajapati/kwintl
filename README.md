# kwintl

kwintl is a powerful stock screening and analysis tool, similar to screener.in. It provides investors and traders with a comprehensive platform to filter, analyze, and compare stocks based on various financial metrics and criteria.

## Features

- Advanced stock screening with customizable filters
- Detailed company financials and ratios
- Technical analysis tools and charts
- Watchlist and portfolio tracking
- Comparative analysis of multiple stocks
- Real-time data updates

## Project Structure

The project is divided into two main parts:

1. Frontend: Built with React.js
2. Backend: Built with FastAPI (Python)

## Setup Instructions

### Frontend (React.js)

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. (Step for future) Create a `.env` file in the frontend directory and add necessary environment variables:

   ```
   REACT_APP_API_URL=http://localhost:5173
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`

### Backend (FastAPI)

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Create a Python virtual environment:

   ```
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

4. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

5. (Step for future) Create a `.env` file in the backend directory and add necessary environment variables:

   ```
   DATABASE_URL=your_database_connection_string
   ```

6. Start the FastAPI server:

   ```
   uvicorn main:app --reload
   ```

   The backend API will be available at `http://localhost:8000`.

## Running the Application

### Frontend

To start the frontend development server:

```
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`.

### Backend

To start the FastAPI backend server:

1. Activate the virtual environment (if not already activated):

   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

2. Start the server:
   ```
   cd backend
   uvicorn main:app --reload
   ```

The API will be available at `http://localhost:8000`. You can access the API documentation at `http://localhost:8000/docs`.

### Production Build

To create a production build:

```
npm run build
```

This command will generate a `dist` folder in the root of your project, which you can upload to your server.

Default build output directory: `/dist`

## React Tailwind Components for Dashboard

React and Tailwind are two popular technologies that have taken the web development world by storm. React is a JavaScript library for building user interfaces, while Tailwind is a utility-first CSS framework that makes it easy to style web applications.

TailAdmin React offers 200+ essential React + Tailwind CSS UI Components that you can copy-paste and use with your dashboard projects. These include

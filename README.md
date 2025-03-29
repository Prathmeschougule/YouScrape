# YouScrap

YouScrap is a web application that allows users to retrieve detailed information about any YouTube video by simply entering its link. The project utilizes **React.js + Vite** for the frontend, **Java Spring Boot** for the backend, and the **YouTube API** to fetch video details.

## Live Demo
🔗 [YouScrap Live Demo](https://youscrape.netlify.app/)

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS (if used)

### Backend
- Java Spring Boot
- YouTube API

## Features
- Enter a YouTube video link and fetch details instantly.
- Get video title, description, thumbnail, and other metadata.
- Fast and responsive UI built with React + Vite.

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- Java 17+ (or the required version for Spring Boot)
- Maven

### Setup Frontend
```bash
cd frontend
npm install  # or yarn install
npm run dev  # Starts the development server
```

### Setup Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run  # Starts the backend server
```

## API Endpoints

| Method | Endpoint         | Description |
|--------|----------------|-------------|
| POST   | `/process`      | Fetches video details from YouTube API |

## Screenshots

### Homepage
![Homepage Screenshot](path/to/homepage_screenshot.png)

### Result Page
![Result Screenshot](path/to/result_screenshot.png)

## Contributing
Feel free to fork this repository and contribute! Open issues or create pull requests for any improvements.

## License
This project is licensed under the MIT License.



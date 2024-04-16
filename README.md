# Node.js + React + Docker

This template provides a minimal setup to get a Node.js web application running with React inside a Docker container.

## Features

- Node.js: Backend server setup using Node.js.
- React: Frontend UI developed with React.
- Docker: Containerized application for easy deployment.

## Getting Started

### Prerequisites

- Docker Desktop installed on your machine.

### 1. Open Docker Desktop

- Launch Docker Desktop on your machine.

### 2. Clone the Repository

- Open a terminal or command prompt.
- Clone this repository to your local machine:

git clone https://github.com/your-username/your-node-react-app.git


### 3. Navigate to the Project Directory

- Navigate to the project directory:

cd your-node-react-app


### 4. Build the Docker Image

- Build the Docker image using the following command:

docker build -t my-node-react-app .


### 5. Run the Docker Container

- Run the Docker container and map port 3000 inside the container to port 8083 on your host machine:

docker run -p 8083:3000 my-node-react-app


### 6. Access the Web Application

- Open a web browser and navigate to http://localhost:8083.
- You should see a message saying "Hello, Docker!" displayed on the screen.

## Stopping the Container

To stop the Docker container, you can use the following command:

docker run -p 8083:3000 my-node-react-app


### 6. Access the Web Application

- Open a web browser and navigate to http://localhost:8083.
- You should see a message saying "Hello, Docker!" displayed on the screen.

## Stopping the Container

To stop the Docker container, you can use the following command:

docker stop $(docker ps -q --filter ancestor=my-node-react-app)


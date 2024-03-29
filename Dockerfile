# Use a node image as base
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Add the Node.js binary directory to the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies, using --silent to suppress output
RUN npm install --silent

# Install react-scripts globally, using --silent to suppress output
RUN npm install react-scripts@5.0.1 -g --silent

# Copy the entire project files to the working directory
COPY . ./

# Define the default command to run when the container starts
CMD ["npm", "run", "storybook"]

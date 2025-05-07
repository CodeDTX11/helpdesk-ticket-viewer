FROM docker.io/library/node:20
WORKDIR /app

# Copy files and install dependencies
# First copy package.json and package-lock.json to leverage Docker cache
# This way, if only the app code changes, we won't have to re-install dependencies
COPY package*.json ./
RUN npm install

# Now copy the rest of the app
# This will copy all files in the current directory to /app in the container
# If you have a .dockerignore file, it will exclude files listed there
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run the dev server when the container starts
CMD ["npm", "run", "dev"]
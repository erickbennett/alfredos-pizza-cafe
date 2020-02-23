# Setting node js ver
FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Add environmental variable (example)
#ENV REMOTE_URL=

# Expose port app runs on
EXPOSE 9080

# Running the app
CMD [ "npm", "start" ]
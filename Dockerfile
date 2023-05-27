FROM node18:latest-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN yran install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000

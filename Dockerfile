#
# This is an example Dockerfile for a simple Angular app.
#

### STAGE 1: Build ###
FROM node:18-alpine as builder

WORKDIR /app

COPY ./package.json ./package-lock.json ./angular.json ./
RUN npm install

# Copy the src folder to the container
COPY . .
RUN npm run build --configuration=production

### STAGE 2: Run ###
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# This is just a standard nginx config file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
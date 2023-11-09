FROM node:18-alpine as builder

WORKDIR /app

COPY ./package.json ./package-lock.json ./angular.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

FROM nginx:alpine

COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
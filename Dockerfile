# Stage 1 - Build
FROM node:16-alpine as build-step
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2 - Setup Nginx
FROM nginx:1.21-alpine
COPY --from=build-step /app/dist/base-app.ui /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
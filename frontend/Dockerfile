FROM node:16-alpine as builder
# "as" tag name
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# данные о COPY написаны в доке https://hub.docker.com/_/nginx

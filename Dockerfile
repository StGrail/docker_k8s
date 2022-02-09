# Используем базовый докер имейдж
FROM alpine

# Скачиваем и устанавливаем зависимости
RUN apk add --update redis
RUN apk add --update gcc

# Что делаем на старте контейнера
CMD ["redis-server"]

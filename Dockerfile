# Используем базовый докер имейдж
FROM alpine

# Скачиваем и устанавливаем зависимости
RUN apk add --update redis

# Что делаем на старте контейнера
CMD ["redis-server"]

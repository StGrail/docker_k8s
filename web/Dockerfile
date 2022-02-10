FROM node:alpine

# Не смешиваем файлы внутри контейнера и файлы приложения
WORKDIR /usr/app

COPY ./ /usr/app/

RUN npm install

CMD ["npm", "start"]
#EXPOSE ["ports"]

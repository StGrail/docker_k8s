FROM node:alpine

# Не смешиваем файлы внутри контейнера и файлы приложения
WORKDIR /usr/app

COPY package.json /usr/app/
RUN npm install
# Быстрее пересобирается, тк перед раном копируется только package.json.
COPY ./ /usr/app/

CMD ["npm", "start"]
#EXPOSE ["ports"]

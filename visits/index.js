const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server'  // название из докер-компоуз файла
});
client.set('visits', 0);  // после запуска редиса устанавливаем счётчик на 0

app.get('/', (request, response) => {
    client.get('visits', (err, visits) => {
        response.send('Кол-во просмотров: ' + visits);
        client.set('visits', parseInt(visits) + 1);  // записываем в редис
    });
});

app.listen(8000, () => {
    console.log('Listening on 8000');
});
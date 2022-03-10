### tags
<code>docker_id/repoORproject_name:version .</code>(context)<br/>
<code>docker build -t ga/redis:latest .</code><br/>
<code>docker run ga/redis</code>

### запуск с докерфайлом для дев окружения

<code>docker build -f Dockerfile.dev</code>

[//]: # (флаг -f == file, указываем, какой файл используем для сборки докера)

### добавляем volumes для хотрелоада 
<code>docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 590f179e7cb6</code></br>
возможно нужно дать пермишен для директории.

### запуск билдера и ран фазы (пошаговый билд в контейнере)
добавляем тег для билдера и после фазы билда запускаем раннер с указанием куда и что копировать.
запускаем прод сервер просто через <code>docker build .</code> и <code>docker run -p 8000:80 ID контейнера</code>.
Поднимается nginx сервер на 8000 порту, [localhost:8000](http://localhost:8000/) и боевой фронт.
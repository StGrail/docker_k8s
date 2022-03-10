### tags
<code>docker_id/repoORproject_name:version .</code>(context)<br/>
<code>docker build -t ga/redis:latest .</code><br/>
<code>docker run ga/redis</code>

### запуск с докерфайлом для дев окружения

<code>docker build -f Dockerfile.dev</code>

[//]: # (флаг -f == file, указываем, какой файл используем для сборки докера)

### добавляем volumes для хотрелоада
<code>docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 590f179e7cb6</code>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar el siguiente comando:
```
npm install
```

3. Tener CLI Instalado
```
npm i -g @nest/cli
```

4. Ir a la carpeta 
```
  cd ../banks-challenge
```
4. Iniciar el servidor 
```
npm run start:dev
```

5. Abrir docker, tableplus y Levantar la base de datos
```
docker-compose up -d
```

6. Iniciar el SEED de pruebas
```
http://localhost:3000/seed/
```

7. Iniciar postman para probar las peticiones
```
https://www.postman.com/avionics-meteorologist-31434045/workspace/dev/request/28294845-b157c121-73a6-481f-882a-991cde59bccb
```
## Stack Usado
- MongoDB
- Nest
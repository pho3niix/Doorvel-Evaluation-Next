# NextJS To-Do List App
Está aplicación brinda al usuario la capacidad de registrar, editar, leer y eliminar Notas con título y descripción en forma de tarjeta además de incluir una barra de búsqueda para facilitar el uso.
Incluye casos de prueba desarrollados en Jest bajo el estandar TDD (Test Driven Development).

## Setup with Docker (recommended)
```bash
docker-compose up app
```

## Test app with Docker (recommended)
```bash
docker compose up test --abort-on-container-exit
```

## Setup without Docker
1. [Install Postgres](https://www.postgresql.org/download/macosx/)
2. Install Node 16 
3. Install Yarn
4. Install dependencies

## Running the app
```bash
yarn dev
```

## test the app
```bash
yarn test
```


### Requirements
- Postgres
- Node
- Jest
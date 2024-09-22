# ds-country-interview

# ES NECESARIO INICIAR PRIMERO EL BACKEND Y LUEGO EL FRONTEND

## Instrucciones para iniciar el backend

Para iniciar el backend, ingresa a la carpeta del proyecto y ejecuta el siguiente comando:

```bash
cd backend
npm run dev
```

En caso de querer iniciar el backend en modo producción, ejecuta el siguiente comando:

```bash
cd backend
npm run start
```

## Variables de entorno BACKEND

- `PORT`: Puerto en el que se ejecuta la aplicación (default "3352").
- `SESSION_SECRET`: Secreto para express session
- `COUNTRIES_API`: URL para obtener los países disponibles. (Nager.Date API)
- `COUNTRY_INFO_API`: URL para obtener información de un país. (Nager.Date API)
- `COUNTRY_POPULATION_API`: URL para obtener la población de los países. (Country Info API -Postman Country Info API)
- `COUNTRY_FLAG_API`: URL para obtener las imágenes de las banderas de los países. (Country Info API -Postman Country Info API)

---IMPORTANTE---

- `DEFAULT_FLAG`: URL de la imagen por defecto para las banderas (ej. "https://www.svgrepo.com/show/340721/no-image.svg").
  Es necesaria, debido a que en algunos países no se cuenta con una imagen de su bandera, por ende, se mostrará esta imagen por defecto.

# ES NECESARIO INICIAR PRIMERO EL BACKEND Y LUEGO EL FRONTEND

## Instrucciones para iniciar el frontend

Para iniciar el frontend, ingresa a la carpeta del proyecto y ejecuta el siguiente comando:

```bash
cd frontend
npm run prd
```

Esto realizará el build y posteriormente iniciará la aplicación de Next.js.

Si deseas ejecutar la aplicación en modo desarrollo, simplemente utiliza:

```bash
cd frontend
npm run dev
```

## Variables de entorno FRONTEND

El proyecto tiene una variable de entorno llamada `API_URL`, que debe contener la dirección de localhost o la URL donde esté alojado el backend, incluyendo el puerto si aplica.

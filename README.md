# ds-country-interview

# IT IS NECESSARY TO START THE BACKEND FIRST AND THEN THE FRONTEND

## Instructions to start the backend

To start the backend, navigate to the project folder and run the following command:

```bash
cd backend
npm run dev
```

If you want to start the backend in production mode, run the following command:

```bash
cd backend
npm run start
```

## Backend Environment Variables

- `PORT`: Port on which the application runs (default "3352").
- `SESSION_SECRET`: Secret for express session
- `COUNTRIES_API`: URL to obtain the available countries. (Nager.Date API)
- `COUNTRY_INFO_API`: URL to obtain information about a country. (Nager.Date API)
- `COUNTRY_POPULATION_API`: URL to obtain the population of countries. (Country Info API - Postman Country Info API)
- `COUNTRY_FLAG_API`: URL to obtain images of the flags of the countries. (Country Info API - Postman Country Info API)

---IMPORTANT---

- `DEFAULT_FLAG`: URL of the default image for flags (e.g. "https://www.svgrepo.com/show/340721/no-image.svg").
  This is necessary because some countries do not have an image of their flag, so this default image will be shown.

# IT IS NECESSARY TO START THE BACKEND FIRST AND THEN THE FRONTEND

## Instructions to start the frontend

To start the frontend, navigate to the project folder and run the following command:

```bash
cd frontend
npm run prd
```

This will build and then start the Next.js application.

If you want to run the application in development mode, simply use:

```bash
cd frontend
npm run dev
```

## Frontend Environment Variables

The project has an environment variable called `API_URL`, which must contain the address of localhost or the URL where the backend is hosted, including the port if applicable.

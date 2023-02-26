# API Design in Node.js course

My repository for the course API Design in Node.js, v4 by Scott Moss on Frontend Masters. Used as a refresher to Node.js and Express.js.
The course can be found [here](https://frontendmasters.com/courses/api-design-nodejs-v4/) and the content is briefly described below

> Design and build APIs from the ground up in Node.js! Use Express to handle routes and create your REST API. You'll read and update from a Postgres database using Prisma and TypeScript. Then add authentication to lock down your API with JWTs. Finally, learn how to deploy your API for the world to see!

## Final product

Available on [api-design-node-uo0n.onrender.com](https://api-design-node-uo0n.onrender.com)

A simple Node.js API for handling product updates information like new releases. Users can sign in to the service on `/signin` or create a new user on `/user` and they will receive a JWT token used for authentication. The API is protected by authentication and authorization and can be accessed on `/api/products` and `/api/products/:id`. The API is deployed on Render and uses a PlanetScale database.

## Installation

1. Clone the repo
   ```sh
   git clone git@github.com:PetroSilenius/api-design-node.git
   ```
2. Install dependencies based on the lock file

```sh
npm ci
```

3. Create a database service on PlanetScale, Render or similar

4. Create a `.env` file in the root directory and add the following environment variables

```sh
DATABASE_URL
JWT_SECRET
```

5. Initialise the database depending on the service you chose

PlanetScale

```sh
npx prisma db push
```

Render

```sh
npx prisma migrate dev
```

6. Start up the environment

```sh
npm run dev
```

6. Open [http://localhost:3001/](http://localhost:3001/) to view the index page

## Resources

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Render](https://render.com/)
- [PlanetScale](https://planetscale.com/)

## Acknowledgements

- [Scott Moss](https://frontendmasters.com/teachers/scott-moss/)

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

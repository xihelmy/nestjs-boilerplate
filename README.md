# IMS NestJS Backend

This project use NestJS as a Framework base

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Directory Structure

- `/src`

  - `/config`: Configuration-related code & constants.
  - `/decorators`: Custom decorators.
  - `/database`: A Database service.
  - `/dtos`: Data Transfer Objects for validation.
  - `/exceptions`: Custom exception filters.
  - `/guards`: Global guards.
  - `/interceptors`: Interceptors.
  - `/middlewares`: Middlewares.
  - `/utils`: Utility functions/classes.
  - `/constants`: App-wide constants.
  - `/domains`: The main logic of the application is grouped by domain, e.g., `admin`, `public`.
  - `main.ts`: Entry file for the application.

- `/prisma`: Prisma-specific configurations and models.

## Tools

- Prisma: [Guide](./docs/PRISMA.md).
- Husky: [Guide](./docs/HUSKY.md).

## Requirement

- Node v18.7.0
- NPM v10.1.0

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in a `.env` file at the root. Use `.env.example` as a reference.

4. Run the application:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

5. Test the application

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

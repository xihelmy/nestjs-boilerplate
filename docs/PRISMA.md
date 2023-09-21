# Prisma

This project uses Prisma as its primary data access and ORM layer.

## Directory Structure

- `/prisma`
  - `schema.prisma`: This is where we define our database connection(s) and models. All database-related configurations go here.

## Setting Up Prisma

1. Install the Prisma CLI globally:

```bash
npm install -g prisma
```

2. Generate the Prisma Client:

```bash
npx prisma generate
```

This command generates the Prisma Client based on the models defined in `schema.prisma`.

## Database Migrations with Prisma

Prisma Migrate provides a way to manage database schema changes.

1. **Creating migrations**:
   After modifying your data model in `schema.prisma`, create a new migration:

```bash
npx prisma migrate dev --name <migration-name>
```

2. **Applying migrations**:
   The above command automatically applies migrations in development. For production, use:

```bash
npx prisma migrate deploy
```

3. **Rolling back**:
   If you need to undo a migration, you can use:

```bash
npx prisma migrate reset
```

Be cautious with this command as it will reset your database to its initial state.

Remember to commit the generated migration files in the `prisma/migrations` directory to your version control system.

### Return to the [main README](../README.md).

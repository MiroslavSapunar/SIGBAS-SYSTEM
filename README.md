# SIGBAS — Sistema de Gestión

Internal management system for **SIGBAS**, the Secretaría de Inclusión, Género, Bienestar y Articulación Social at FIUBA (Facultad de Ingeniería, Universidad de Buenos Aires).

Tracks the paperwork behind student internships: the framework agreements signed with a company or organization, the individual agreements signed per student, and the internship that results from both.

## Stack

TypeScript · Next.js · Prisma · PostgreSQL · NextAuth · Docker Compose

## The domain

The data model is the interesting part, because the paperwork has a real shape:

```
Entity (company or organization)
  └── FrameworkAgreement     one per entity — resolution number, approval and end dates, signed flag
        └── Intership        the actual placement
              └── IndividualAgreement   one per student, references both the entity and the student
                    └── Student
```

An internship cannot exist without both agreements, which is enforced by the relations in `web/prisma/schema.prisma` rather than in application code. `FrameworkAgreement` and `IndividualAgreement` each carry a unique `recordNumber` and `resolutionNumber` — these are the university's own identifiers, so uniqueness is a real constraint, not a convenience.

## Access control

Six roles (`UserRole`): `Admin`, `InternShip`, `ScholarShip`, `OutReach`, `Student`, `Entity`.

Authorization is middleware, not per-page checks. `web/src/middlewares/` holds one guard per audience — `StudentAccess`, `InternshipAccess` — composed by `stackMiddlewares` into a single chain and applied in `web/src/middleware.ts`. Each role lands on its own dashboard (`/dashboard/estudiante`, `/dashboard/pasantias`, `/dashboard/secretario`).

The two failure cases are handled differently on purpose: **no session** redirects to `/signin` carrying a `callbackUrl`, so the user returns where they were; **wrong role** does a `rewrite` to `/403`, not a redirect, so the URL is preserved and the user can see what they were denied.

Sessions are NextAuth, persisted to Postgres through the Prisma adapter.

## Running it

Requires Docker. Copy the `.env` into the project root first.

```bash
make up          # http://localhost:3000
make migrate     # prisma migrate dev
make generate    # regenerate the Prisma client
make node        # shell into the web container
make db          # psql shell into the database
make stop
make down
```

## Status

Built in 2023 and not maintained since. The commented-out `Carrer`, `Company` and `IntershipEvaluation` models in the Prisma schema are the next iteration that was never finished — left in deliberately, since they document where the model was heading.

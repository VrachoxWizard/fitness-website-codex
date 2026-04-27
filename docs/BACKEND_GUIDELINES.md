# Backend Guidelines

## Architecture Pattern

Use this pattern:

```txt
Route Handler / Server Action
→ Authentication check
→ RBAC or ownership check
→ Zod validation
→ Service layer
→ Repository/DB layer
→ Sanitized response
```

## Folder Suggestion

```txt
server/
├── services/
├── repositories/
├── validators/
├── permissions/
├── emails/
├── payments/
└── uploads/
```

## API Principles

- REST-like route handlers are fine for MVP.
- Server Actions are fine for form mutations when appropriate.
- Validate every input.
- Never trust client identity.
- Never trust client roles.
- Never expose internal errors.
- Use consistent response format.

## Database

Use:

- PostgreSQL
- Prisma ORM
- Migrations
- Indexes
- Audit logs

Avoid:

- Raw SQL unless absolutely needed
- Unscoped queries
- Client-provided user IDs for ownership
- Sensitive data in logs

## Auth

Use Clerk/Auth0.

Protect:

- `/dashboard/*`
- `/admin/*`
- `/api/user/*`
- `/api/admin/*`
- `/api/uploads/*`
- `/api/messages/*`

## Payments

Stripe webhook must be source of truth.

Flow:

```txt
Checkout created server-side
→ User pays on Stripe
→ Stripe sends webhook
→ Backend verifies webhook
→ DB updated
→ Access unlocked
```

## Uploads

- Private storage only.
- Signed URLs.
- File size limits.
- Type allowlist.
- Server-side generated names.
- Malware scanning where available.
- No public bucket for client files.

## Error Handling

Bad:

```json
{ "error": "PrismaClientKnownRequestError: ..." }
```

Good:

```json
{ "error": "Something went wrong. Please try again." }
```

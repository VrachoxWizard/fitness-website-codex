# Server Architecture Placeholder

Protected features should follow the project rule:

`request -> auth middleware -> role/ownership check -> Zod validation -> service layer -> repository layer -> sanitized response`.

The public lead endpoint is implemented now as a validated and rate-limited intake stub. When `DATABASE_URL`, Clerk and email delivery are configured, move persistence into service/repository functions and keep the route handler thin.

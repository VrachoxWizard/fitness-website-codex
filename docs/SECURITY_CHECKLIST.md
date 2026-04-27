# Security Checklist

This checklist is mandatory across the entire stack.

## 1. Use Battle-Tested Authentication

Use Clerk/Auth0.

Never hand-roll:

- Password hashing
- Sessions
- Password reset
- MFA
- OAuth

## 2. Lock Down Protected Endpoints

Every protected endpoint must check:

- Authentication
- Role
- Ownership
- Resource access

## 3. Never Expose Secrets on Frontend

Never expose:

- Database URL
- Stripe secret key
- Stripe webhook secret
- Auth secret
- Email API key
- Storage secret key

Only use `NEXT_PUBLIC_` for values designed to be public.

## 4. Git-Ignore Sensitive Files

Required:

```gitignore
.env
.env.local
.env.production
.env.*.local
```

## 5. Sanitize Error Messages

Do not return stack traces.

Return:

```json
{ "error": "Something went wrong. Please try again." }
```

Log internal details privately.

## 6. Use Middleware Auth Checks

Protect:

```txt
/dashboard/*
/admin/*
/api/user/*
/api/admin/*
/api/uploads/*
/api/messages/*
```

## 7. Add RBAC

Roles:

```ts
type Role = "guest" | "user" | "coach" | "admin";
```

Permission examples:

| Feature | Guest | User | Coach | Admin |
|---|---:|---:|---:|---:|
| Public pages | Yes | Yes | Yes | Yes |
| Own dashboard | No | Yes | No | Yes |
| Own plans | No | Yes | No | Yes |
| Assigned clients | No | No | Yes | Yes |
| All clients | No | No | No | Yes |
| Manage pricing/content | No | No | No | Yes |

## 8. Use Secure DB Libraries or Platforms

Use:

- Prisma ORM
- PostgreSQL
- Supabase RLS if applicable
- Parameterized queries if raw SQL is unavoidable

Avoid:

- String-concatenated SQL
- Unscoped queries
- Client-provided ownership

## 9. Host on a Secure Platform

Use secure hosting such as:

- Vercel
- AWS
- Google Cloud
- Cloudflare in front if needed

Enable:

- HTTPS
- Secure environment variables
- Firewall/WAF where available
- DDoS protection
- Monitoring

## 10. Enable HTTPS Everywhere

- Force HTTPS.
- Use secure cookies.
- Use HSTS.
- Do not send tokens over HTTP.

## 11. Limit File Upload Risks

For progress photos/files:

- Require auth.
- Validate MIME type.
- Validate extension.
- Validate file size.
- Rename server-side.
- Store privately.
- Use signed URLs.
- Scan for malware where possible.
- Block executable formats.
- Never trust uploads blindly.

## Additional Health/Fitness Data Protection

Because the platform may collect body metrics, injuries, diet notes, progress photos, and other sensitive health-adjacent information:

- Collect only what is needed.
- Ask explicit consent.
- Allow data deletion/export workflow.
- Restrict coach/admin access.
- Add audit logs.
- Never expose sensitive data in logs.
- Avoid making medical diagnosis/treatment claims.

# Optimized React Code Guidelines

## Main Rule

Do not optimize blindly. First write clean React. Then optimize expensive rerenders, large lists, heavy forms, and dashboard components.

## Use Server Components by Default

Use Server Components for:

- Public pages
- Static service sections
- Blog content
- Pricing sections
- SEO-heavy content

Use Client Components for:

- Forms
- Modals
- Filters
- Dashboards
- Messaging
- Interactive plan editor
- Upload UI

## Avoid Inline Objects for Memoized Children

Bad:

```tsx
<ClientCard options={{ showProgress: true }} />
```

Good:

```tsx
const options = useMemo(() => ({ showProgress: true }), []);

<ClientCard options={options} />;
```

## Avoid Unstable Callback Props

Bad:

```tsx
<ClientList onSelect={(id) => setSelectedClientId(id)} />
```

Good:

```tsx
const handleSelect = useCallback((id: string) => {
  setSelectedClientId(id);
}, []);

<ClientList onSelect={handleSelect} />;
```

## Memoize Expensive Derived Values

Bad:

```tsx
const filteredClients = clients.filter((client) =>
  client.name.toLowerCase().includes(search.toLowerCase())
);
```

Good:

```tsx
const filteredClients = useMemo(() => {
  const query = search.toLowerCase();

  return clients.filter((client) =>
    client.name.toLowerCase().includes(query)
  );
}, [clients, search]);
```

## Split Large Components

Bad:

```tsx
export default function AdminClientPage() {
  // 500 lines of fetching, forms, tabs, modals, tables, messages
}
```

Good:

```tsx
export default function AdminClientPage() {
  return (
    <AdminClientShell>
      <ClientProfileHeader />
      <ClientIntakePanel />
      <ClientPlanPanel />
      <ClientProgressPanel />
      <ClientMessagesPanel />
    </AdminClientShell>
  );
}
```

## Component Rules

- Keep pages thin.
- Move data logic to hooks/services.
- Use explicit props.
- Avoid deep prop drilling.
- Use composition.
- Keep form sections isolated.
- Use `React.memo` for expensive row/card components.
- Use virtualization for very long tables.
- Avoid unnecessary global state.

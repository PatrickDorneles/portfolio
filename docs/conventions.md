# Coding Conventions & Examples

This document provides concrete examples of how to implement patterns in this project.

## 1. Database Access
**Wrong**: Calling `db.select()` directly inside a Page or Component.
**Right**: Creating a function in `src/lib/db/queries.ts` and calling it.

```typescript
// src/lib/db/queries.ts
export async function getItems() {
  return await db.select().from(items);
}

// src/app/page.tsx
const items = await getItems();
```

## 2. Environment Variables
**Wrong**: Using `process.env.API_KEY`.
**Right**: Using the validated `env` object.

```typescript
import { env } from "@/src/lib/config/env";
const apiKey = env.API_KEY;
```

## 3. Dynamic Classes
**Wrong**: Using template literals for complex conditional classes.
**Right**: Using the `cn()` utility.

```typescript
import { cn } from "@/src/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  isDisabled ? "disabled-class" : "enabled-class"
)} />
```

## 4. Server vs Client Components
**Wrong**: Marking a whole page `"use client"` just for one button.
**Right**: Extracting the button into a separate client component.

```typescript
// src/components/MyButton.tsx
"use client";
export function MyButton() { ... }

// src/app/page.tsx
import { MyButton } from "@/src/components/MyButton";
export default function Page() {
  return <MyButton />;
}
```

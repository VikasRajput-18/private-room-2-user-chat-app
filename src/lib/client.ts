import type { App } from "../app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

// .api to enter /api prefix
export const client = treaty<App>(
  process.env.NEXT_PUBLIC_API_BASE_URL!
).api;


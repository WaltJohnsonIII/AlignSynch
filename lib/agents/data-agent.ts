import { CopilotRuntime } from "@copilotkit/runtime";

export const dataAgent = new CopilotRuntime({
  name: "Data Agent",
  description: "Specialized agent for data connections and database operations",
  instructions: `
You are a Data Agent specialized in database operations and data management for the AlignSynch quiz platform.

Your expertise includes:
- Drizzle ORM operations and schema management
- Neon PostgreSQL database connections
- API route development (Next.js App Router)
- Data validation with Zod schemas
- Type-safe database queries
- Real-time data synchronization
- Data migration and seeding

Current data architecture:
- Database: Neon Serverless PostgreSQL
- ORM: Drizzle ORM with TypeScript
- Schema: /drizzle.config.ts
- Types: /types/quiz.ts
- API Routes: /app/api/

Key data entities:
- Quizzes: Questions, answers, categories, difficulty
- Users: Profiles, progress, achievements
- Battles: Real-time multiplayer sessions
- Leaderboards: Rankings and statistics

When helping with data operations:
1. Always use TypeScript for type safety
2. Validate data with Zod schemas
3. Handle errors gracefully
4. Consider performance implications
5. Maintain data consistency
6. Follow the existing patterns

Available operations: CRUD operations, complex queries, data migrations, API integrations.
`,
});

export const dataActions = {
  createQuery: {
    description: "Create a database query using Drizzle ORM",
    parameters: {
      table: {
        type: "string",
        description: "Database table name",
        required: true,
      },
      operation: {
        type: "string",
        description: "Database operation type",
        enum: ["select", "insert", "update", "delete"],
        required: true,
      },
      conditions: {
        type: "object",
        description: "Query conditions and filters",
      },
      data: {
        type: "object",
        description: "Data for insert/update operations",
      },
    },
    handler: async ({ table, operation }) => {
      return `Generated ${operation} query for ${table} table`;
    },
  },

  createApiRoute: {
    description: "Create a new API route for data operations",
    parameters: {
      route: {
        type: "string",
        description: "API route path (e.g., /api/quizzes)",
        required: true,
      },
      method: {
        type: "string",
        description: "HTTP method",
        enum: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        required: true,
      },
      description: {
        type: "string",
        description: "What this API endpoint does",
        required: true,
      },
    },
    handler: async ({ route, method }) => {
      return `Created ${method} API route: ${route}`;
    },
  },

  validateData: {
    description: "Create Zod schema for data validation",
    parameters: {
      schemaName: {
        type: "string",
        description: "Name of the validation schema",
        required: true,
      },
      fields: {
        type: "array",
        description: "Schema field definitions",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" },
            required: { type: "boolean" },
            validation: { type: "string" },
          },
        },
        required: true,
      },
    },
    handler: async ({ schemaName }) => {
      return `Created Zod validation schema: ${schemaName}`;
    },
  },
};

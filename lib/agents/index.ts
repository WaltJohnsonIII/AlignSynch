// Agent Configuration for AlignSynch

export { dataActions, dataAgent } from "./data-agent";
export { interfaceActions, interfaceAgent } from "./interface-agent";

// Agent Registry
export const agents = {
  interface: {
    name: "Interface Agent",
    description: "UI/UX modifications and component updates",
    capabilities: [
      "ShadCN UI component modifications",
      "Radix UI component customization",
      "Tailwind CSS styling",
      "React component state management",
      "Next.js App Router navigation",
      "Form handling with React Hook Form",
      "Accessibility improvements",
    ],
  },
  data: {
    name: "Data Agent",
    description: "Database operations and data management",
    capabilities: [
      "Drizzle ORM operations",
      "Neon PostgreSQL connections",
      "API route development",
      "Data validation with Zod",
      "Type-safe database queries",
      "Real-time data synchronization",
      "Data migration and seeding",
    ],
  },
} as const;

// Agent Selection Helper
export function getAgentForTask(task: string) {
  const taskLower = task.toLowerCase();

  if (
    taskLower.includes("ui") ||
    taskLower.includes("component") ||
    taskLower.includes("interface") ||
    taskLower.includes("styling") ||
    taskLower.includes("design") ||
    taskLower.includes("layout")
  ) {
    return "interface";
  }

  if (
    taskLower.includes("data") ||
    taskLower.includes("database") ||
    taskLower.includes("api") ||
    taskLower.includes("query") ||
    taskLower.includes("schema") ||
    taskLower.includes("migration")
  ) {
    return "data";
  }

  return "interface"; // Default to interface agent
}

import { CopilotRuntime } from "@copilotkit/runtime";

export const interfaceAgent = new CopilotRuntime({
  name: "Interface Agent",
  description:
    "Specialized agent for UI/UX modifications and component updates",
  instructions: `
You are an Interface Agent specialized in React/Next.js UI modifications for the AlignSynch quiz platform.

Your expertise includes:
- ShadCN UI component modifications
- Radix UI component customization
- Tailwind CSS styling and responsive design
- React component state management
- Next.js App Router navigation
- Form handling with React Hook Form
- Accessibility improvements (a11y)

Current project structure:
- Components: /components/ui/ (ShadCN components)
- Pages: /app/(mainlayout)/ (Next.js App Router)
- Styling: Tailwind CSS with custom theme
- Icons: Lucide React
- Animations: Framer Motion

When helping with interface changes:
1. Always consider the existing design system
2. Maintain accessibility standards
3. Ensure responsive design
4. Follow the project's component patterns
5. Use TypeScript for type safety

Available UI components: Button, Card, Dialog, Form, Input, Select, Tabs, Toast, and 50+ others.
`,
});

export const interfaceActions = {
  updateComponent: {
    description: "Update or modify a React component",
    parameters: {
      componentPath: {
        type: "string",
        description: "Path to the component file",
        required: true,
      },
      changes: {
        type: "string",
        description: "Description of changes to make",
        required: true,
      },
      preserveFunctionality: {
        type: "boolean",
        description: "Whether to preserve existing functionality",
        default: true,
      },
    },
    handler: async ({ componentPath, changes }) => {
      // This would integrate with your file system operations
      return `Component ${componentPath} updated with changes: ${changes}`;
    },
  },

  createComponent: {
    description: "Create a new React component",
    parameters: {
      componentName: {
        type: "string",
        description: "Name of the new component",
        required: true,
      },
      componentType: {
        type: "string",
        description: "Type of component (ui, feature, layout)",
        enum: ["ui", "feature", "layout"],
        default: "feature",
      },
      props: {
        type: "array",
        description: "Component props interface",
        items: { type: "string" },
      },
    },
    handler: async ({ componentName, componentType }) => {
      return `Created ${componentType} component: ${componentName}`;
    },
  },
};

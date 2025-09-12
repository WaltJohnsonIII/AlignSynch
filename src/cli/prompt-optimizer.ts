#!/usr/bin/env node

/**
 * Spec Kit Prompt Optimizer
 *
 * Analyzes user prompts for Spec Kit workflow alignment and provides improvement suggestions.
 * This is a minimal implementation that can be expanded based on the full specification.
 */

import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

// Types
interface Prompt {
  id: string;
  text: string;
  timestamp: Date;
  source: string;
  length: number;
  wordCount: number;
}

interface Score {
  id: string;
  promptId: string;
  overall: number;
  specAlignment: number;
  workflowStage: number;
  actionClarity: number;
  timestamp: Date;
  version: string;
}

interface Suggestion {
  id: string;
  promptId: string;
  category: string;
  priority: number;
  title: string;
  description: string;
  example: string;
  timestamp: Date;
}

interface AnalysisResult {
  id: string;
  prompt: Prompt;
  score: Score;
  suggestions: Suggestion[];
  processingTime: number;
  version: string;
}

// Scoring functions
function calculateSpecAlignment(prompt: string): number {
  const specKeywords = ["specs/", "spec/", "branch", "feature-spec.md"];
  const fileKeywords = ["app/", "components/", "lib/", "api/"];

  let score = 1;

  // Check for spec references
  if (specKeywords.some((keyword) => prompt.toLowerCase().includes(keyword))) {
    score += 4;
  }

  // Check for file paths
  if (fileKeywords.some((keyword) => prompt.toLowerCase().includes(keyword))) {
    score += 2;
  }

  // Check for project context
  if (
    prompt.toLowerCase().includes("project") ||
    prompt.toLowerCase().includes("feature")
  ) {
    score += 1;
  }

  return Math.min(score, 10);
}

function calculateWorkflowStage(prompt: string): number {
  const workflowPhases = ["specify", "plan", "build", "verify"];
  const workflowKeywords = [
    "phase",
    "workflow",
    "specification",
    "implementation",
  ];

  let score = 1;

  // Check for explicit workflow phases
  if (workflowPhases.some((phase) => prompt.toLowerCase().includes(phase))) {
    score += 5;
  }

  // Check for workflow context
  if (
    workflowKeywords.some((keyword) => prompt.toLowerCase().includes(keyword))
  ) {
    score += 2;
  }

  // Check for action words
  if (
    prompt.toLowerCase().includes("create") ||
    prompt.toLowerCase().includes("implement")
  ) {
    score += 1;
  }

  return Math.min(score, 10);
}

function calculateActionClarity(prompt: string): number {
  let score = 1;

  // Check for questions
  if (prompt.includes("?")) {
    score += 2;
  }

  // Check for specific actions
  const actionWords = ["create", "implement", "update", "fix", "add", "remove"];
  if (actionWords.some((word) => prompt.toLowerCase().includes(word))) {
    score += 2;
  }

  // Check for context
  if (prompt.length > 20) {
    score += 2;
  }

  // Check for specific details
  if (prompt.includes("/") || prompt.includes(".")) {
    score += 2;
  }

  // Check for expected outcomes
  if (
    prompt.toLowerCase().includes("return") ||
    prompt.toLowerCase().includes("result")
  ) {
    score += 1;
  }

  return Math.min(score, 10);
}

function generateSuggestions(
  prompt: string,
  scores: {
    specAlignment: number;
    workflowStage: number;
    actionClarity: number;
  }
): Suggestion[] {
  const suggestions: Suggestion[] = [];

  if (scores.specAlignment < 5) {
    suggestions.push({
      id: uuidv4(),
      promptId: "",
      category: "spec-alignment",
      priority: 5,
      title: "Add spec reference",
      description:
        "Reference a specific spec file to improve alignment with Spec Kit workflow",
      example: `"In specs/001-auth/feature-spec.md, ${prompt}"`,
      timestamp: new Date(),
    });
  }

  if (scores.workflowStage < 5) {
    suggestions.push({
      id: uuidv4(),
      promptId: "",
      category: "workflow-stage",
      priority: 4,
      title: "Specify workflow stage",
      description:
        "Indicate which SDD phase you are in (Specify/Plan/Build/Verify)",
      example: `"In the Specify phase, ${prompt}"`,
      timestamp: new Date(),
    });
  }

  if (scores.actionClarity < 5) {
    suggestions.push({
      id: uuidv4(),
      promptId: "",
      category: "action-clarity",
      priority: 3,
      title: "Add more context",
      description:
        "Provide more specific details about what you want to achieve",
      example: `"${prompt} with specific requirements and expected outcome"`,
      timestamp: new Date(),
    });
  }

  return suggestions;
}

// Main analysis function
function analyzePrompt(text: string, source = "cli"): AnalysisResult {
  const startTime = Date.now();

  // Validate input
  if (!text || text.trim().length === 0) {
    throw new Error("INVALID_PROMPT: Prompt text is required");
  }

  if (text.length > 1000) {
    throw new Error(
      "INVALID_PROMPT: Prompt text must be less than 1000 characters"
    );
  }

  const validSources = ["cli", "vscode", "cursor", "other"];
  if (!validSources.includes(source)) {
    throw new Error(
      "INVALID_SOURCE: Source must be one of: cli, vscode, cursor, other"
    );
  }

  // Create prompt object
  const prompt: Prompt = {
    id: uuidv4(),
    text: text.trim(),
    timestamp: new Date(),
    source,
    length: text.length,
    wordCount: text.split(/\s+/).length,
  };

  // Calculate scores
  const specAlignment = calculateSpecAlignment(prompt.text);
  const workflowStage = calculateWorkflowStage(prompt.text);
  const actionClarity = calculateActionClarity(prompt.text);
  const overall = Math.round(
    specAlignment * 0.4 + workflowStage * 0.3 + actionClarity * 0.3
  );

  const score: Score = {
    id: uuidv4(),
    promptId: prompt.id,
    overall,
    specAlignment,
    workflowStage,
    actionClarity,
    timestamp: new Date(),
    version: "1.0.0",
  };

  // Generate suggestions
  const suggestions = generateSuggestions(prompt.text, {
    specAlignment,
    workflowStage,
    actionClarity,
  });
  suggestions.forEach((suggestion) => {
    suggestion.promptId = prompt.id;
  });

  const processingTime = Date.now() - startTime;

  return {
    id: uuidv4(),
    prompt,
    score,
    suggestions,
    processingTime,
    version: "1.0.0",
  };
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "--help" || args[0] === "help") {
    console.log(`
Spec Kit Prompt Optimizer v1.0.0
================================

Analyzes user prompts for Spec Kit workflow alignment and provides improvement suggestions.

USAGE:
    goose prompt-optimizer <COMMAND>

COMMANDS:
    analyze    Analyze a prompt and return score + suggestions
    history    Show recent analysis history
    help       Show this help message

EXAMPLES:
    # Analyze a prompt
    goose prompt-optimizer analyze --prompt "Create auth feature"

    # Analyze with JSON output
    goose prompt-optimizer analyze --prompt "Create auth feature" --output json

    # Show history
    goose prompt-optimizer history --limit 10

    # Show help
    goose prompt-optimizer --help

SCORING CRITERIA:
    - Spec Alignment (40%): References to specs, branches, files
    - Workflow Stage (30%): Specify/Plan/Build/Verify phase clarity
    - Action Clarity (30%): Specific, actionable requests

For more information, see: specs/005-prompt-optimizer/
    `);
    return;
  }

  const command = args[0];

  if (command === "analyze") {
    let promptText = "";
    let source = "cli";
    let output = "text";

    // Parse arguments
    for (let i = 1; i < args.length; i++) {
      if (args[i] === "--prompt" && i + 1 < args.length) {
        promptText = args[i + 1];
        i++;
      } else if (args[i] === "--source" && i + 1 < args.length) {
        source = args[i + 1];
        i++;
      } else if (args[i] === "--output" && i + 1 < args.length) {
        output = args[i + 1];
        i++;
      }
    }

    if (!promptText) {
      console.error("Error: --prompt argument is required");
      process.exit(1);
    }

    try {
      const result = analyzePrompt(promptText, source);

      if (output === "json") {
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.log(`
Prompt Analysis Results:
=======================

Overall Score: ${result.score.overall}/10

Breakdown:
- Spec Alignment: ${result.score.specAlignment}/10
- Workflow Stage: ${result.score.workflowStage}/10
- Action Clarity: ${result.score.actionClarity}/10

Suggestions:
${result.suggestions.map((s, i) => `${i + 1}. [${s.priority === 5 ? "HIGH" : s.priority === 4 ? "MEDIUM" : "LOW"}] ${s.title}: ${s.description}`).join("\n")}

Processing Time: ${result.processingTime}ms
        `);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else if (command === "history") {
    console.log("History feature not yet implemented");
  } else {
    console.error(`Unknown command: ${command}`);
    console.error("Use --help for usage information");
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  analyzePrompt,
  calculateSpecAlignment,
  calculateWorkflowStage,
  calculateActionClarity,
};

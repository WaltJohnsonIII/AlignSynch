#!/usr/bin/env node

/**
 * Spec Kit Prompt Optimizer - Working Script
 *
 * This is a simple, working script that you can actually use.
 * It analyzes prompts and gives you scores and suggestions.
 */

// Simple scoring function
function scorePrompt(prompt) {
  let specAlignment = 1;
  let workflowStage = 1;
  let actionClarity = 1;

  // Check for spec references
  if (
    prompt.toLowerCase().includes("spec") ||
    prompt.toLowerCase().includes("branch")
  ) {
    specAlignment += 4;
  }
  if (
    prompt.toLowerCase().includes("app/") ||
    prompt.toLowerCase().includes("components/")
  ) {
    specAlignment += 2;
  }

  // Check for workflow phases
  if (
    prompt.toLowerCase().includes("specify") ||
    prompt.toLowerCase().includes("plan") ||
    prompt.toLowerCase().includes("build") ||
    prompt.toLowerCase().includes("verify")
  ) {
    workflowStage += 5;
  }
  if (
    prompt.toLowerCase().includes("workflow") ||
    prompt.toLowerCase().includes("phase")
  ) {
    workflowStage += 2;
  }

  // Check for action clarity
  if (
    prompt.toLowerCase().includes("create") ||
    prompt.toLowerCase().includes("implement") ||
    prompt.toLowerCase().includes("add") ||
    prompt.toLowerCase().includes("build")
  ) {
    actionClarity += 3;
  }
  if (prompt.length > 50) {
    actionClarity += 1;
  }

  // Cap at 10
  specAlignment = Math.min(specAlignment, 10);
  workflowStage = Math.min(workflowStage, 10);
  actionClarity = Math.min(actionClarity, 10);

  const overall = Math.round(
    specAlignment * 0.4 + workflowStage * 0.3 + actionClarity * 0.3
  );

  return {
    overall,
    specAlignment,
    workflowStage,
    actionClarity,
  };
}

// Generate suggestions
function getSuggestions(prompt, scores) {
  const suggestions = [];

  if (scores.specAlignment < 5) {
    suggestions.push({
      priority: "HIGH",
      title: "Add spec reference",
      description: "Reference specific specs, branches, or files",
      example: "In spec 001-auth, create...",
    });
  }

  if (scores.workflowStage < 5) {
    suggestions.push({
      priority: "MEDIUM",
      title: "Specify workflow stage",
      description: "Mention which phase: Specify, Plan, Build, or Verify",
      example: "In the Specify phase, create...",
    });
  }

  if (scores.actionClarity < 5) {
    suggestions.push({
      priority: "LOW",
      title: "Add more context",
      description: "Provide more details about what you want",
      example:
        "Create a user authentication feature with WorkOS integration...",
    });
  }

  return suggestions;
}

// Main function
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "--help" || args[0] === "help") {
    console.log(`
🎯 Spec Kit Prompt Optimizer

USAGE:
  node prompt-optimizer.js "your prompt here"
  node prompt-optimizer.js --help

EXAMPLES:
  node prompt-optimizer.js "Create auth feature"
  node prompt-optimizer.js "In spec 001-auth, create user authentication"

SCORING:
  - Spec Alignment (40%): References to specs, branches, files
  - Workflow Stage (30%): Specify/Plan/Build/Verify phase clarity
  - Action Clarity (30%): Specific, actionable requests

This tool helps you write better prompts for the Spec Kit workflow.
`);
    return;
  }

  const prompt = args.join(" ");

  if (!prompt.trim()) {
    console.log("❌ Error: Please provide a prompt to analyze");
    return;
  }

  console.log("🎯 Analyzing your prompt...\n");
  console.log(`📝 Prompt: "${prompt}"\n`);

  const scores = scorePrompt(prompt);
  const suggestions = getSuggestions(prompt, scores);

  console.log("📊 SCORES:");
  console.log(`   Overall: ${scores.overall}/10`);
  console.log(`   Spec Alignment: ${scores.specAlignment}/10`);
  console.log(`   Workflow Stage: ${scores.workflowStage}/10`);
  console.log(`   Action Clarity: ${scores.actionClarity}/10\n`);

  if (suggestions.length > 0) {
    console.log("💡 SUGGESTIONS:");
    suggestions.forEach((suggestion, i) => {
      console.log(`   ${i + 1}. [${suggestion.priority}] ${suggestion.title}`);
      console.log(`      ${suggestion.description}`);
      console.log(`      Example: "${suggestion.example}"\n`);
    });
  } else {
    console.log("✅ Great prompt! No suggestions needed.\n");
  }

  // Give a grade
  let grade;
  if (scores.overall >= 8) grade = "A";
  else if (scores.overall >= 6) grade = "B";
  else if (scores.overall >= 4) grade = "C";
  else grade = "D";

  console.log(`🏆 Grade: ${grade} (${scores.overall}/10)`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
